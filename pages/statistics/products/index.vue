<template>
  <div>
    <Header
      title="Clients vs. Products (clients/reports & newsletter/reports/newsletters)"
      @handleYearChange="handleYearChange"
    />
    <div class="container-fluid elevation-1 white">
      <div class="row">
        <v-data-table
          :headers="tableHeaders"
          :items="tableData"
          :items-per-page="-1"
          :hide-default-footer="true"
          :loading="isLoading"
          class="w-100"
        >
        </v-data-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import Header from '../components/Header';
import ListsMixin from '~/mixins/lists';

export default {
  components: {
    Header,
  },
  mixins: [ListsMixin],
  data() {
    return {
      tableHeaders: [],
    };
  },
  computed: {
    ...mapGetters({
      cities: 'config/citiesArray',
    }),
    ...mapState({
      products: state => state.statistics.products,
      pending: state => state.statistics.pending,
    }),
    isLoading() {
      return this.pending;
    },
    tableData() {
      if (!this.products) return [];

      return this.products;
    },
  },
  watch: {
    cities: {
      handler() {
        if (!this.cities) return;

        const result = this.cities.map(city => {
          return {
            text: city.attributes.name,
            value: city.attributes.name.toLowerCase(),
          };
        });

        this.tableHeaders = [
          { text: 'Date', value: 'date' },
          ...result,
          { text: 'SUM', value: 'sum' },
        ];
      },
      immediate: true,
    },
  },
  created() {
    this.$nextTick(() => {
      if (!this.cities.length) this.loadCities();
    });

    this.getClientsStatistics(new Date().getFullYear());
  },
  methods: {
    loadCities() {
      this.$store.dispatch('config/loadCities', {});
    },
    handleYearChange(year) {
      this.getClientsStatistics(year);
    },
    getClientsStatistics(year) {
      this.$store.dispatch({
        type: 'statistics/getProductsStatistics',
        year,
      });
    },
  },
};
</script>
