import subMonths from 'date-fns/subMonths';
import parse from 'date-fns/parse';

export default {
  data() {
    return {
      reportYear: null,
      reportMonth: null,
      cancelToken: null,
    };
  },

  computed: {
    name() {
      return this.$route.params.name;
    },

    routeCity() {
      return this.$route.params.cityName;
    },

    lastMonth() {
      const parsed = parse(this.lastAvailable, 'yyyy-mm', new Date());
      return subMonths(parsed, 1);
    },

    lastMonthCalendar() {
      return this.lastMonth.getMonth() + 1;
    },

    yearOfLastMonth() {
      return this.lastMonth.getFullYear();
    },

    lastAvailable() {
      if (this.externalData) {
        return null;
      }

      const storeAvailable =
        this.$store.state.reports[this.routeCity].lastAvailable;

      if (storeAvailable) {
        return storeAvailable;
      }

      const lastMonth = subMonths(new Date(), 1);
      const monthStr = `${lastMonth + 1}`.padStart(2, 0);

      return `${lastMonth.getFullYear()}-${monthStr}`;
    },

    canLoad() {
      return !!this.fetchReport;
    },
  },

  watch: {
    lastAvailable: {
      handler(newVal) {
        if (!newVal) {
          return;
        }

        const lastSplit = this.lastAvailable.split('-');
        this.reportYear = lastSplit[0];
        this.reportMonth = lastSplit[1];

        if (this.canLoad) {
          this.fetchReport();
        }
      },
      immediate: true,
    },
  },

  created() {
    if (!this.externalData) {
      const storeAvailable =
        this.$store.state.reports[this.routeCity].lastAvailable;

      if (!storeAvailable) {
        this.$store.dispatch('reports/loadLastAvailable', {
          city: this.routeCity,
        });
      }
    }
  },
};
