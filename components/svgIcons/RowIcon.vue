<template>
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 225.1 103.96"
    width="100%"
    :height="height"
  >
    <polygon
      points="121.95 103.96 120.97 99.27 44.84 99.27 44.84 94.05 119.87 94.05 113.28 62.17 107.5 62.17 107.5 85.53 21.2 85.53 21.2 62.17 9.66 62.17 0 103.96 121.95 103.96"
      :fill="color3"
    />
    <polygon
      points="58.46 0 13.9 37.52 17.29 37.52 99.63 37.52 103.28 37.52 58.46 0"
      :fill="color2"
    />
    <polygon
      points="21.46 85.47 41.52 85.47 41.52 55.77 75.66 55.77 75.66 85.47 95.46 85.47 95.46 41.43 21.46 41.43 21.46 85.47"
      :fill="color2"
    />
    <rect x="45.69" y="59.67" width="25.54" height="25.8" :fill="color3" />
    <polygon
      points="115.79 0 71.23 37.52 74.62 37.52 156.96 37.52 160.61 37.52 115.79 0"
      :fill="color2"
    />
    <polygon
      points="78.79 85.47 98.85 85.47 98.85 55.77 132.99 55.77 132.99 85.47 152.79 85.47 152.79 41.43 78.79 41.43 78.79 85.47"
      :fill="color2"
    />
    <rect x="103.02" y="59.67" width="25.54" height="25.8" :fill="color3" />
    <polygon
      points="173.12 0 128.56 37.52 131.95 37.52 214.29 37.52 217.94 37.52 173.12 0"
      :fill="color1"
    />
    <polygon
      points="136.12 85.47 156.18 85.47 156.18 55.77 190.32 55.77 190.32 85.47 210.12 85.47 210.12 41.43 136.12 41.43 136.12 85.47"
      :fill="color1"
    />
    <rect x="160.35" y="59.67" width="25.54" height="25.8" :fill="color1" />
    <polygon
      points="225.09 103.96 224.12 99.27 147.99 99.27 147.99 94.05 223.02 94.05 216.43 62.17 210.65 62.17 210.65 85.53 124.35 85.53 124.35 62.17 112.81 62.17 103.15 103.96 225.09 103.96"
      :fill="color3"
    />
  </svg>
</template>

<script>
export default {
  props: {
    colors: { type: Object, required: true },
    height: { type: [String, Number], default: '25' },
  },

  computed: {
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
