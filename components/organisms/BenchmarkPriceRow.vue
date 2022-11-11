<template>
  <ReportSection
    :colors="colors"
    :is-first="isFirst"
    :label="`${$_rrm_cityName === 'calgary' ? 'BENCHMARK' : 'AVERAGE'} PRICE`"
    :subtitle="$_rrm_subtitle"
    :website="website"
    title="13 MONTHS MARKET HISTORY"
  >
    <div class="BenchmarkPriceData">
      <div class="NumberData">
        <BenchmarkPriceNumbers
          :benchmark-price-delta="$_rrm_CMD.benchmarkPriceDelta"
          :benchmark-price-yty-delta="$_rrm_CMD.benchmarkPriceYTYDelta"
          :benchmark-price="$_rrm_CMD.benchmarkPrice"
          :colors="colors"
          :month="$_rrm_month"
          :year="$_rrm_year"
        />
      </div>
      <div class="Charts">
        <ThirteenMonthChart
          v-for="(chartColumn, idx) in $_rrm_chartData"
          :key="idx"
          :colors="colors"
          :data="chartColumn"
          :largest-value="largestValue"
          :smallest-value="smallestValue"
          :year="chartColumn[0].year"
        />
      </div>
    </div>
  </ReportSection>
</template>

<script>
import BenchmarkPriceNumbers from '~/components/molecules/BenchmarkPriceNumbers';
import ReportSection from '~/components/atoms/ReportSection';
import ThirteenMonthChart from '~/components/molecules/ThirteenMonthChart';

import ReportRowMixin from '~/mixins/reportRowMixin';

export default {
  components: {
    ReportSection,
    BenchmarkPriceNumbers,
    ThirteenMonthChart,
  },

  mixins: [ReportRowMixin],

  props: {
    website: { type: String, default: '' },
  },

  computed: {
    largestValue() {
      const numbers = this.data.map(({ benchmarkPrice }) => benchmarkPrice);
      return Math.max(...numbers);
    },

    smallestValue() {
      const numbers = this.data.map(({ benchmarkPrice }) => benchmarkPrice);
      return Math.min(...numbers);
    },
  },
};
</script>

<style scoped>
.BenchmarkPriceData {
  display: flex;
  height: 100%;
}

.NumberData {
  width: 34%;
}

.Charts {
  display: flex;
  width: 60%;
  margin-left: auto;
}

.Charts:first-child {
  margin-right: 10px;
}
</style>
