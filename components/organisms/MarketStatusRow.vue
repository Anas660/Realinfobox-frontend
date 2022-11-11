<template>
  <ReportSection
    :colors="colors"
    :is-first="isFirst"
    :show-legend="true"
    :subtitle="$_rrm_subtitle"
    height="428px"
    label="MARKET STATUS"
    title="13 MONTHS MARKET HISTORY"
  >
    <div class="Content">
      <MarketStatusTachymeter
        :absorption-rate="$_rrm_CMD.soldPercent"
        :colors="colors"
        :listings-count="$_rrm_CMD.active"
        :month="$_rrm_month"
        :sold-listings-count="$_rrm_CMD.sold"
        :wheel-height="170"
        :wheel-width="280"
        :year="$_rrm_year"
        class="LeftContent"
      />
      <div class="Charts">
        <MarketStatusChart
          v-for="(chartData, idx) in $_rrm_chartData"
          :key="idx"
          :chart-data="chartData"
          :colors="colors"
          :year="chartData[0].year"
        />
      </div>
    </div>
  </ReportSection>
</template>

<script>
import MarketStatusChart from '~/components/organisms/MarketStatusChart';
import MarketStatusTachymeter from '~/components/organisms/MarketStatusTachymeter';
import ReportSection from '~/components/atoms/ReportSection';
import ReportRowMixin from '~/mixins/reportRowMixin';

export default {
  components: {
    MarketStatusChart,
    MarketStatusTachymeter,
    ReportSection,
  },
  mixins: [ReportRowMixin],
  props: {
    listingAbsp: { type: Number, default: 0 },
  },
};
</script>

<style scoped>
.Content {
  display: flex;
  height: 100%;
}

.LeftContent {
  margin: auto auto 15px 20px;
}

.Charts {
  display: flex;
  width: 60%;
}

.Charts:first-child {
  margin-right: 10px;
}
</style>
