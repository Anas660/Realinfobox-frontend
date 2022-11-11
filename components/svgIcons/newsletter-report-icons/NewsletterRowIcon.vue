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
          points="18.23 23.34 18.11 22.77 9.03 22.77 9.03 22.15 17.98 22.15 17.2 18.35 16.51 18.35 16.51 21.14 6.21 21.14 6.21 18.35 4.83 18.35 3.68 23.34 18.23 23.34"
        />
        <polygon
          :style="`fill:${branding.color1}`"
          points="10.65 10.93 5.34 15.41 5.74 15.41 15.57 15.41 16 15.41 10.65 10.93"
        />
        <polygon
          :style="`fill:${branding.color1}`"
          points="6.24 21.13 8.63 21.13 8.63 17.58 12.71 17.58 12.71 21.13 15.07 21.13 15.07 15.87 6.24 15.87 6.24 21.13"
        />
        <rect
          :style="`fill:${branding.color1}`"
          x="9.13"
          y="18.05"
          width="3.05"
          height="3.08"
        />
        <polygon
          :style="`fill:${branding.color1}`"
          points="17.5 10.93 12.18 15.41 12.58 15.41 22.41 15.41 22.84 15.41 17.5 10.93"
        />
        <polygon
          :style="`fill:${branding.color1}`"
          points="13.08 21.13 15.47 21.13 15.47 17.58 19.55 17.58 19.55 21.13 21.91 21.13 21.91 15.87 13.08 15.87 13.08 21.13"
        />
        <rect
          :style="`fill:${branding.color1}`"
          x="15.97"
          y="18.05"
          width="3.05"
          height="3.08"
        />
        <polygon
          :style="`fill:${branding.color1}`"
          points="24.34 10.93 19.02 15.41 19.42 15.41 29.25 15.41 29.68 15.41 24.34 10.93"
        />
        <polygon
          :style="`fill:${branding.color1}`"
          points="19.92 21.13 22.31 21.13 22.31 17.58 26.39 17.58 26.39 21.13 28.75 21.13 28.75 15.87 19.92 15.87 19.92 21.13"
        />
        <rect
          :style="`fill:${branding.color1}`"
          x="22.81"
          y="18.05"
          width="3.05"
          height="3.08"
        />
        <polygon
          :style="`fill:${branding.color1}`"
          points="30.54 23.34 30.42 22.77 21.34 22.77 21.34 22.15 30.29 22.15 29.5 18.35 28.81 18.35 28.81 21.14 18.52 21.14 18.52 18.35 17.14 18.35 15.99 23.34 30.54 23.34"
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
