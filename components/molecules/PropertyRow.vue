<template>
  <div class="Row">
    <ReportParagraph font-size="15" :color="color2" class="Label">{{
      label
    }}</ReportParagraph>
    <ReportParagraph font-size="15" :color="color1">{{
      value
    }}</ReportParagraph>
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
    value: { type: String, required: true },
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
.Label {
  margin-right: 6px;
}

.Row {
  display: flex;
}
</style>
