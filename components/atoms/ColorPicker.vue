<template>
  <v-color-picker
    v-model="pickedColor"
    :swatches="swatches"
    show-swatches
    hide-mode-switch
    :hide-inputs="hideInputs"
    hide-canvas
    mode="hexa"
  />
</template>

<script>
import colors from 'vuetify/lib/util/colors';
import _chunk from 'lodash/chunk';

export default {
  props: {
    value: {
      type: [String, Object],
      default: '',
    },
    hideInputs: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    pickedColor: {
      get() {
        return this.value;
      },
      set(newColor) {
        this.$emit('input', newColor);
      },
    },
    swatches() {
      const swatches = Object.keys(colors)
        .filter(key => colors[key].base)
        .map(key => {
          return colors[key].base;
        });
      const columnSize = Math.ceil(swatches.length / 5);
      return _chunk(swatches, columnSize);
    },
  },
};
</script>
