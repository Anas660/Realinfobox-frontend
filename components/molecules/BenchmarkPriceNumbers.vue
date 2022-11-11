<template>
  <div
    class="BenchmarkLayout"
    :style="{
      width: `${width}px`,
    }"
  >
    <ReportParagraph :color="color2" font-size="33">
      $ {{ benchmarkPrice | commify }}
    </ReportParagraph>
    <div :style="{ width: '100%', height: '2px', background: color2 }" />
    <ReportParagraph
      :style="{ marginBottom: '10px' }"
      :color="color2"
      :bold="true"
      font-size="12"
    >
      {{ (month - 1) | month('short') }} {{ year }}
    </ReportParagraph>
    <ArrowData
      :colors="colors"
      :value="benchmarkPriceDelta"
      :text="monthToMonthText"
      height="auto"
      title="Month to Month"
    />
    <ArrowData
      :colors="colors"
      :value="benchmarkPriceYtyDelta"
      :text="yearToYearText"
      height="auto"
      title="Year to Year"
    />
  </div>
</template>

<script>
import ArrowData from '~/components/molecules/ArrowData';
import ReportParagraph from '~/components/atoms/ReportParagraph';

export default {
  components: {
    ArrowData,
    ReportParagraph,
  },

  props: {
    benchmarkPrice: { type: Number, default: null },
    benchmarkPriceDelta: { type: Number, default: null },
    benchmarkPriceYtyDelta: { type: Number, default: null },
    colors: { type: Object, required: true },
    month: { type: [String, Number], required: true },
    width: { type: [String, Number], default: 250 },
    year: { type: [String, Number], required: true },
  },

  computed: {
    lastYear() {
      return this.year - 1;
    },

    isYtdUp() {
      return this.benchmarkPriceYtyDelta > 0;
    },

    isDeltaUp() {
      return this.benchmarkPriceDelta > 0;
    },

    color1() {
      return this.colors.color1;
    },

    color2() {
      return this.colors.color2;
    },

    color3() {
      return this.colors.color3;
    },

    monthString() {
      return this.$options.filters.month(this.month - 1, 'short');
    },
    lastMonthString() {
      return this.$options.filters.prevMonth(this.month - 1, 'short');
    },
    monthToMonthText() {
      const isJanuary = parseInt(this.month) === 1;
      const year = isJanuary ? this.year - 1 : this.year;
      const text = this.getText(this.benchmarkPriceDelta);

      return `${text} from ${this.lastMonthString} ${year}`;
    },

    yearToYearText() {
      let text = this.getText(this.benchmarkPriceYtyDelta);
      return `${text} from ${this.monthString} ${this.year - 1}`;
    },
  },
  methods: {
    changeDirection(value) {
      if (value > 0) return 'up';
      if (value < 0) return 'down';
      if (value === 0) return 'nochange';
      return null;
    },
    getText(value) {
      const direction = this.changeDirection(value);
      switch (direction) {
        case 'up':
          return `Up ${value}%`;
        case 'down':
          return `Down ${value}%`;
        case 'nochange':
          return 'No Change';

        default:
          return 'N/A';
      }
    },
  },
};
</script>

<style scoped>
.BenchmarkLayout {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
