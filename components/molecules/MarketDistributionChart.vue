<template>
  <div class="Layout">
    <div class="Chart" :style="{ borderBottom: `4px solid ${color2}` }">
      <MarketDistributionChartColumn
        v-for="(item, index) in data"
        :key="index"
        :colors="colors"
        :largest-percentage="largestPercentage"
        :percent="item.percent"
        :value="item.value"
      />
    </div>
    <div class="NumbersWrapper">
      <div v-for="(item, index) in data" :key="index" class="Numbers">
        <ReportParagraph
          :bold="true"
          :color="color2"
          font-size="10"
          text-align="center"
        >
          {{ getLowerBoundary(item, index) }}
        </ReportParagraph>
        <ReportParagraph
          :bold="true"
          :color="color2"
          text-align="center"
          font-size="10"
        >
          {{ getUpperBoundary(item, index) }}
        </ReportParagraph>
      </div>
    </div>
  </div>
</template>

<script>
import MarketDistributionChartColumn from '~/components/molecules/MarketDistributionChartColumn';
import ReportParagraph from '~/components/atoms/ReportParagraph';

export default {
  components: {
    MarketDistributionChartColumn,
    ReportParagraph,
  },

  props: {
    colors: { type: Object, required: true },
    data: { type: Array, default: null },
  },

  computed: {
    largestPercentage() {
      const percentages = this.data.map(({ percent }) => percent);
      const largest = Math.max(...percentages);

      return largest;
    },

    color2() {
      return this.colors.color2;
    },
  },
  methods: {
    getUpperBoundary(item, index) {
      if (index === this.data.length - 1) {
        return this.$options.filters.commify(item.rangeFrom);
      }

      return this.$options.filters.commify(this.data[index + 1].rangeFrom - 1);
    },

    getLowerBoundary(item, index) {
      if (index === 0) {
        return 'Less than';
      }

      if (index === this.data.length - 1) {
        return 'Over';
      }

      return this.$options.filters.commify(item.rangeFrom);
    },
  },
};
</script>

<style scoped>
.Layout {
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  height: 100%;
  width: 100%;
}

.Chart {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
}

.NumbersWrapper {
  display: flex;
  justify-content: space-between;
  width: '100%';
  margin-bottom: 20px;
}

.Numbers {
  transform: rotate(-90deg);
  width: 70px;
}
</style>
