<template>
  <div class="BenchmarkSquare">
    <div
      class="Square"
      :style="{ backgroundColor: squareColor, height: `${squareHeight}px` }"
    >
      <ReportParagraph color="white" class="Active" font-size="18">
        ACTIVE {{ active }}
      </ReportParagraph>
      <div class="SoldSquare" :style="{ height: `${soldPercent}%` }">
        <ReportParagraph color="white" class="Sold" font-size="18">
          SOLD {{ sold }}
        </ReportParagraph>
      </div>
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
    active: { type: Number, default: 0 },
    sold: { type: Number, default: 0 },
    largestValue: { type: Number, required: true },
    month: { type: [String, Number], required: true },
    squareColor: { type: String, default: '#EDEDED' },
    subtitle: { type: String, required: true },
    subtitleColor: { type: String, default: null },
    year: { type: [String, Number], required: true },
  },

  computed: {
    branding() {
      return this.$store.state.reports.branding;
    },

    soldPercent() {
      return (100 * this.sold) / this.active;
    },

    squareHeight() {
      return (130 * this.active) / this.largestValue;
    },
  },
};
</script>

<style scoped>
.Sold {
  text-align: center;
  margin-top: -5px;
}

.SoldSquare {
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  margin-top: auto;
  position: relative;
  width: 100%;
}

.BenchmarkSquare {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.Square {
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 160px;
  margin-bottom: 10px;
  max-height: 167px;
}

.DotWrap {
  position: absolute;
  bottom: -5px;
  margin: 0 !important;
  left: calc(50% - 5px);
}
</style>
