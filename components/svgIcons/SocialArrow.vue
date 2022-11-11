<!-- eslint-disable vue/html-indent -->
<template>
  <div
    class="Container"
    :style="{ transform: `rotate(${isFlipped ? '180deg' : 0})` }"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20.04 15.86"
      width="20.04"
      height="15.86"
    >
      <defs>
        <style>
          .acls-1 {
            isolation: isolate;
          }
          .acls-2 {
            fill: #a9badf;
            mix-blend-mode: multiply;
            opacity: 0.39;
          }
          .acls-3 {
            fill: #5f6bc3;
          }
        </style>
      </defs>
      <g class="acls-1">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              class="acls-2"
              d="M10.09,1.76,1.65,14.55a.82.82,0,0,0,1,1.19l7.77-3.48a.79.79,0,0,1,.67,0l7.77,3.52a.81.81,0,0,0,1-1.19L11.46,1.76A.82.82,0,0,0,10.09,1.76Z"
            />
            <path
              class="acls-3"
              d="M8.58.37.14,13.16a.82.82,0,0,0,1,1.19l7.77-3.48a.79.79,0,0,1,.67,0l7.77,3.52a.82.82,0,0,0,1-1.19L10,.37A.82.82,0,0,0,8.58.37Z"
            />
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    isFlipped: { type: Boolean, default: false },
  },
};
</script>

<style scoped>
.Container {
  width: 20.04px;
  height: 15.86px;
}
</style>
