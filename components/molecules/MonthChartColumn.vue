<template>
  <div class="Layout">
    <ReportParagraph v-if="isNull" :color="color2" class="mt-auto">
      N/A
    </ReportParagraph>

    <div v-else class="Wrapper" :style="{ height: `${height}%` }">
      <div class="Column h-100" :style="{ background: backgroundColor }">
        <ReportParagraph class="ColumnLabel mb-1" :color="backgroundColor">
          {{ deltaText }}
        </ReportParagraph>
        <UpArrowIcon v-if="isDeltaUp" class="Arrow" />
        <DownArrowIcon v-else class="Arrow" />
        <ReportParagraph class="BenchmarkPriceValue" color="white">
          ${{ benchmarkPrice | commify }}
        </ReportParagraph>
      </div>
      <ReportParagraph :color="color2" :style="{ paddingLeft: '4px' }">{{
        (month - 1) | month('short')
      }}</ReportParagraph>
    </div>
  </div>
</template>

<script>
import DownArrowIcon from '~/components/svgIcons/DownArrowIcon';
import UpArrowIcon from '~/components/svgIcons/UpArrowIcon';
import ReportParagraph from '~/components/atoms/ReportParagraph';

export default {
  components: {
    DownArrowIcon,
    ReportParagraph,
    UpArrowIcon,
  },

  props: {
    benchmarkPrice: { type: Number, required: false, default: null },
    benchmarkPriceDelta: { type: Number, required: false, default: null },
    colors: { type: Object, required: true },
    height: { type: Number, default: 0 },
    month: { type: [String, Number], required: true },
  },

  computed: {
    deltaText() {
      return this.benchmarkPriceDelta && this.benchmarkPriceDelta !== 0
        ? `${this.benchmarkPriceDelta}%`
        : 'N/A';
    },
    isNull() {
      return !this.benchmarkPrice;
    },

    isDeltaUp() {
      return this.benchmarkPriceDelta > 0;
    },

    backgroundColor() {
      return this.isDeltaUp ? this.color2 : this.color1;
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
  },
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
  text-align: center;
}

.Layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.Wrapper {
  display: flex;
  flex-direction: column;
  margin-top: auto;
}

.Column {
  display: flex;
  flex-direction: column;
  width: 27px;
  position: relative;

  .ColumnLabel {
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
  }
}

.BenchmarkPriceValue {
  margin-top: auto;
  margin-bottom: 13px;
  width: 100%;

  color: white;
  transform: rotate(-90deg);
  font-weight: bold;
}

.Arrow {
  width: auto;
  height: 8px;
  margin: 5px;
  margin-left: auto;
}
</style>
