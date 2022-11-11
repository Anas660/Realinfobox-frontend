<template>
  <div class="BenchmarkSquare">
    <ReportParagraph
      v-if="price && isAdom"
      :color="branding.color2"
      font-size="25"
    >
      {{ price | commify }} DAYS
    </ReportParagraph>
    <ReportParagraph
      v-if="price && !isAdom"
      :color="branding.color2"
      font-size="25"
    >
      $ {{ price | commify }}
    </ReportParagraph>
    <div
      class="Square"
      :style="{ backgroundColor: squareColor, height: `${squareHeight}px` }"
    >
      <Dot class="DotWrap" size="15" />
    </div>
    <ReportParagraph :color="branding.color2" font-size="19">
      {{ month | shortMonth | uppercase }} {{ year }}
    </ReportParagraph>
    <ReportParagraph
      :color="subtitleColor ? subtitleColor : branding.color2"
      font-size="21"
    >
      {{ subtitle | uppercase }}
    </ReportParagraph>
  </div>
</template>

<script>
import Dot from '~/components/atoms/Dot';
import ReportParagraph from '~/components/atoms/ReportParagraph';

export default {
  components: { ReportParagraph, Dot },

  props: {
    isAdom: { type: Boolean, default: false },
    largestValue: { type: Number, required: true },
    maxSquareHeight: { type: Number, default: 100 },
    month: { type: [String, Number], required: true },
    price: { type: Number, default: 0 },
    squareColor: { type: String, default: '#EDEDED' },
    subtitle: { type: String, required: true },
    subtitleColor: { type: String, default: null },
    year: { type: [String, Number], required: true },
  },

  computed: {
    branding() {
      return this.$store.state.reports.branding;
    },

    squareHeight() {
      const squareHeight =
        (this.maxSquareHeight * this.price) / this.largestValue;

      return squareHeight;
    },
  },
};
</script>

<style scoped>
.BenchmarkSquare {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.Square {
  position: relative;
  width: 160px;
  margin-bottom: 10px;
}

.DotWrap {
  position: absolute;
  bottom: -5px;
  margin: 0 !important;
  left: calc(50% - 5px);
}
</style>
