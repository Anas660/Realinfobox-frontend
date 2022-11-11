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
          class="cls-2"
          :style="`fill:${branding.color1}`"
          points="17.3 4.43 8.3 12 8.98 12 25.61 12 26.35 12 17.3 4.43"
        />
        <polygon
          :style="`fill:${branding.color1}`"
          points="9.82 21.69 13.88 21.69 13.88 15.69 20.77 15.69 20.77 21.69 24.77 21.69 24.77 12.79 9.82 12.79 9.82 21.69"
        />
        <rect
          :style="`fill:${branding.color1}`"
          x="14.72"
          y="16.48"
          width="5.16"
          height="5.21"
        />
        <polygon
          :style="`fill:${branding.color1}`"
          points="12.14 26.42 28.35 26.42 28.14 25.37 13.56 25.37 13.56 24.37 27.93 24.37 26.66 18.27 25.56 18.27 25.56 22.74 9.03 22.74 9.03 18.27 6.82 18.27 4.94 26.42 12.14 26.42"
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
