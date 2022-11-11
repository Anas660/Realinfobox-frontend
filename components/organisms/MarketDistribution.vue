<template>
  <div>
    <h4 class="mb-2">Market distribution (Full Report)</h4>
    <div class="d-flex mb-5 w-1/2">
      <v-select
        v-model="month"
        hide-details
        class="mr-5"
        :items="months"
        label="Month"
        outlined
      />
      <v-select
        v-model="year"
        hide-details
        :items="years"
        label="Year"
        outlined
      />
    </div>
    <div>
      <MarketDistributionInputTable
        :value="marketDistributionValue"
        :loading="loading"
        :property-types="propertyTypes"
        @input="updateDistro"
      />
      <v-btn
        color="success"
        class="float-right mr-11"
        :disabled="loading"
        @click="saveMarketDistro"
      >
        Save
      </v-btn>
    </div>
  </div>
</template>

<script>
import _debounce from 'lodash/debounce';
import MarketDistributionInputTable from '~/components/molecules/MarketDistributionInputTable.vue';

export default {
  components: {
    MarketDistributionInputTable,
  },

  props: {
    city: { type: String, required: true },
  },

  data() {
    return {
      loading: true,
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
      calgary: {
        mdData: null,
        mdRanges: null,
        marketDistribution: [],
        propertyTypes: ['detached', 'semi', 'row', 'apartment'],
      },
      edmonton: {
        mdData: null,
        mdRanges: null,
        marketDistribution: [],
        propertyTypes: ['detached', 'residential', 'condo'],
      },
      cityOptions: [
        {
          value: 'calgary',
          text: 'Calgary',
        },
        {
          value: 'edmonton',
          text: 'Edmonton',
        },
      ],
    };
  },

  computed: {
    marketDistributionValue() {
      return this[this.city].marketDistribution;
    },

    date() {
      if (!this.month || !this.year) return null;
      return `${this.year}-${this.month}`;
    },

    dataEndpoint() {
      if (!this.city || !this.date) return null;
      const month = `${this.month}`.padStart(2, 0);
      return `reports/${this.city}/${this.year}/${month}/market-distribution`;
    },

    months() {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    },

    years() {
      const currentYear = new Date().getFullYear();
      const years = [currentYear];
      for (let i = 1; i < 6; i++) {
        years.push(currentYear - i);
      }
      return years;
    },

    propertyTypes() {
      return this[this.city].propertyTypes;
    },

    loadedData() {
      return [this[this.city].mdData, this[this.city].mdRanges];
    },
  },

  watch: {
    dataEndpoint: {
      handler: _debounce(function () {
        this.loadMarketDistro();
      }, 150),
      immediate: true,
    },
  },

  methods: {
    async loadMarketDistro() {
      if (!this.dataEndpoint) {
        return;
      }

      try {
        this.loading = true;
        const { data } = await this.$axios.$get(this.dataEndpoint);
        this[this.city].marketDistribution = data;
      } catch (error) {
        this.$snack.show("Couldn't load market distribution");
      }

      this.loading = false;
    },

    async saveMarketDistro() {
      if (!this.dataEndpoint) {
        return;
      }

      try {
        this.loading = true;

        await this.$axios.$put(this.dataEndpoint, {
          data: this[this.city].marketDistribution,
        });
        this.$snack.show('Saved successfully', 'success');
      } catch (error) {
        this.$snack.show("Couldn't save market distribution");
      }

      this.loading = false;
    },

    updateDistro(val) {
      this[this.city].marketDistribution = val;
    },
  },
};
</script>
