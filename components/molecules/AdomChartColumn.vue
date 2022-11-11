<template>
  <div class="Column">
    <div class="CircleWrapper">
      <ReportParagraph
        color="white"
        font-size="15"
        font-weight="bold"
        class="Value"
      >
        {{ value }}
      </ReportParagraph>
      <div
        v-if="bubbleSize"
        class="Bubble"
        :style="{
          width: `${bubbleSize}px`,
          height: `${bubbleSize}px`,
          background: bubbleColor,
        }"
      />
      <div>
        <ReportParagraph v-if="!value"> N/A </ReportParagraph>
      </div>
    </div>
    <ReportParagraph :color="color2" class="Month" text-align="center">
      {{ (month - 1) | month('short') }}
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
    domDelta: { type: Number, default: null },
    largestValue: { type: Number, required: true },
    month: { type: [String, Number], required: true },
    value: { type: Number, default: null },
  },

  computed: {
    isUp() {
      return this.domDelta > 0;
    },

    bubbleColor() {
      return this.isUp ? this.color2 : this.color1;
    },

    bubbleSize() {
      const minBubbleSize = 20;
      const maxBubbleSize = 62;
      const difference = maxBubbleSize - minBubbleSize;
      const calculatedSize =
        minBubbleSize + (difference * this.value) / this.largestValue;

      return calculatedSize;
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

<style lang="scss" scoped>
h3 {
  text-align: center;
}

.Column {
  display: flex;
  flex-direction: column;
  height: 90px;
}

.CircleWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .Value {
    position: absolute;
    color: white;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }
  .Bubble {
    position: absolute;
    opacity: 0.8;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
}

.Month {
  margin: auto 0 10px;
}
</style>
