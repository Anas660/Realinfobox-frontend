<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16.81 15.76"
    width="45"
    height="29"
  >
    <g id="Layer_2" data-name="Layer 2">
      <g id="Customization">
        <polygon
          class="cls-1"
          :style="`fill:${color1}`"
          points="8.4 2.46 0 0 8.4 15.76 16.81 0 8.4 2.46"
        />
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  computed: {
    color1() {
      return this.$store.state.reports.branding.color1;
    },
  },
};
</script>
