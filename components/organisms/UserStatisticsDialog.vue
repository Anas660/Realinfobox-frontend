<template>
  <v-dialog v-model="value" width="1200" @click:outside="$emit('close')">
    <v-card :loading="false">
      <div class="d-flex justify-content-between align-items-center">
        <v-card-title
          class="header d-flex justify-content-between align-items-center"
          primary-title
        >
          User statistics: {{ pending ? 'Loading ...' : user }}

          <v-select
            class="select-date"
            :items="selectedDates"
            :value="selectedDate"
            label="Select Month"
            @input="handleDateChange"
          />
        </v-card-title>
      </div>

      <v-data-table
        :headers="tableHeaders"
        :items="pending ? [] : userLoginLogs"
        :loading="pending"
        :footer-props="{
          'items-per-page-options': [25, 50, 100, -1],
        }"
        class="w-100"
      >
        <template #item.createdAt="{ item }">
          {{ item.createdAt | datetime(item.timezone) }}
        </template>
      </v-data-table>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex';
import _ from 'lodash';

export default {
  components: {},
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    busy: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      tableHeaders: [
        { text: 'Created At', value: 'createdAt' },
        { text: 'Action', value: 'action' },
        { text: 'Value', value: 'value' },
        { text: 'User', value: 'user' },
        { text: 'City', value: 'city' },
      ],
      selectedDates: [],
      selectedDate: null,
      userInfo: null,
    };
  },
  computed: {
    ...mapState({
      userLoginLogs: state => state.statistics.userLogs,
      user: state => state.statistics.user,
      pending: state => state.statistics.pending,
    }),
  },
  watch: {
    user: {
      handler(user) {},
      deep: true,
      immediate: true,
    },
    userId: {
      handler(userId) {
        this.$nextTick(() => {
          if (!userId) {
            return;
          }

          this.getLogs();
        });
      },
      deep: true,
      immediate: true,
    },
  },

  created() {
    this.selectedDate = `${new Date().getFullYear()}-${
      new Date().getMonth() + 1
    }`;

    const datesToSelect = [];
    const years = this.getYears();

    years.forEach(year => {
      const months = this.getMonths(year);

      months.map(month => {
        datesToSelect.push(`${year}-${month}`);
      });
    });

    this.selectedDates = datesToSelect;
  },

  methods: {
    closeCreateDialog() {
      this.$emit('close');
      this.$store.dispatch({
        type: 'statistics/clear',
      });
    },
    getLogs(date) {
      let timestamp = date;

      if (!timestamp)
        timestamp = `${new Date().getFullYear()}-${new Date().getMonth() + 1}`;

      this.$store.dispatch({
        type: 'statistics/getUserLogs',
        userId: this.userId,
        timestamp: timestamp,
      });
    },
    handleDateChange(date) {
      this.selectedDate = date;

      this.getLogs(date);
    },
    getYears() {
      return _.range(2022, new Date().getFullYear() + 1).reverse();
    },
    getMonths(year) {
      if (year === new Date().getFullYear()) {
        const startMonth = year === 2022 ? 8 : 1;
        return _.range(startMonth, new Date().getMonth() + 2).reverse();
      } else {
        return _.range(1, 13).reverse();
      }
    },
  },
};
</script>

<style>
.header {
  width: 100%;
}
.select-date {
  max-width: 15rem;
}
</style>
