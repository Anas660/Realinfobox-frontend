<template>
  <ReportSection
    :colors="colors"
    :subtitle="$_rrm_subtitle"
    :website="website"
    height="225px"
    label="AVERAGE DAYS ON MARKET"
    margin-bottom="15"
    title="13 MONTHS MARKET HISTORY"
  >
    <div class="Layout">
      <div class="Data">
        <DaysAverage
          :color="$_rrm_color2"
          :month="$_rrm_month"
          :value="$_rrm_CMD.dom"
          :year="$_rrm_year"
          class="DaysAverage"
        />
        <ListingAbsorptionArrowData
          :colors="colors"
          :mtm-value="$_rrm_CMD.domDelta"
          :yty-value="$_rrm_CMD.domYTYDelta"
          :month-to-month-text="monthToMonthText"
          :year-to-year-text="yearToYearText"
          class="ArrowData"
        />
      </div>
      <div class="Charts">
        <AdomChart
          v-for="(data, idx) in $_rrm_chartData"
          :key="idx"
          :colors="colors"
          :largest-value="largestValue"
          :data="data"
          :year="data[0].year"
          class="Chart"
        />
      </div>
    </div>
  </ReportSection>
</template>

<script>
import AdomChart from '~/components/molecules/AdomChart';
import DaysAverage from '~/components/molecules/DaysAverage';
import ListingAbsorptionArrowData from '~/components/organisms/ListingAbsorptionArrowData';

import ReportRowMixin from '~/mixins/reportRowMixin';

export default {
  components: {
    AdomChart,
    DaysAverage,
    ListingAbsorptionArrowData,
  },

  mixins: [ReportRowMixin],

  props: {
    website: { type: String, default: '' },
  },

  computed: {
    isMonthUp() {
      return this.$_rrm_CMD.domDelta > 0;
    },

    isYearUp() {
      return this.$_rrm_CMD.domYTYDelta > 0;
    },

    monthToMonthText() {
      let text = this.getText(this.$_rrm_CMD.domDelta);
      return `${text} compared to ${this.$_rrm_lastMonthStringShort} ${this.$_rrm_year}`;
    },

    yearToYearText() {
      let text = this.getText(this.$_rrm_CMD.domYTYDelta);
      return `${text} compared to ${this.$_rrm_monthStringShort} ${this.$_rrm_lastYear}`;
    },

    largestValue() {
      const vals = this.data.map(({ dom }) => dom);
      const maxVal = Math.max(...vals);

      return maxVal;
    },
  },
  methods: {
    getAdomDirection(value) {
      if (value > 0) return 'up';
      if (value < 0) return 'down';
      if (value === 0) return 'nochange';

      return null;
    },

    getText(value) {
      const direction = this.getAdomDirection(value);

      switch (direction) {
        case 'up':
          return `ADOM are up, homes are selling ${value}% slower`;
        case 'down':
          return `ADOM are down, homes are selling ${value}% faster`;
        case 'nochange':
          return "ADOM didn't change";

        default:
          return 'ADOM data not available';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.Layout {
  display: flex;
  height: 100%;
}

.DaysAverage {
  margin-right: 20px;
}

.Data {
  display: flex;
  width: 38%;
}

.Charts {
  display: flex;
  margin-left: auto;
  justify-content: center;
  width: 60%;
  margin-top: 30px;
}

.ArrowData {
  margin-top: 11px;
}
</style>
