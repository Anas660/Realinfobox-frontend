<template>
  <div>
    <Loader v-if="isLoading || isDetailLoading" />
    <div
      v-else
      class="mb-7 border-0 border-b border-solid border-swissCoffee pb-3"
    >
      <section
        class="mb-7 border-0 border-b border-solid border-swissCoffee pb-3"
      >
        <h4>Report display</h4>
        <v-menu :close-on-content-click="false">
          <template #activator="{ on }">
            <v-btn outlined v-on="on">
              {{ lastAvailable }}
            </v-btn>
          </template>
          <v-date-picker v-model="lastAvailable" type="month" />
        </v-menu>
      </section>

      <section class="mb-7">
        <h4 class="mb-2">Data & Market distribution (Full Report)</h4>
        <div class="d-flex w-1/2">
          <v-select
            v-model="month"
            class="mr-5"
            :items="months"
            hide-details
            label="Month"
            outlined
          />
          <v-select
            v-model="year"
            :items="years"
            hide-details
            label="Year"
            outlined
          />
        </div>
      </section>

      <EdmontonEntryTable v-model="data" />
      <div class="d-flex my-10 ml-auto mr-11">
        <v-btn color="Save success" @click="putEdmontonData">Save</v-btn>
      </div>
    </div>
    <MarketDistribution city="edmonton" />
  </div>
</template>

<script>
import Loader from '~/components/atoms/Loader';
import EdmontonEntryTable from '~/components/molecules/EdmontonEntryTable';
import MarketDistribution from '~/components/organisms/MarketDistribution';

import structureMixin from '~/mixins/structureMixin';

export default {
  components: {
    Loader,
    EdmontonEntryTable,
    MarketDistribution,
  },

  mixins: [structureMixin],

  data() {
    return {
      data: null,
      geojet: null,
      isDetailLoading: false,
      isLoading: false,
      radioCategories: ['Detached', 'Duplex', 'Condo', 'Residential'],
      selectedCategory: 'Detached',
      selectedCity: 'edmonton',
      selectedPlace: {
        name: 'Edmonton',
      },
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
      placeData: [],

      headers: [
        {
          text: 'Date',
          value: 'date',
        },
        {
          text: 'Sold',
          value: 'sold',
        },
        {
          text: 'Active',
          value: 'active',
        },
        {
          text: 'DOM',
          value: 'dom',
        },
        {
          text: 'Average Price YTD',
          value: 'benchmarkPriceYTD',
        },
        {
          text: 'Average Price',
          value: 'benchmarkPrice',
        },
      ],
    };
  },
  computed: {
    lastAvailable: {
      get() {
        return this.$store.state.reports[this.selectedCity].lastAvailable;
      },
      set(val) {
        this.$store.dispatch('reports/setLastAvailable', {
          city: this.selectedCity,
          date: val,
        });
      },
    },

    tableData() {
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];

      return this.placeData
        .map(item => {
          const { month, year } = item.attrs;
          return {
            ...item[this.selectedCategory.toLowerCase()],
            date: `${months[month - 1]} - ${year}`,
          };
        })
        .reverse();
    },

    years() {
      let currentYear = new Date().getFullYear();
      return Array.from({ length: 11 }, (_, k) => currentYear - k);
    },

    places() {
      return this.$store.state.reports.edmonton.structure;
    },

    months() {
      return Array.from({ length: 12 }, (_, k) => 1 + k);
    },
  },

  watch: {
    selectedPlace: function () {
      if (this.selectedPlace) {
        this.fetchDetailData();
      }
    },

    month: function () {
      if (this.month) {
        this.fetchEdmontonData();
      }
    },

    year: function () {
      if (this.year) {
        this.fetchEdmontonData();
      }
    },
  },

  created() {
    this.$store.dispatch('reports/loadStructure', { city: 'edmonton' });
    this.fetchDetailData();
    this.fetchEdmontonData();
    this.loadLastAvailable();
  },

  methods: {
    async loadLastAvailable() {
      await this.$store.dispatch('reports/loadLastAvailable', {
        city: this.selectedCity,
      });
      const lastAvailableDate =
        this.$store.state.reports[this.selectedCity].lastAvailable;
      if (lastAvailableDate) {
        const [year, month] = lastAvailableDate.split('-');

        this.year = parseInt(year) || this.year;
        this.month = parseInt(month) || this.month;
      }
    },

    updateEntry(val, propertyType) {
      this.data[propertyType] = val;
    },

    async fetchEdmontonData() {
      try {
        this.isLoading = true;
        const response = await this.$axios.$get(
          `/reports/data/edmonton/${this.year}/${this.month}/Edmonton`,
        );

        this.data = response;
        this.geojet = response.geojet;

        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.$snack.show('Failed to fetch data', 'error');
      }
    },

    async fetchDetailData() {
      try {
        this.isDetailLoading = true;
        const encodedPlace = encodeURIComponent(this.selectedPlace.name);

        const { data } = await this.$axios.get(
          `/reports/edmonton/${this.year}/${this.month}/${encodedPlace}`,
        );
        const { geojet, months } = data || {};

        this.placeData = months;
        this.geojet = geojet;
        this.isDetailLoading = false;
      } catch (error) {
        this.isDetailLoading = false;
        this.$snack.show('Failed to load the detail', 'danger');
      }
    },

    async putEdmontonData() {
      try {
        this.isLoading = true;
        await this.$axios.$put(
          `/reports/data/edmonton/${this.year}/${this.month}/Edmonton`,
          this.data,
        );

        this.isLoading = false;
        this.$snack.show('Data updated successfully', 'success');
      } catch (error) {
        this.isLoading = false;
        this.$snack.show('Failed to update data', 'error');
      }
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.Content {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1200px;
}
</style>
