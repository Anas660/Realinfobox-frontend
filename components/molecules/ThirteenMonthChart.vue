<template>
  <div ref="yearColumns" class="Wrapper" :style="{ width: `${chartWidth}%` }">
    <div class="Columns">
      <MonthChartColumn
        v-for="(item, index) in data"
        :key="item.year + item.month"
        :style="{ marginLeft: !index ? 0 : `${columnMargin}px` }"
        :benchmark-price-delta="item.benchmarkPriceDelta"
        :benchmark-price="item.benchmarkPrice"
        :height="getColumnHeight(item)"
        :colors="colors"
        :month="item.month"
      />
    </div>

    <BorderedText :color="color2" :hide-border="hideBorder" :value="year" />
  </div>
</template>

<script>
import BorderedText from '~/components/atoms/BorderedText';
import MonthChartColumn from '~/components/molecules/MonthChartColumn';

export default {
  components: { BorderedText, MonthChartColumn },

  props: {
    colors: { type: Object, required: true },
    data: { type: Array, required: true },
    year: { type: [String, Number], required: true },
    largestValue: { type: Number, default: null },
    smallestValue: { type: Number, default: null },
  },

  data() {
    return {
      columnMargin: 0,
    };
  },

  computed: {
    chartWidth() {
      const columnCount = this.data.length;
      const maxColumnCount = 13;

      return (100 * columnCount) / maxColumnCount;
    },

    hideBorder() {
      return this.data.length === 1;
    },

    color2() {
      return this.colors.color2;
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.calcColumnMargin();
    });
  },

  methods: {
    getColumnHeight(item) {
      const minHeight = 60;
      const maxHeight = 100;
      const difference = this.largestValue - this.smallestValue;
      const curVal = item.benchmarkPrice;
      const percentage = (curVal - this.smallestValue) / difference;
      const heightDiff = maxHeight - minHeight;

      return minHeight + percentage * heightDiff;
    },

    calcColumnMargin() {
      const columnWidth = 27;
      const columnCount = this.data.length;
      const yearColumns = this.$refs.yearColumns;
      if (!yearColumns) return 0;
      const yearWidth = yearColumns.clientWidth;
      const columnSpace = yearWidth / columnCount;
      this.columnMargin = columnSpace - columnWidth;
    },
  },
};
</script>

<style lang="scss" scoped>
.Wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.Columns {
  display: flex;
  height: 100%;
  margin-bottom: 10px;
}
</style>
