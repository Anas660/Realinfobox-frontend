<template>
  <div
    class="Content row no-gutters"
    :style="{
      borderBottom: showBorder ? `2px solid ${color2}` : 'none',
      height: height,
    }"
  >
    <component
      :is="iconName"
      class="col-auto"
      :color="iconColor"
      :style="{
        marginRight: '10px',
        width: arrowSize,
        height: arrowSize,
        maxWidth: arrowSize,
        maxHeight: arrowSize,
      }"
      :width="arrowSize"
      :height="arrowSize"
    />
    <div class="Text col">
      <ReportParagraph :color="color2" :bold="true" font-size="13">
        {{ title }}
      </ReportParagraph>
      <ReportParagraph :color="color2" :font-family="fontFamily" font-size="10">
        {{ text }}
      </ReportParagraph>
    </div>
  </div>
</template>

<script>
import DownArrowIcon from '~/components/svgIcons/DownArrowIcon';
import ReportParagraph from '~/components/atoms/ReportParagraph';
import UpArrowIcon from '~/components/svgIcons/UpArrowIcon';
import CrossIcon from '~/components/svgIcons/CrossIcon';
import CircleIcon from '~/components/svgIcons/CircleIcon';

export default {
  components: {
    DownArrowIcon,
    ReportParagraph,
    UpArrowIcon,
    CrossIcon,
    CircleIcon,
  },

  props: {
    arrowSize: { type: Number, required: false, default: 24.5 },
    colors: { type: Object, required: true },
    fontFamily: { type: String, default: 'Futura PT Bold' },
    height: { type: String, required: true },
    showBorder: { type: Boolean, default: true },
    text: { type: String, required: true },
    title: { type: String, required: true },
    value: { type: Number, default: null },
  },

  data() {
    return {
      iconSize: 30,
    };
  },

  computed: {
    changeDirection() {
      if (this.value > 0) return 'up';
      if (this.value < 0) return 'down';
      if (this.value === 0) return 'nochange';
      return null;
    },
    iconName() {
      switch (this.changeDirection) {
        case 'up':
          return 'up-arrow-icon';
        case 'down':
          return 'down-arrow-icon';
        case 'nochange':
          return 'circle-icon';

        default:
          return 'cross-icon';
      }
    },
    iconColor() {
      switch (this.changeDirection) {
        case 'down':
          return this.colors.color1;

        case 'up':
          return this.colors.color2;

        case 'nochange':
        default:
          return this.colors.color2;
      }
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
  },
};
</script>

<style scoped>
.bold {
  font-weight: bold;
}

.Content {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding-bottom: 5px;
}

.Text {
  display: flex;
  flex-direction: column;
}
</style>
