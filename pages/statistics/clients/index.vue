<template>
  <div>
    <Header
      title="Clients accounts (new vs. cancellation)"
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
          <template #item.state="{ item }">
            {{ item.enabled }}/{{ item.disabled }}
          </template>
        </v-data-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Header from '../components/Header';
import ListsMixin from '~/mixins/lists';

export default {
  components: {
    Header,
  },
  mixins: [ListsMixin],
  data() {
    return {
      tableHeaders: [
        { text: 'Date', value: 'date' },
        { text: 'Added clients', value: 'new' },
        { text: 'Activated', value: 'activated' },
        { text: 'Verified emails', value: 'verified' },
        { text: 'Accounts Enabled / Disabled', value: 'state' },
      ],
    };
  },
  computed: {
    ...mapState({
      clients: state => state.statistics.clients,
      pending: state => state.statistics.pending,
    }),
    isLoading() {
      return this.pending;
    },
    tableData() {
      if (!this.clients) return [];

      return this.clients;
    },
  },
  created() {
    this.getClientsStatistics(new Date().getFullYear());
  },
  methods: {
    handleYearChange(year) {
      this.getClientsStatistics(year);
    },
    getClientsStatistics(year) {
      this.$store.dispatch({
        type: 'statistics/getClientsStatistics',
        year,
      });
    },
  },
};
</script>
