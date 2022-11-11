<template>
  <div class="Layout">
    <Loader v-if="isLoading" />
    <div v-else class="Content">
      <section
        class="mb-7 border-0 border-b border-solid border-swissCoffee pb-3"
      >
        <h4 class="mb-2">Report display</h4>
        <v-menu :close-on-content-click="false">
          <template #activator="{ on }">
            <v-btn outlined v-on="on">
              {{ lastAvailable }}
            </v-btn>
          </template>
          <v-date-picker v-model="lastAvailable" type="month" />
        </v-menu>
      </section>

      <section class="mb-5">
        <h4 class="mb-2">Data</h4>
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
      <EntryTable v-model="data" :city="selectedCity" />
      <div class="ml-auto mt-5">
        <v-btn color="Save success" @click="putData"> Save </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '~/components/atoms/Loader';
import EntryTable from '~/components/molecules/EntryTable';

export default {
  components: {
    Loader,
    EntryTable,
  },

  data() {
    return {
      isLoading: false,
      selectedPlace: 'Victoria',
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
      data: null,
      selectedCity: 'victoria',
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

    years() {
      let currentYear = new Date().getFullYear();
      return Array.from({ length: 11 }, (_, k) => currentYear - k);
    },

    months() {
      return Array.from({ length: 12 }, (_, k) => 1 + k);
    },
  },

  watch: {
    selectedPlace: function () {
      if (this.selectedPlace) {
        this.fetchData();
      }
    },

    month: function () {
      if (this.month) {
        this.fetchData();
      }
    },

    year: function () {
      if (this.year) {
        this.fetchData();
      }
    },
  },

  created() {
    this.fetchData();
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

    async fetchData() {
      try {
        this.isLoading = true;
        this.data = await this.$axios.$get(
          `/reports/data/victoria/${this.year}/${this.month}/${this.selectedPlace}`,
        );

        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.$snack.show('Failed to fetch data', 'error');
      }
    },

    async putData() {
      try {
        this.isLoading = true;
        await this.$axios.$put(
          `/reports/data/victoria/${this.year}/${this.month}/${encodeURI(
            this.selectedPlace,
          )}`,
          this.data,
        );

        this.isLoading = false;
        this.$snack.show('Data updated successfuly', 'success');
      } catch (error) {
        this.isLoading = false;
        this.$snack.show('Failed to update data', 'error');
      }
    },
  },
};
</script>

<style scoped>
.Content {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1200px;
}

.Save {
  align-self: center;
}
</style>
