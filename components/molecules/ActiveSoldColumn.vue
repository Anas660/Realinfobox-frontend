<template>
  <div class="Layout">
    <div class="Wrapper" :style="{ height: `${isNA ? columnHeight : 100}%` }">
      <div
        class="Labels"
        :class="[isNA ? 'd-flex flex-column-reverse align-items-center' : '']"
        :style="{ height: isNA ? `100%` : '' }"
      >
        <template v-if="!isNA">
          <ReportParagraph text-align="center" :color="color2">
            {{ active | commify }}
          </ReportParagraph>
          <ReportParagraph
            v-if="isSoldLarger"
            :color="color2"
            text-align="center"
            class="BenchmarkPriceValue"
            font-size="11"
          >
            {{ sold | commify }}
          </ReportParagraph>
        </template>

        <template v-else>
          <ReportParagraph> N/A </ReportParagraph>
        </template>
      </div>
      <div
        v-if="unsoldPercent"
        class="Column"
        :style="{ height: `${unsoldPercent || 0}%`, backgroundColor: color3 }"
      >
        <div class="BenchmarkValuePair">
          <ReportParagraph
            v-if="!isSoldLarger"
            :color="color2"
            text-align="center"
            class="BenchmarkPriceValue"
            font-size="10"
          >
            {{ sold | commify }}
          </ReportParagraph>
          <UpDownArrows
            v-if="soldPercent < 10"
            :arrow-color="color2"
            :is-up="isUp"
            arrow-size="7"
          />
        </div>
      </div>
      <div
        v-if="soldPercent"
        class="SecondColumn"
        :style="{
          height: `${soldPercent || 0}%`,
          backgroundColor: backgroundColor,
        }"
      >
        <UpDownArrows v-if="soldPercent > 10" :is-up="isUp" arrow-size="7" />
      </div>

      <ReportParagraph :color="color2" text-align="center">
        {{ (month - 1) | month('short') }}
      </ReportParagraph>
    </div>
  </div>
</template>

<script>
import ReportParagraph from '~/components/atoms/ReportParagraph';
import UpDownArrows from '~/components/atoms/UpDownArrows';

export default {
  components: {
    ReportParagraph,
    UpDownArrows,
  },

  props: {
    active: { type: Number, default: null },
    colors: { type: Object, required: true },
    largestListing: { type: Number, default: null },
    month: { type: [String, Number], required: true },
    sold: { type: Number, default: null },
    soldPercent: { type: Number, default: null },
    soldDelta: { type: Number, default: null },
    unsoldPercent: { type: Number, default: null },
  },

  computed: {
    isSoldLarger() {
      return this.sold > this.active;
    },

    isUp() {
      return this.soldDelta > 0;
    },

    isNull() {
      return this.active === null;
    },

    columnHeight() {
      const normalHeight = (this.active * 100) / this.largestListing;
      const specialHeight = (this.sold * 100) / this.largestListing;

      if (normalHeight < 23) {
        return 23;
      }

      return this.isSoldLarger ? specialHeight : normalHeight;
    },

    backgroundColor() {
      return this.isUp ? this.color2 : this.color1;
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

    isNA() {
      return this.soldPercent === null && this.unsoldPercent === null;
    },
  },
};
</script>

<style scoped>
.Layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: auto;
}

.BenchmarkValuePair {
  display: flex;
  flex-direction: column;
  margin-top: auto;
}

.BenchmarkValuePair p {
  margin-top: 5px;
}

.Wrapper {
  display: flex;
  flex-direction: column;
  margin-top: auto;
  justify-content: flex-end;
  width: 31px;
}

.SecondColumn {
  display: flex;
  flex-direction: column;
}

.Column {
  display: flex;
  flex-direction: column;
  width: 31px;
  margin-top: auto;
}

.Column p {
  width: 100%;
  color: white;
}

.BenchmarkPriceValue {
  font-weight: bold;
}

.Arrow {
  z-index: 30;
  width: auto;
  height: 7px;
  margin: 5px;
  margin-left: auto;
}
</style>
