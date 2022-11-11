<template>
  <div
    class="d-flex PriceTrend w-1/3 items-center"
    :style="{
      background: color2,
      borderLeft: `50px solid ${color1}`,
    }"
  >
    <ReportParagraph color="white" font-size="16">
      {{ label }}
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
    colors: { type: Object, required: true },
    label: { type: String, required: true },
  },

  computed: {
    color1() {
      return this.colors.color1;
    },

    color2() {
      return this.colors.color2;
    },
  },
};
</script>

<style scoped>
.PriceTrend {
  /* width: 35%; */
  padding: 0 10px;
  color: white;
}
</style>
