<template>
  <div class="Layout">
    <ReportParagraph
      v-if="isNull"
      :color="color2"
      class="Undefined"
      :style="{ marginTop: 'auto' }"
    >
      N/A
    </ReportParagraph>
    <div
      v-else
      class="Wrapper"
      :style="{ height: `${height}%`, minHeight: `${minHeight}` }"
    >
      <ReportParagraph :color="columnBackground" text-align="center">
        {{ deltaText }}
      </ReportParagraph>
      <div
        :style="{
          background: columnBackground,
        }"
        class="Column h-full py-2"
      >
        <CrossIcon
          v-if="isDeltaNull"
          color="white"
          class="Cross"
          width="8"
          height="8"
        />
        <UpArrowIcon v-else-if="isUp && !isNull" class="Arrow" />
        <DownArrowIcon v-else class="Arrow" />
        <ReportParagraph class="BenchmarkPrice" color="white">
          ${{ benchmarkPriceYtd | commify }}
        </ReportParagraph>
      </div>
    </div>
    <ReportParagraph :color="color2" text-align="center">{{
      year
    }}</ReportParagraph>
  </div>
</template>

<script>
import CrossIcon from '~/components/svgIcons/CrossIcon';
import DownArrowIcon from '~/components/svgIcons/DownArrowIcon';
import ReportParagraph from '~/components/atoms/ReportParagraph';
import UpArrowIcon from '~/components/svgIcons/UpArrowIcon';

export default {
  components: {
    CrossIcon,
    UpArrowIcon,
    ReportParagraph,
    DownArrowIcon,
  },

  props: {
    benchmarkPriceYtd: { type: Number, required: false, default: null },
    benchmarkPriceYtdDelta: { type: Number, required: false, default: null },
    colors: { type: Object, required: true },
    height: { type: Number, default: 100 },
    year: { type: [String, Number], required: true },
  },

  computed: {
    deltaText() {
      return this.benchmarkPriceYtdDelta && this.benchmarkPriceYtdDelta !== 0
        ? `${this.benchmarkPriceYtdDelta}%`
        : 'N/A';
    },

    minHeight() {
      return this.benchmarkPriceYtd ? '45%' : '0%';
    },

    isUp() {
      return this.benchmarkPriceYtdDelta > 0;
    },

    isNull() {
      return this.benchmarkPriceYtd === null;
    },

    isDeltaNull() {
      return !this.benchmarkPriceYtdDelta;
    },

    columnHeight() {
      return 100 + this.benchmarkPriceYtdDelta;
    },

    color1() {
      return this.colors.color1;
    },

    color2() {
      return this.colors.color2;
    },

    columnBackground() {
      return this.isUp ? this.color2 : this.color1;
    },
  },
};
</script>

<style lang="scss" scoped>
.Layout {
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-right: 13px;
  }
}

.Undefined {
  // margin-top: auto;
}

.Wrapper {
  margin-top: auto;
  display: flex;
  flex-direction: column;
}

.Column {
  display: flex;
  flex-direction: column;
  width: 40px;
}

.Column p {
  margin-top: auto;
  margin-bottom: 20px;
  width: 100%;
  transform: rotate(-90deg);
  color: white;
}

.BenchmarkPrice {
  font-size: 12px;
  font-weight: bold;
}

.Arrow {
  width: auto;
  height: 8px;
  margin: 6px;
  margin-left: auto;
}

.Cross {
  width: auto;
  height: 8px;
  margin: 6px;
  margin-left: auto;
}
</style>
