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
    <style type="text/css">
      .st0{fill:{{ color }};}
    </style>
    <path
      class="st0"
      d="M40,20c0,11-9,20-20,20c-11,0-20-9-20-20s9-20,20-20c0,0,0,0,0,0C31,0,40,9,40,20z M20,5.3
	C11.9,5.3,5.3,11.9,5.3,20S11.9,34.7,20,34.7S34.7,28.1,34.7,20S28.1,5.3,20,5.3L20,5.3z"
    />
  </svg>
</template>

<script>
export default {
  props: {
    color: { type: String, required: true },
    width: { type: [String, Number], default: 25 },
    height: { type: [String, Number], default: 25 },
  },
};
</script>
