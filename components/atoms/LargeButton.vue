<template>
  <div
    :class="`d-flex align-center h-11 w-40 cursor-pointer justify-start rounded-small shadow ${
      isSelected ? 'bg-tango' : 'bg-white'
    }`"
    @click="$emit('on-category-click', label)"
  >
    <MapIcon class="mr-2.5 ml-4" :stroke="colorStyle" />
    <p :class="`m-0 text-sm font-semibold text-${colorStyle}`">{{ label }}</p>
  </div>
</template>

<script>
import MapIcon from '~/components/svgIcons/MapIcon';
export default {
  components: { MapIcon },

  props: {
    label: { type: String, required: true },
    isSelected: { type: Boolean, default: false },
  },

  computed: {
    colorStyle() {
      return this.isSelected ? 'white' : 'black';
    },
  },
};
</script>

<style scoped>
.width {
  width: 23%;
}
</style>
