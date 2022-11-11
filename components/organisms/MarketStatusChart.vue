<template>
  <div ref="yearColumns" class="Wrapper" :style="{ width: `${chartWidth}%` }">
    <div class="Columns">
      <MarketStatusChartColumn
        v-for="(columnData, index) in chartData"
        :key="columnData.year + columnData.month"
        :style="{ marginLeft: !index ? 0 : `${columnMargin}px` }"
        :colors="colors"
        :sold-percent="columnData.soldPercent"
        :sold-percent-delta="columnData.soldPercentDelta"
        :unsold-percent="columnData.unsoldPercent"
        :month="columnData.month"
      />
    </div>
    <BorderedText
      :color="colors.color2"
      :hide-border="hideBorder"
      :value="year"
    />
  </div>
</template>

<script>
import BorderedText from '~/components/atoms/BorderedText';
import MarketStatusChartColumn from '~/components/molecules/MarketStatusChartColumn';

export default {
  components: {
    BorderedText,
    MarketStatusChartColumn,
  },

  props: {
    chartData: { type: Array, required: true },
    colors: { type: Object, required: true },
    year: { type: [String, Number], required: true },
  },

  data() {
    return {
      columnMargin: 0,
    };
  },

  computed: {
    chartWidth() {
      const columnCount = this.chartData.length;
      const maxColumnCount = 13;

      return (100 * columnCount) / maxColumnCount;
    },

    hideBorder() {
      return this.chartData.length === 1;
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.calcColumnMargin();
    });
  },
  methods: {
    calcColumnMargin() {
      const columnWidth = 27;
      const columnCount = this.chartData.length;
      const yearColumns = this.$refs.yearColumns;
      if (!yearColumns) return 0;
      const yearWidth = yearColumns.clientWidth;
      const columnSpace = yearWidth / columnCount;
      this.columnMargin = columnSpace - columnWidth;
    },
  },
};
</script>

<style scoped>
.Wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.Columns {
  display: flex;
  height: 100%;
}
</style>
