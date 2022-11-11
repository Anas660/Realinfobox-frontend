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
          points="14.25 10.93 8.88 15.41 9.29 15.41 19.2 15.41 19.64 15.41 14.25 10.93"
        />
        <polygon
          :style="`fill:${branding.color1}`"
          points="9.79 21.13 12.21 21.13 12.21 17.58 16.32 17.58 16.32 21.13 18.7 21.13 18.7 15.87 9.79 15.87 9.79 21.13"
        />
        <rect
          :style="`fill:${branding.color1}`"
          x="12.71"
          y="18.05"
          width="3.07"
          height="3.08"
        />
        <polygon
          :style="`fill:${branding.color1}`"
          points="21.15 10.93 15.79 15.41 16.19 15.41 26.1 15.41 26.54 15.41 21.15 10.93"
        />
        <polygon
          :style="`fill:${branding.color1}`"
          points="16.7 21.13 19.11 21.13 19.11 17.58 23.22 17.58 23.22 21.13 25.6 21.13 25.6 15.87 16.7 15.87 16.7 21.13"
        />
        <rect
          :style="`fill:${branding.color1}`"
          x="19.61"
          y="18.05"
          width="3.07"
          height="3.08"
        />
        <polygon
          :style="`fill:${branding.color1}`"
          points="18.23 23.34 18.11 22.77 9.03 22.77 9.03 22.15 17.98 22.15 17.2 18.35 16.51 18.35 16.51 21.14 6.21 21.14 6.21 18.35 4.83 18.35 3.68 23.34 18.23 23.34"
        />
        <polygon
          :style="`fill:${branding.color1}`"
          points="30.54 23.34 30.42 22.77 21.34 22.77 21.34 22.15 30.29 22.15 29.5 18.35 28.81 18.35 28.81 21.14 18.52 21.14 18.52 18.35 17.14 18.35 15.99 23.34 30.54 23.34"
        />
        <rect
          :style="`fill:${branding.color1}`"
          x="6.1"
          y="18.35"
          width="3.7"
          height="2.79"
        />
        <rect
          :style="`fill:${branding.color1}`"
          x="25.12"
          y="18.35"
          width="3.7"
          height="2.79"
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
