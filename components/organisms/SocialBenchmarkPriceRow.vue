<template>
  <SocialReportSection :branding="branding" section-title="Benchmark price">
    <div class="SectionWrapper">
      <div
        v-for="(cell, idx) in cellData"
        :key="idx"
        class="CellWrapper col-3 mb-3"
      >
        <BenchmarkPriceNumbers
          :benchmark-price-delta="cell.benchmarkPriceDeltaMTM"
          :benchmark-price-yty-delta="cell.benchmarkPriceDeltaYTY"
          :benchmark-price="cell.benchmarkPrice"
          :colors="$_srm_colors"
          :hide-border="idx === 3"
          :month="month"
          :year="year"
        />
      </div>
    </div>
  </SocialReportSection>
</template>

<script>
import BenchmarkPriceNumbers from '~/components/molecules/BenchmarkPriceNumbers';
import SocialReportSection from '~/components/molecules/SocialReportSection';
import socialRowMixin from '~/mixins/socialRowMixin';

export default {
  components: {
    BenchmarkPriceNumbers,
    SocialReportSection,
  },

  mixins: [socialRowMixin],

  computed: {
    border() {
      return `2px solid ${this.colors.color2}`;
    },

    cellData() {
      const data = [];
      this.$_srm_propertyTypes.forEach(pt => {
        data.push({
          propertyType: pt,
          benchmarkPrice: this.data[pt]?.benchmarkPrice,
          benchmarkPriceDeltaMTM: this.data[pt]?.benchmarkPriceDeltaMTM,
          benchmarkPriceDeltaYTY: this.data[pt]?.benchmarkPriceDeltaYTY,
        });
      });
      return data;
    },
  },
};
</script>

<style scoped>
.SectionWrapper {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

.CellWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
}
</style>
