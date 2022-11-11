<template>
  <div class="AbsorptionRate">
    <ReportParagraph
      :color="colors.color1"
      :style="{
        borderBottom: `2px solid ${colors.color2}`,
        paddingBottom: '10px',
      }"
      font-size="30"
    >
      {{ absorptionRate }}%
    </ReportParagraph>
    <div class="BottomContent">
      <ReportParagraph
        font-size="15"
        :color="colors.color2"
        :style="{ marginRight: 'auto' }"
      >
        {{ (month - 1) | month('short') }} {{ year }}
      </ReportParagraph>
      <ReportParagraph :color="colors.color1" font-size="15">
        SOLD<br />Listings
      </ReportParagraph>
    </div>
  </div>
</template>

<script>
import ReportParagraph from '~/components/atoms/ReportParagraph';

export default {
  components: {
    ReportParagraph,
  },

  props: {
    absorptionRate: { type: Number, default: null },
    colors: { type: Object, required: true },
    month: { type: [String, Number], required: true },
    year: { type: [String, Number], required: true },
  },
};
</script>

<style scoped>
.AbsorptionRate {
  display: flex;
  flex-direction: column;
}

.BottomContent {
  display: flex;
}
</style>
