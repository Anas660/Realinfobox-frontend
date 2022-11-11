<template>
  <div class="Wrapper">
    <div class="Chart">
      <YearChartColumn
        v-for="(item, idx) in data"
        :key="idx"
        :colors="colors"
        :benchmark-price-ytd-delta="item.benchmarkPriceYTDDelta"
        :benchmark-price-ytd="item.benchmarkPriceYTD"
        :height="getColumnHeight(item)"
        :year="item.year"
      />
    </div>

    <BorderedText
      :color="color2"
      :value="!$isNull(totalDelta) ? `${totalDelta}%` : 'N/A'"
    />
  </div>
</template>

<script>
import BorderedText from '~/components/atoms/BorderedText';
import YearChartColumn from '~/components/molecules/YearChartColumn';

export default {
  components: {
    YearChartColumn,
    BorderedText,
  },

  props: {
    benchmarkPriceTotalDelta: { type: Number, default: null },
    data: { type: Array, required: true },
    colors: { type: Object, required: true },
  },

  computed: {
    largestValue() {
      const numbers = this.data.map(
        ({ benchmarkPriceYTD }) => benchmarkPriceYTD,
      );
      return Math.max(...numbers);
    },
    smallestValue() {
      const numbers = this.data.map(
        ({ benchmarkPriceYTD }) => benchmarkPriceYTD,
      );
      return Math.min(...numbers);
    },

    color2() {
      return this.colors.color2;
    },

    totalDelta() {
      if (!this.data[this.data.length - 1]) return null;
      return this.data[this.data.length - 1].benchmarkPriceTotalDelta;
    },
  },
  methods: {
    getColumnHeight(item) {
      const curVal = item.benchmarkPriceYTD;
      const columnHeight = Math.round((100 * curVal) / this.largestValue) - 10;

      return columnHeight;
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

.Chart {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  height: 100%;
}
</style>
