<template>
  <div
    class="Container"
    :style="{
      width: `${maxWidth}px`,
    }"
  >
    <div
      class="Banner"
      :style="{
        height: `${computedHeight}px`,
        backgroundImage: `url(${image})`,
      }"
    />
  </div>
</template>

<script>
export default {
  props: {
    height: { type: [Number, String], required: true },
    image: { type: String, required: false, default: null },
  },
  computed: {
    aspectRatio() {
      return 1000 / this.height;
    },
    maxWidth() {
      switch (this.$mq) {
        case 'xs':
        case 'sm':
          return 300;
        case 'md':
          return 500;

        default:
          return 700;
      }
    },
    computedHeight() {
      return this.maxWidth / this.aspectRatio;
    },
  },
};
</script>

<style lang="scss" scoped>
.Container {
  display: flex;
  margin: 0px auto;
  min-height: 150px;
  max-height: 300px;
  max-width: 1000px;

  .Banner {
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    border: 2px dashed lightcoral;
  }
}

img {
  display: block;
  width: 100%;
  height: auto;
}
</style>
