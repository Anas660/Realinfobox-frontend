<template>
  <div class="Layout mt-5">
    <Loader v-if="isPageLoading" />
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
        <h4 class="mb-2">Place picker</h4>
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

      <section
        class="d-flex mb-5 flex-col border-0 border-b border-solid border-swissCoffee pb-7"
      >
        <WinnipegEntryTable v-model="data" :city="selectedCity" />
        <div class="ml-auto mt-5">
          <v-btn color="Save success" @click="putData"> Save </v-btn>
        </div>
      </section>

      <section>
        <h4 class="mb-2">Data</h4>
        <div class="w-1/4">
          <v-autocomplete
            v-model="selectedPlace"
            :items="locationArray('winnipeg')"
            auto-select-first
            item-text="name"
            label="Places"
            outlined
            return-object
          />
        </div>
        <v-radio-group v-model="tableRadio" row>
          <v-radio
            v-for="category in radioCategories"
            :key="category"
            :label="category"
            :value="category"
          />
        </v-radio-group>

        <v-data-table
          :headers="headers"
          :items="tableData"
          :items-per-page="25"
          class="EditorsTable"
        >
          <template v-if="isPageLoading" #body>
            <SkeletonTableRows :table-headers="headers" />
          </template>
          <template #item.salesToListingRatio="{ item }">
            {{
              item.salesToListingRatio ? `${item.salesToListingRatio} %` : '-'
            }}
          </template>
          <template #item.sold="{ item }">
            {{ item.sold ? `${item.sold}` : '-' }}
          </template>
          <template #item.newListings="{ item }">
            {{ item.newListings ? `${item.newListings}` : '-' }}
          </template>
          <template #item.dom="{ item }">
            {{ item.dom ? `${item.dom}` : '-' }}
          </template>
          <template #item.averagePrice="{ item }">
            {{ item.averagePrice ? `${item.averagePrice}` : '-' }}
          </template>
          <template #item.updatedAt="{ item }">
            <div class="">
              {{ item.updatedAt | datetime(item.updatedAt) }}
            </div>
          </template>
        </v-data-table>
      </section>
    </div>
  </div>
</template>

<script>
import Loader from '~/components/atoms/Loader';
import WinnipegEntryTable from '~/components/molecules/WinnipegEntryTable';
import structureMixin from '~/mixins/structureMixin';

export default {
  components: {
    Loader,
    WinnipegEntryTable,
  },
  mixins: [structureMixin],
  data() {
    return {
      isLoading: false,
      isEntryLoading: false,
      selectedPlace: {
        name: 'Winnipeg',
      },
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      data: null,
      selectedCity: 'winnipeg',
      tableRadio: 'Detached',
      radioCategories: ['Detached', 'Attached', 'Condo'],
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
          text: 'New Listings',
          value: 'newListings',
        },
        {
          text: 'Sales To Listings Ratio',
          value: 'salesToListingRatio',
        },
        {
          text: 'DOM',
          value: 'dom',
        },
        {
          text: 'Average Price',
          value: 'averagePrice',
        },
      ],
    };
  },
  computed: {
    isPageLoading() {
      return this.isLoading || this.isEntryLoading;
    },

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

      const mappedData = this.placeData
        .map(item => {
          const { month, year } = item.attrs;
          return {
            ...item[this.tableRadio.toLowerCase()],
            keyDate: item.attrs.date,
            date: `${months[month - 1]} - ${year}`,
          };
        })
        .reverse();
      console.log(this.placeData);
      return mappedData;
    },
  },

  watch: {
    selectedPlace: function () {
      if (this.selectedPlace.name) {
        this.fetchDetailData();
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
    this.$store.dispatch('reports/loadStructure', { city: 'winnipeg' });
    this.fetchData();
    this.fetchDetailData();
    this.loadLastAvailable();
  },

  methods: {
    async fetchDetailData() {
      try {
        this.isEntryLoading = true;
        const encodedPlace = encodeURIComponent(this.selectedPlace.name);

        const { data } = await this.$axios.get(
          `/reports/winnipeg/statistics/${encodedPlace}`,
        );
        this.placeData = data.months;
      } catch (error) {
        this.$snack.show('Failed to fetch detail data', 'error');
      } finally {
        this.isEntryLoading = false;
      }
    },
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
          `/reports/winnipeg/statistics/${this.year}/${this.month}`,
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
          `/reports/winnipeg/statistics/${this.year}/${this.month}`,
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
</style>
