<template>
  <div class="d-flex w-full">
    <div
      class="d-flex mr-20 shrink-0 flex-col border-0 border-r border-solid border-creole border-opacity-10 pr-16"
    >
      <p
        v-for="{ name } in areas"
        :key="name"
        :class="`
          m-0
          cursor-pointer
          pb-4
          ${
            selectedArea.toLowerCase() === name.toLowerCase()
              ? 'text-tango'
              : 'text-tapa'
          }`"
        @click="$emit('onAreaClick', name)"
      >
        {{ name }}
      </p>
    </div>
    <div class="grid w-full grid-cols-3 gap-4">
      <p
        v-for="{ name } in communities"
        :key="name"
        :class="`${
          selectedCommunity.toLowerCase() === name.toLowerCase()
            ? 'text-tango'
            : 'text-tapa'
        }
        mb-0
        cursor-pointer
        truncate
        `"
        @click="$emit('onCommunityClick', name)"
      >
        {{ name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    areas: { type: Array, required: true },
    selectedArea: { type: String, required: true },
    selectedCommunity: { type: String, required: true },
  },

  computed: {
    communities() {
      const { communities } =
        this.areas.find(({ name }) => name === this.selectedArea) || [];

      return communities;
    },
  },
};
</script>
