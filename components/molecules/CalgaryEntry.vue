<template>
  <div>
    <Loader v-if="isPageLoading" />
    <div v-else>
      <section
        class="mb-7 border-0 border-b border-solid border-swissCoffee pb-5"
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

      <section class="mb-5 border-0 border-b border-solid border-swissCoffee">
        <v-file-input
          v-model="calgaryXlsx"
          :disabled="isEntryLoading"
          append-outer-icon="mdi-paperclip"
          prepend-icon=""
          class="w-1/4"
          dense
          label="Data Upload"
          outlined
          @change="uploadCalgary"
        />
      </section>

      <section class="w-1/2">
        <h4 class="mb-2">Data Viewer</h4>
        <v-autocomplete
          v-model="selectedPlace"
          class="m-0"
          :items="locationArray('calgary')"
          return-object
          item-text="name"
          auto-select-first
          label="Places"
          outlined
        />
      </section>

      <section>
        <h4 class="mb-2">Type of house</h4>
        <v-radio-group v-model="tableRadio" row class="m-0">
          <v-radio
            v-for="category in radioCategories"
            :key="category"
            :label="category"
            :value="category"
          />
        </v-radio-group>
      </section>

      <v-data-table
        :headers="headers"
        :items="tableData"
        :items-per-page="25"
        class="EditorsTable"
      >
        <template v-if="isPageLoading" #body>
          <SkeletonTableRows :table-headers="headers" />
        </template>

        <template #header.action>
          <div class="w-100 text-right">Actions</div>
        </template>

        <template #item.updatedAt="{ item }">
          <div class="">
            {{ item.updatedAt | datetime(item.updatedAt) }}
          </div>
        </template>

        <template #item.action="{ item }">
          <div class="d-flex justify-content-end">
            <v-btn icon class="mr-2" @click="editItem(item)">
              <v-icon> mdi-pencil </v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </div>

    <section
      class="mb-7 border-0 border-b border-solid border-swissCoffee pb-3"
    >
      <CalgaryDataEntryDialog
        :visible="dialogs.editCalgaryDataEntry.visible"
        :entry="dialogs.editCalgaryDataEntry.data"
        :error="dialogs.editCalgaryDataEntry.error"
        :busy="dialogBusy"
        @submit="updateDataEntry"
        @close="closeDialog"
      />
    </section>

    <MarketDistribution city="calgary" />
  </div>
</template>

<script>
import axios from 'axios';

import Loader from '~/components/atoms/Loader';
import CalgaryDataEntryDialog from '~/components/organisms/CalgaryDataEntryDialog';
import MarketDistribution from '~/components/organisms/MarketDistribution';

import structureMixin from '~/mixins/structureMixin';

export default {
  components: {
    CalgaryDataEntryDialog,
    Loader,
    MarketDistribution,
  },

  mixins: [structureMixin],

  data() {
    return {
      // UI
      isEntryLoading: false,

      // INPUTS
      cities: ['Calgary'],

      // TABLE UI LOGIC
      tableRadio: 'Detached',
      radioCategories: ['Detached', 'Semi-detached', 'Row', 'Apartment'],
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
          text: 'Benchmark YTD',
          value: 'benchmarkPriceYTD',
        },
        {
          text: 'Benchmark price',
          value: 'benchmarkPrice',
        },
        {
          text: 'Last update',
          value: 'updatedAt',
        },
        {
          text: 'Actions',
          value: 'action',
          sortable: false,
          align: 'right',
        },
      ],

      selectedPlace: {
        name: 'City of Calgary',
      },
      placeData: [],

      // CALGARY UPLOAD
      calgaryXlsx: undefined,

      selectedCity: 'calgary',

      dialogs: {
        editCalgaryDataEntry: {
          data: null,
          visible: false,
          error: null,
        },
      },

      dialogBusy: false,
    };
  },

  computed: {
    isPageLoading() {
      return this.isLoading || this.isEntryLoading;
    },

    month() {
      const month = new Date().getMonth();
      const currMonth = month === 0 ? 11 : month;
      return currMonth;
    },

    year() {
      const year = new Date().getFullYear();
      const currYear = this.month === 11 ? year - 1 : year;
      return currYear;
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

      const areValuesValid = value =>
        value.sold &&
        value.active &&
        value.dom &&
        value.benchmarkPriceYTD &&
        value.benchmarkPrice;

      return mappedData.filter(areValuesValid);
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
  },

  watch: {
    selectedPlace: function () {
      if (this.selectedPlace.name) {
        this.fetchDetailData();
      }
    },
  },

  created() {
    this.fetchDetailData();
    this.loadLastAvailable();
  },

  methods: {
    closeDialog() {
      this.dialogs.editCalgaryDataEntry.visible = false;
    },
    editItem(item) {
      this.dialogs.editCalgaryDataEntry.data = item;
      this.dialogs.editCalgaryDataEntry.visible = true;
    },
    async updateDataEntry(data) {
      try {
        this.dialogBusy = true;

        await this.$axios.put(
          `/reports/calgary/${this.selectedPlace.name}/${this.tableRadio}`,
          data,
        );

        await this.fetchDetailData();

        this.dialogs.editCalgaryDataEntry.visible = false;

        this.$snack.show('Saved successfully', 'success');
      } catch (error) {
        this.$snack.show('Saving error', 'error');
      } finally {
        this.dialogBusy = false;
      }
    },
    async fetchDetailData() {
      try {
        this.isEntryLoading = true;
        const encodedPlace = encodeURIComponent(this.selectedPlace.name);

        const { data } = await this.$axios.get(
          `/reports/calgary/${this.year}/${this.month + 1}/${encodedPlace}`,
        );
        this.placeData = data.months;
      } catch (error) {
        this.$snack.show('Failed to fetch detail data', 'error');
      }

      this.isEntryLoading = false;
    },

    async uploadCalgary() {
      try {
        this.isEntryLoading = true;

        const { url } = await this.$axios.$get('/reports/calgary/upload-url', {
          params: {
            month: 10,
            year: 2020,
            type: this.calgaryXlsx.type,
          },
        });

        await axios.put(url, this.calgaryXlsx, {
          headers: {
            'Content-Type': this.calgaryXlsx.type,
          },
        });

        this.calgaryXlsx = undefined;
        this.$snack.show('Data uploaded successfuly', 'success');

        this.fetchDetailData();
      } catch (error) {
        this.showFailure = true;
        this.calgaryXlsx = undefined;
        this.$snack.show('Failed to upload data', 'error');
      }

      this.isEntryLoading = false;
    },

    async loadLastAvailable() {
      await this.$store.dispatch('reports/loadLastAvailable', {
        city: this.selectedCity,
      });
    },
  },
};
</script>
