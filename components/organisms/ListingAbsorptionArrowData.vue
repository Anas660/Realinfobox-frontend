<template>
  <div class="ListingAbsorptionArrowData">
    <ArrowData
      :arrow-size="arrowSize"
      :colors="colors"
      :text="monthToMonthText"
      :value="mtmValue"
      class="UpperData"
      font-family="Open Sans"
      height="70px"
      title="MONTH TO MONTH"
    />
    <ArrowData
      :arrow-size="arrowSize"
      :colors="colors"
      :show-border="false"
      :text="yearToYearText"
      :value="ytyValue"
      font-family="Open Sans"
      height="70px"
      title="YEAR TO YEAR"
    />
  </div>
</template>

<script>
import ArrowData from '~/components/molecules/ArrowData';

export default {
  components: { ArrowData },

  props: {
    colors: { type: Object, required: true },
    monthToMonthText: { type: String, required: true },
    yearToYearText: { type: String, required: true },
    mtmValue: { type: Number, default: null },
    ytyValue: { type: Number, default: null },
  },

  computed: {
    arrowSize() {
      return 25;
    },
  },
};
</script>

<style scoped>
.ListingAbsorptionArrowData {
  display: flex;
  flex-direction: column;
  width: 55%;
}

.UpperData {
  height: 62px;
}
</style>
