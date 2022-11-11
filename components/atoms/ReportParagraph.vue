<template>
  <p
    :style="{
      color,
      fontSize: `${fontSize}px`,
      fontFamily,
      fontWeight,
      textAlign,
    }"
  >
    <slot />
  </p>
</template>

<script>
export default {
  props: {
    bold: { type: Boolean, default: false },
    color: { type: String, default: 'black' },
    fontFamily: { type: String, required: false, default: 'Futura PT Bold' },
    fontSize: { type: String, required: false, default: '11' },
    textAlign: { type: String, required: false, default: 'left' },
  },

  computed: {
    fontWeight() {
      return this.bold ? 'bold' : 'normal';
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: 'Futura PT Bold';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('~/assets/fonts/FuturaPTBold.otf') format('opentype');
}

p {
  margin: 0;
  padding: 0;
}
</style>
