<template>
  <div class="Arrows">
    <UpArrowIcon
      v-if="isUp"
      class="Arrow"
      :color="arrowColor"
      :height="arrowSize"
      :width="arrowSize"
    />
    <DownArrowIcon
      v-else
      class="Arrow"
      :color="arrowColor"
      :height="arrowSize"
      :width="arrowSize"
    />
  </div>
</template>

<script>
import DownArrowIcon from '~/components/svgIcons/DownArrowIcon';
import UpArrowIcon from '~/components/svgIcons/UpArrowIcon';

export default {
  components: {
    DownArrowIcon,
    UpArrowIcon,
  },

  props: {
    arrowColor: { type: String, default: 'white' },
    arrowSize: { type: [String, Number], default: 8 },
    isUp: { type: Boolean, required: true },
  },
};
</script>

<style scoped>
.Arrows {
  display: flex;
  margin-left: auto;
  align-self: flex-end;
  margin-bottom: 5px;
}

.Arrow {
  width: auto;
  height: 8px;
  margin: 4px;
  align-self: flex-end;
}
</style>
