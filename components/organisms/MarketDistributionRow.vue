<template>
  <ReportSection
    :colors="colors"
    :subtitle="$_rrm_subtitle"
    :title="`TOTAL SOLD HOMES YTD ${year}: ${totalSoldHomes}`"
    :website="website"
    height="453px"
    label="MARKET DISTRIBUTION"
  >
    <div class="Content">
      <MarketDistributionChart :colors="colors" :data="marketDistribution" />
    </div>
  </ReportSection>
</template>

<script>
import ReportRowMixin from '~/mixins/reportRowMixin';
import MarketDistributionChart from '~/components/molecules/MarketDistributionChart';

export default {
  components: {
    MarketDistributionChart,
  },

  mixins: [ReportRowMixin],

  props: {
    data: { type: Array, default: () => [] },
    marketDistribution: { type: Array, default: () => [] },
    website: { type: String, default: '' },
    year: { type: [String, Number], required: true },
  },

  computed: {
    totalSoldHomes() {
      if (!this.marketDistribution) return 'N/A';
      return this.marketDistribution.reduce((a, b) => a + b.value, 0);
    },
  },
};
</script>

<style scoped>
.Content {
  display: flex;
  height: 100%;
  margin: 0 20px;
}
</style>
