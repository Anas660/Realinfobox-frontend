<template>
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 131.03 131.03"
    width="100%"
    :height="height"
  >
    <path
      d="M116.35,166.52h11.43V131.39h40.7v35.13h11.43v-131H116.35ZM162.63,45.24h5.85v7.81h-5.85Zm0,22.58h5.85v7.81h-5.85Zm0,22.59h5.85v7.8h-5.85Zm0,22.58h5.85v7.8h-5.85ZM145.06,45.24h5.86v7.81h-5.86Zm0,22.58h5.86v7.81h-5.86Zm0,22.59h5.86v7.8h-5.86Zm0,22.58h5.86v7.8h-5.86ZM127.78,45.24h5.85v7.81h-5.85Zm0,22.58h5.85v7.81h-5.85Zm0,22.59h5.85v7.8h-5.85Zm0,22.58h5.85v7.8h-5.85Z"
      transform="translate(-82.61 -35.48)"
      :fill="color2"
    />
    <rect x="51.02" y="101.76" width="28.72" height="29.27" :fill="color1" />
    <path
      d="M185.77,166.52h27.88V67L185.77,39.66ZM201.38,74h5.85V84.55h-5.85Zm0,21.74h5.85v10.6h-5.85Zm0,21.75h5.85V128h-5.85Zm0,21.47h5.85v10.59h-5.85ZM190.23,66.43h5.85V77h-5.85Zm0,21.47h5.85V98.49h-5.85Zm0,21.74h5.85v10.6h-5.85Zm0,21.47h5.85V141.7h-5.85Z"
      transform="translate(-82.61 -35.48)"
      :fill="color2"
    />
    <path
      d="M110.49,39.66,82.61,67v99.53h27.88ZM94.32,149.51H88.47V138.92h5.85Zm0-21.47H88.47V117.45h5.85Zm0-21.74H88.47V95.7h5.85Zm0-21.75H88.47V74h5.85ZM105.47,142H99.62V131.39h5.85Zm0-21.74H99.62v-10.6h5.85Zm0-21.75H99.62V87.9h5.85Zm0-21.47H99.62V66.43h5.85Z"
      transform="translate(-82.61 -35.48)"
      :fill="color2"
    />
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
  },
};
</script>
