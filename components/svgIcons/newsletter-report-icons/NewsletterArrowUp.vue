<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 15.86 14.87"
    width="45"
    height="29"
  >
    <g id="Layer_2" data-name="Layer 2">
      <g id="Customization">
        <polygon
          :style="`fill:${color2}`"
          points="7.93 12.55 15.86 14.87 7.93 0 0 14.87 7.93 12.55"
        />
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  computed: {
    color2() {
      return this.$store.state.reports.branding.color2;
    },
  },
};
</script>
