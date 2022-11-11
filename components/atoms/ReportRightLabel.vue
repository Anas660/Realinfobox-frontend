<template>
  <div class="RightLabel">
    <div
      :style="{
        borderTop: topBorderStyle,
        borderLeft: borderStyle,
        borderBottom: borderStyle,
      }"
      class="RightLabelInner"
    >
      <ReportParagraph :color="color2">{{ title }}</ReportParagraph>
      <ReportParagraph :color="color1" text-align="right">
        {{ subtitle }}
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
    colors: { type: Object, required: true },
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    showRightLabelUpperBorder: { type: Boolean, required: true },
  },

  computed: {
    borderStyle() {
      return `2px solid ${this.color2}`;
    },

    topBorderStyle() {
      return this.showRightLabelUpperBorder ? this.borderStyle : 'none';
    },

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
h4 {
  font-size: 8pt;
}

h5 {
  font-size: 6pt;
}

.bold {
  font-weight: bold;
}

.RightLabel {
  display: flex;
}

.AgentName {
  margin: auto 10px;
  font-weight: bold;
}

.RightLabelInner {
  display: flex;
  flex-direction: column;
  padding: 5px;
}

.RightLabelInner h4,
h5 {
  margin-left: auto;
}
</style>
