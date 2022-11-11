<template>
  <v-select
    v-model="selectedType"
    :items="blockTypes"
    label="Block type"
    item-text="name"
    item-value="type"
    required
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: 'editor',
    },
  },
  data() {
    return {
      blockTypes: [
        {
          type: 'editor',
          name: 'Editor',
        },
        {
          type: 'image',
          name: 'Image Bitmap',
        },
        {
          type: 'svg',
          name: 'Image SVG',
        },
      ],
    };
  },
  computed: {
    selectedType: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>

<style></style>
