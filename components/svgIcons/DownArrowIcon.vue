<template>
  <svg
    id="Layer_1"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 40 40"
    style="enable-background: new 0 0 40 40"
    xml:space="preserve"
    :width="width"
    :height="height"
  >
    <polygon
      :fill="color"
      points="19.9,33.4 0,14.9 8.9,6.6 19.9,16.9 31.1,6.6 40,14.8 "
    />
  </svg>
</template>

<script>
export default {
  props: {
    color: { type: String, default: 'white' },
    width: { type: [String, Number], default: 8 },
    height: { type: [String, Number], default: 8 },
  },
};
</script>
