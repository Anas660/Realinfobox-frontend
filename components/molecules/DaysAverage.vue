<template>
  <div class="DaysAverage">
    <div
      class="Label"
      :style="{
        borderBottom: `2px solid ${color}`,
        marginRight: 'auto',
      }"
    >
      <ReportParagraph
        :color="color"
        :style="{ marginRight: '14px' }"
        font-size="53"
      >
        {{ value }}
      </ReportParagraph>
      <div class="DaysAverageText">
        <ReportParagraph :color="color" font-size="20">days</ReportParagraph>
        <ReportParagraph :color="color" font-size="13">average</ReportParagraph>
      </div>
    </div>
    <ReportParagraph :color="color" font-size="15">
      {{ (month - 1) | month('short') }} {{ year }}
    </ReportParagraph>
  </div>
</template>

<script>
import ReportParagraph from '~/components/atoms/ReportParagraph';

export default {
  components: {
    ReportParagraph,
  },

  props: {
    color: { type: String, required: true },
    month: { type: [String, Number], required: true },
    value: { type: Number, required: true },
    year: { type: [String, Number], required: true },
  },
};
</script>

<style scoped>
.DaysAverage {
  display: flex;
  flex-direction: column;
}

.Label {
  display: flex;
  height: 85px;
}

.DaysAverageText {
  transform: rotate(-90deg);
}
</style>
