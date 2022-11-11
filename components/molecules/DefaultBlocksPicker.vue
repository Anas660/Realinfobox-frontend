<template>
  <v-select
    v-model="blocks"
    label="Visible default blocks"
    :items="items"
    item-text="name"
    item-value="block_id"
    multiple
    hide-details
  >
    <template #selection="{ item, index }">
      <v-chip v-if="index < 3">
        <span>{{ item.name }}</span>
      </v-chip>
      <span v-if="index === 3" class="grey--text caption"
        >(+{{ blocks.length - 3 }} others)</span
      >
    </template>
  </v-select>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    value: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    blocks: {
      get() {
        return this.value;
      },
      set(newBlocks) {
        this.$emit('input', newBlocks);
      },
    },
  },
};
</script>

<style></style>
