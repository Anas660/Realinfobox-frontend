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
          d="M12.24,26.83H14V21.42h6.26v5.41H22V6.67H12.24ZM19.36,8.17h.9v1.2h-.9Zm0,3.47h.9v1.2h-.9Zm0,3.48h.9v1.2h-.9Zm0,3.47h.9v1.2h-.9ZM16.66,8.17h.9v1.2h-.9Zm0,3.47h.9v1.2h-.9Zm0,3.48h.9v1.2h-.9Zm0,3.47h.9v1.2h-.9ZM14,8.17h.9v1.2H14Zm0,3.47h.9v1.2H14Zm0,3.48h.9v1.2H14Zm0,3.47h.9v1.2H14Z"
        />
        <rect
          :style="`fill:${branding.color1}`"
          x="14.9"
          y="22.32"
          width="4.42"
          height="4.5"
        />
        <path
          :style="`fill:${branding.color1}`"
          d="M22.92,26.83h4.29V11.51l-4.29-4.2Zm2.41-14.24h.9v1.63h-.9Zm0,3.34h.9v1.63h-.9Zm0,3.35h.9v1.63h-.9Zm0,3.3h.9v1.63h-.9ZM23.61,11.43h.9v1.63h-.9Zm0,3.3h.9v1.63h-.9Zm0,3.35h.9v1.63h-.9Zm0,3.3h.9V23h-.9Z"
        />
        <path
          :style="`fill:${branding.color1}`"
          d="M11.34,7.31l-4.29,4.2V26.83h4.29ZM8.85,24.21H8V22.58h.9Zm0-3.3H8V19.28h.9Zm0-3.35H8V15.93h.9Zm0-3.34H8V12.59h.9Zm1.72,8.83h-.9V21.42h.9Zm0-3.34h-.9V18.08h.9Zm0-3.35h-.9V14.73h.9Zm0-3.3h-.9V11.43h.9Z"
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
