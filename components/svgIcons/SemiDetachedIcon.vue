<template>
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 206.31 95.28"
    width="100%"
    :height="height"
  >
    <polygon
      points="81.19 0 39.99 34.39 43.12 34.39 119.26 34.39 122.63 34.39 81.19 0"
      :fill="color2"
    />
    <polygon
      points="46.98 78.34 65.53 78.34 65.53 51.11 97.09 51.11 97.09 78.34 115.4 78.34 115.4 37.98 46.98 37.98 46.98 78.34"
      :fill="color2"
    />
    <rect x="69.38" y="54.69" width="23.61" height="23.65" :fill="color1" />
    <polygon
      points="134.19 0 93 34.39 96.13 34.39 172.26 34.39 175.63 34.39 134.19 0"
      :fill="color2"
    />
    <polygon
      points="99.98 78.34 118.53 78.34 118.53 51.11 150.1 51.11 150.1 78.34 168.41 78.34 168.41 37.98 99.98 37.98 99.98 78.34"
      :fill="color2"
    />
    <rect x="122.39" y="54.69" width="23.61" height="23.65" :fill="color1" />
    <polygon
      points="111.77 95.28 110.88 90.99 41.1 90.99 41.1 86.2 109.87 86.2 103.82 56.98 98.53 56.98 98.53 78.39 19.43 78.39 19.43 56.98 8.85 56.98 0 95.28 111.77 95.28"
      :fill="color3"
    />
    <polygon
      points="206.31 95.28 205.42 90.99 135.64 90.99 135.64 86.2 204.41 86.2 198.36 56.98 193.07 56.98 193.07 78.39 113.97 78.39 113.97 56.98 103.39 56.98 94.54 95.28 206.31 95.28"
      :fill="color3"
    />
    <rect x="18.58" y="56.98" width="28.39" height="21.41" :fill="color3" />
    <rect x="164.72" y="56.98" width="28.39" height="21.41" :fill="color3" />
  </svg>
</template>

<script>
export default {
  props: {
    colors: { type: Object, required: true },
    height: { type: String, default: '25' },
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
