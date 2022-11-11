<!--eslint-disable vue/html-indent -->
<template>
  <div class="LARCircleWrapper">
    <div class="Wrapper">
      <div class="InnerCircle" :style="{ backgroundColor: colors.color1 }">
        <svg
          class="Icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.99 40.39"
          height="40px"
          width="40px"
        >
          <defs>
            <style>
              .cls-1 {
                fill: #fff;
              }
            </style>
          </defs>
          <title>home-icon</title>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                class="cls-1"
                d="M37.41,16.25l-.85-.75L32.5,11.92V2.78H26.69v4L19,0,1.41,15.49l-.85.75L0,16.73v3.72H3.12V40.39H34.9V20.46H38V16.79ZM30.79,35.79H7.18V16.24L19,5.79l7.7,6.79v0h0l4.07,3.59Z"
              />
            </g>
          </g>
        </svg>
      </div>
      <div
        class="OuterWrapper"
        :style="{
          transform: `rotate(${!inverted ? 180 : 0}deg)`,
        }"
      >
        <div
          class="OuterCircleBackground"
          :style="{
            borderColor: bgColor,
          }"
        />
        <div
          class="OuterCircleFill Fill1"
          :style="{
            borderTopColor: fillColor,
            borderLeftColor: fillColor,
            transform: `translate(-50%, -50%) rotate(${initialRotation}deg)`,
          }"
        />
        <div
          class="OuterCircleFill Fill2"
          :style="{
            borderBottomColor: fillColor,
            borderRightColor: fillColor,
            transform: `translate(-50%, -50%) rotate(${finalRotation}deg)`,
          }"
        />
      </div>
    </div>
    <div class="Arrows">
      <div
        class="Arrow"
        :style="{
          transform: `translateX(-50%) rotate(15deg)`,
        }"
      >
        <div class="ArrowBody">
          <div
            class="ArrowTip"
            :style="{
              borderBottomColor: colors.color1,
            }"
          ></div>
        </div>
      </div>
      <div
        class="Arrow"
        :style="{
          transform: `translateX(-50%) rotate(110deg)`,
        }"
      >
        <div class="ArrowBody">
          <div
            class="ArrowTip"
            :style="{
              borderBottomColor: colors.color3,
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: null,
    },
    colors: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      initialRotation: -20,
    };
  },
  computed: {
    finalValue() {
      let value = this.value;
      if (value > 100) value = 100;
      else if (value < 0) value = 0;
      return value;
    },
    inverted() {
      return this.finalValue > 50;
    },
    fillColor() {
      return this.inverted ? this.colors.color1 : this.colors.color3;
    },
    bgColor() {
      return this.inverted ? this.colors.color3 : this.colors.color1;
    },
    rotation() {
      return (360 * this.finalValue) / 100;
    },
    finalRotation() {
      return this.initialRotation - this.rotation;
    },
  },
};
</script>

<style lang="scss" scoped>
.LARCircleWrapper {
  position: relative;
  width: 160px;
  height: 160px;
  bottom: 17%;
  .Wrapper {
    position: absolute;
    z-index: 4;
    .InnerCircle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      width: 90px;
      height: 90px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      .Icon {
        height: 40px;
      }
    }
    .OuterWrapper {
      transform-origin: center;
      width: 160px;
      height: 160px;
    }
    .OuterCircleBackground,
    .OuterCircleFill {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      border: 15px solid;
    }
    .OuterCircleBackground {
      position: relative;
      width: 144px;
      height: 144px;
      border: 14px solid;

      z-index: 24;
    }
    .OuterCircleFill {
      width: 145px;
      height: 145px;
      border-radius: 50%;
      z-index: 25;
      border-color: transparent;
      transform-origin: center;
    }
  }
  .Arrows {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;

    .Arrow {
      position: absolute;
      top: 10%;
      left: 50%;
      width: 30px;
      height: 40%;
      transform-origin: bottom;
      .ArrowBody {
        position: relative;
        .ArrowTip {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: 100%;
          border-bottom: 20px solid;
          border-left: 20px solid transparent;
          border-right: 20px solid transparent;
        }
      }
    }
  }
}
</style>
