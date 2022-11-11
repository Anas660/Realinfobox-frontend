<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 34.27 34.27"
    width="70"
    height="70"
  >
    <g id="Layer_2" data-name="Layer 2">
      <g id="Customization">
        <circle
          :style="`fill:${branding.color2}`"
          cx="17.13"
          cy="17.13"
          r="17.13"
        />
        <polygon
          :style="`fill:${branding.color1}`"
          style="opacity: 0.2"
          points="7.39 24.93 9.92 8.26 22.34 8.26 20.62 24.93 20.39 26.56 17.95 26.56 18.18 24.93 9.83 24.93 9.6 26.56 7.16 26.56 7.39 24.93 7.39 24.93"
        />
        <polygon
          :style="`fill:${branding.color1}`"
          points="27 24.93 22.35 8.26 9.93 8.26 13.77 24.93 14.16 26.56 16.6 26.56 16.21 24.93 24.56 24.93 25.15 26.56 27.51 26.56 27 24.93 27 24.93"
        />
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  computed: {
    branding() {
      return this.$store.state.reports.branding;
    },
  },
};
</script>
