<template>
  <ReportSection
    :colors="colors"
    :is-first="isFirst"
    :subtitle="$_rrm_subtitle"
    :website="website"
    label="ACTIVE & SOLD LISTINGS"
    title="13 MONTHS MARKET HISTORY"
    height="405px"
  >
    <div class="Wrapper">
      <div class="LeftContent">
        <ListingInfoLabel
          :colors="colors"
          :is-for-sale="true"
          :listing-count="$_rrm_CMD.active"
          :listing-month-delta="$_rrm_CMD.activeDelta"
          :listing-year-delta="$_rrm_CMD.activeYTYDelta"
          :month="$_rrm_month"
          :year="$_rrm_year"
          arrow-data-height="51px"
        />

        <ListingInfoLabel
          :colors="colors"
          :is-for-sale="false"
          :listing-count="$_rrm_CMD.sold"
          :listing-month-delta="$_rrm_CMD.soldDelta"
          :listing-year-delta="$_rrm_CMD.soldYTYDelta"
          :month="$_rrm_month"
          :year="$_rrm_year"
          arrow-data-height="51px"
        />
      </div>

      <div class="Charts">
        <ActiveSoldChart
          v-for="(chartData, idx) in $_rrm_chartData"
          :key="idx"
          :colors="colors"
          :data="chartData"
          :largest-listing="largestListing"
          :year="chartData[0].year"
        />
      </div>
    </div>
  </ReportSection>
</template>

<script>
import ActiveSoldChart from '~/components/molecules/ActiveSoldChart';
import ListingInfoLabel from '~/components/organisms/ListingInfoLabel';
import ReportRowMixin from '~/mixins/reportRowMixin';

export default {
  components: {
    ActiveSoldChart,
    ListingInfoLabel,
  },

  mixins: [ReportRowMixin],

  props: {
    website: { type: String, default: '' },
  },

  computed: {
    largestListing() {
      const activeListings = this.data.map(({ active }) => active);
      const largest = Math.max(...activeListings);

      return largest;
    },
  },
};
</script>

<style scoped>
.Wrapper {
  display: flex;
  height: 100%;
}

.LeftContent {
  display: flex;
  justify-content: space-between;
  width: 35%;
}

.Charts {
  display: flex;
  width: 57%;
  margin-left: auto;
}
</style>
