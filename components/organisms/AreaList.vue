<template>
  <div class="d-flex w-full">
    <div class="d-flex mr-[15%] w-44 flex-col">
      <p
        v-for="{ name } in areas"
        :key="name"
        :class="`cursor-pointer ${
          selectedPlace.toLowerCase() === name.toLowerCase()
            ? 'text-tango'
            : 'text-tapa'
        }`"
        @click="$emit('onAreaClick', name)"
      >
        {{ name }}
      </p>
    </div>
    <component
      :is="`${city}-map`"
      :selected-area="selectedPlace"
      @on-area-click="({ id }) => $emit('onAreaClick', id)"
    />
  </div>
</template>

<script>
import CalgaryMap from '~/components/atoms/maps/CalgaryMap';
import EdmontonMap from '~/components/atoms/maps/EdmontonMap';

export default {
  components: {
    CalgaryMap,
    EdmontonMap,
  },
  props: {
    areas: { type: Array, required: true },
    city: { type: String, required: true },
    selectedPlace: { type: String, required: true },
  },
};
</script>
