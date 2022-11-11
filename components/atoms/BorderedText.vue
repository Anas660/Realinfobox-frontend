<template>
  <ReportParagraph
    :color="color"
    :style="{
      borderBottom: hideBorder ? `0px solid ${color}` : `2px solid ${color}`,
      paddingBottom: hideBorder ? '2px' : 0,
    }"
    class="TotalDiff"
    :text-align="hideBorder ? 'left' : 'center'"
  >
    <span
      :style="{
        padding: hideBorder ? '0' : '0 5px',
      }"
    >
      {{ value }}
    </span>
  </ReportParagraph>
</template>

<script>
import ReportParagraph from '~/components/atoms/ReportParagraph';

export default {
  components: {
    ReportParagraph,
  },

  props: {
    color: { type: String, required: true },
    hideBorder: { type: Boolean, required: false, default: false },
    value: { type: [String, Number], required: true },
  },
};
</script>

<style scoped>
.TotalDiff {
  line-height: 0.1em;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-right: 5px;
}

.TotalDiff span {
  background: #fff;
}
</style>
