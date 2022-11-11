<template>
  <div class="d-flex w-full">
    <div class="d-flex mr-[15%] w-44 flex-col">
      <div v-for="region in regions" :key="region.name">
        <p
          :class="`cursor-pointer ${
            selectedRegion.toLowerCase() === region.name.toLowerCase()
              ? 'text-tango'
              : 'text-tapa'
          }`"
          @click="$emit('onRegionClick', region.name)"
        >
          {{ region.name }}
        </p>
        <div
          v-if="selectedRegion === region.name"
          class="ml-2 border-0 border-l-2 border-solid border-swissCoffee"
        >
          <div
            v-for="area in region.areas"
            :key="area.name"
            class="d-flex cursor-pointer items-center pb-4"
            @click="$emit('onRegionAreaClick', area.name)"
          >
            <div class="h-[2px] w-5 bg-swissCoffee" />
            <p
              :class="`m-0 ${
                selectedRegionArea.toLowerCase() === area.name.toLowerCase()
                  ? 'text-tango'
                  : 'text-tapa'
              } ml-2`"
            >
              {{ area.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <CalgaryRegionsMap
      :selected-region="selectedRegion"
      @onRegionClick="({ id }) => $emit('onRegionClick', id)"
    />
  </div>
</template>

<script>
import CalgaryRegionsMap from '~/components/atoms/maps/CalgaryRegionsMap';
export default {
  components: { CalgaryRegionsMap },
  props: {
    selectedRegion: { type: String, required: true },
    selectedRegionArea: { type: String, required: true },
    regions: { type: Array, required: true },
  },
};
</script>
