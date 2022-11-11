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
      points="20,14.1 34.1,0 40,5.9 25.9,20 40,34.1 34.1,40 20,25.9 5.9,40 0,34.1 14.1,20 0,5.9 5.9,0 		"
    />
  </svg>
</template>

<script>
export default {
  props: {
    color: { type: String, required: true },
    width: { type: [String, Number], default: 7 },
    height: { type: [String, Number], default: 7 },
  },
};
</script>
