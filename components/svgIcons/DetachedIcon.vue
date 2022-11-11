<template>
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 140.52 120.04"
    :width="width"
    :height="height"
  >
    <polygon
      points="74.16 0 20.15 41.35 24.26 41.35 124.06 41.35 128.48 41.35 74.16 0"
      :fill="colors.color2"
    />
    <polygon
      points="29.31 94.19 53.63 94.19 53.63 61.46 95 61.46 95 94.19 119 94.19 119 45.66 29.31 45.66 29.31 94.19"
      :fill="colors.color2"
    />
    <rect
      x="58.68"
      y="65.76"
      width="30.95"
      height="28.43"
      :fill="colors.color1"
    />
    <polygon
      points="43.21 120.04 140.52 120.01 139.22 114.3 51.73 114.3 51.73 108.84 137.95 108.84 130.37 75.53 123.74 75.53 123.74 99.94 24.57 99.94 24.57 75.53 11.31 75.53 0 120.01 43.21 120.04"
      :fill="colors.color3"
    />
  </svg>
</template>

<script>
export default {
  props: {
    colors: { type: Object, required: true },
    height: { type: String, default: '25' },
    width: { type: String, default: '100%' },
  },
};
</script>
