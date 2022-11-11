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
        <path
          :style="`fill:${branding.color1}`"
          d="M11.79,10.49a.39.39,0,0,1-.4-.39V7.65a.4.4,0,0,1,.79,0V10.1A.39.39,0,0,1,11.79,10.49Z"
        />
        <path
          :style="`fill:${branding.color1}`"
          d="M16.86,10.46a.39.39,0,0,1-.39-.4V7.61a.39.39,0,1,1,.78,0v2.45A.39.39,0,0,1,16.86,10.46Z"
        />
        <path
          :style="`fill:${branding.color1}`"
          d="M22.48,10.46a.4.4,0,0,1-.4-.4V7.61a.4.4,0,0,1,.79,0v2.45A.4.4,0,0,1,22.48,10.46Z"
        />
        <path
          :style="`fill:${branding.color1}`"
          d="M23.17,26.53H10.55A2.73,2.73,0,0,1,7.82,23.8V11.18a2.73,2.73,0,0,1,2.73-2.73H23.17a2.73,2.73,0,0,1,2.73,2.73V23.8A2.73,2.73,0,0,1,23.17,26.53ZM10.55,9.23a2,2,0,0,0-2,1.95V23.8a2,2,0,0,0,2,1.95H23.17a2,2,0,0,0,1.95-1.95V11.18a2,2,0,0,0-1.95-1.95Z"
        />
        <path
          :style="`fill:${branding.color1}`"
          d="M22.48,15.08H11.79a.39.39,0,1,1,0-.78H22.48a.39.39,0,0,1,0,.78Z"
        />
        <path
          :style="`fill:${branding.color1}`"
          d="M22.48,19H11.79a.4.4,0,1,1,0-.79H22.48a.4.4,0,0,1,0,.79Z"
        />
        <path
          :style="`fill:${branding.color1}`"
          d="M22.48,23H11.79a.4.4,0,1,1,0-.79H22.48a.4.4,0,0,1,0,.79Z"
        />
        <polygon
          :style="`fill:${branding.color1}`"
          points="17.9 27.66 19.16 19.33 25.38 19.33 24.51 27.66 24.4 28.48 23.18 28.48 23.29 27.66 19.12 27.66 19 28.48 17.79 28.48 17.9 27.66 17.9 27.66"
        />
        <polygon
          :style="`fill:${branding.color1}`"
          points="27.7 27.66 25.38 19.33 19.17 19.33 21.09 27.66 21.28 28.48 22.5 28.48 22.31 27.66 26.48 27.66 26.78 28.48 27.96 28.48 27.7 27.66 27.7 27.66"
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
