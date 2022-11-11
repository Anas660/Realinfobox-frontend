<template>
  <div class="ChartWrapper">
    <div ref="chart" class="Chart row no-gutters">
      <template v-for="item in data">
        <AdomChartColumn
          :key="`${item.year}-${item.month}`"
          class="ChartColumn col"
          :colors="colors"
          :dom-delta="item.domDelta || null"
          :largest-value="largestValue"
          :month="item.month"
          :value="item.dom || null"
        />
      </template>
    </div>
    <BorderedText
      class="BorderedText"
      :hide-border="hideBorder"
      :color="color2"
      :value="year"
    />
  </div>
</template>

<script>
import AdomChartColumn from '~/components/molecules/AdomChartColumn';
import BorderedText from '~/components/atoms/BorderedText';

export default {
  components: {
    AdomChartColumn,
    BorderedText,
  },

  props: {
    colors: { type: Object, required: true },
    data: { type: Array, required: true },
    largestValue: { type: Number, required: true },
    year: { type: [String, Number], required: true },
  },

  computed: {
    color2() {
      return this.colors.color2;
    },

    hideBorder() {
      return this.data.length === 1;
    },

    chartWidth() {
      const columnCount = this.data.length;
      const maxColumnCount = 13;

      return (100 * columnCount) / maxColumnCount;
    },
  },
};
</script>

<style lang="scss" scoped>
.ChartWrapper {
  display: flex;
  flex-direction: column;
  margin: auto 0;
}

.Chart {
  display: flex;
  justify-content: space-between;
  .ChartColumn {
    width: 40px;
  }
}

.Chart:last-child {
  margin-right: 0;
}

.BorderedText {
  text-align: center !important;
}
</style>
