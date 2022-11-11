<template>
  <div>
    <DateHeader title="Logs" @handleYearChange="handleDateChange" />
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
          <template #item.createdAt="{ item }">
            {{ item.createdAt | datetime(item.timezone) }}
          </template>
        </v-data-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import DateHeader from '../components/DateHeader';
import ListsMixin from '~/mixins/lists';

export default {
  components: {
    DateHeader,
  },
  mixins: [ListsMixin],
  data() {
    return {
      tableHeaders: [
        { text: 'Created At', value: 'createdAt' },
        { text: 'Action', value: 'action' },
        { text: 'Value', value: 'value' },
        { text: 'User', value: 'user' },
        { text: 'City', value: 'city' },
      ],
    };
  },
  computed: {
    ...mapState({
      logs: state => state.statistics.logs,
      pending: state => state.statistics.pending,
    }),
    isLoading() {
      return this.pending;
    },
    tableData() {
      if (!this.logs) return [];

      return this.logs;
    },
  },
  created() {
    this.getLogs();
  },
  methods: {
    getLogs(date) {
      let timestamp = date;

      if (!timestamp)
        timestamp = `${new Date().getFullYear()}-${new Date().getMonth() + 1}`;

      this.$store.dispatch({
        type: 'statistics/getLogs',
        timestamp,
      });
    },
    handleDateChange(date) {},
  },
};
</script>
