import _groupBy from 'lodash/groupBy';
import ReportSection from '~/components/atoms/ReportSection';

export default {
  components: {
    ReportSection,
  },
  props: {
    data: { type: Array, default: null },
    colors: { type: Object, default: null },
    name: { type: String, default: null },
    propertyType: { type: String, default: 'Unknown' },
    isFirst: { type: Boolean, required: false, default: false },
    cityName: { type: String, default: null },
    isCity: { type: Boolean, default: false },
  },
  computed: {
    $_rrm_cityName() {
      return this.$route.params.cityName || this.cityName;
    },

    $_rrm_CMD() {
      // just an alias
      return this.$_rrm_currentMonthData;
    },

    $_rrm_currentMonthData() {
      if (!this.data || !this.data[this.data.length - 1]) {
        return {};
      }

      return this.data[this.data.length - 1];
    },

    $_rrm_month() {
      return this.$_rrm_CMD.month;
    },

    $_rrm_year() {
      return this.$_rrm_CMD.year;
    },

    $_rrm_lastYear() {
      return this.$_rrm_year - 1;
    },

    $_rrm_color1() {
      return this.colors.color1;
    },

    $_rrm_color2() {
      return this.colors.color2;
    },

    $_rrm_color3() {
      return this.colors.color3;
    },

    $_rrm_monthStringShort() {
      return this.$options.filters.month(this.$_rrm_month - 1, 'short');
    },

    $_rrm_lastMonthStringShort() {
      return this.$options.filters.prevMonth(this.$_rrm_month - 1, 'short');
    },

    $_rrm_chartData() {
      const groupedData = _groupBy(this.data, 'year');
      const mappedData = Object.values(groupedData);

      return mappedData;
    },
    $_rrm_propertyTypeTranslationKey() {
      const key = `reports.${this.$_rrm_cityName}.${this.propertyType}`;
      return key || '';
    },
    $_rrm_propertyTypeTranslation() {
      const key = `reports.${this.$_rrm_cityName}.${this.propertyType}`;
      return this.$t(key);
    },
    $_rrm_subtitle() {
      return (
        this.name +
        ' ' +
        this.$_rrm_propertyTypeTranslation
      ).toUpperCase();
    },
  },
};
