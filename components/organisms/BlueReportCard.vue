<template>
  <div class="mt-12 rounded-small bg-white shadow-lg">
    <div class="border-0 border-b border-solid border-black border-opacity-10">
      <div class="mb-3.5 px-6 pt-6">
        <p class="m-0 text-sm text-tapa">Selected</p>
        <p class="m-0 text-sm text-black">
          {{ selectedProperty }}
        </p>
      </div>
    </div>
    <div class="d-flex mb-3.5 flex-col pt-4 pb-2">
      <outlined-button
        class="mx-auto"
        text="Download PNG"
        :disabled="buttonDisabled"
        @onClick="$emit('onClick')"
      />
    </div>
  </div>
</template>

<script>
import OutlinedButton from '~/components/atoms/OutlinedButton';

export default {
  components: {
    OutlinedButton,
  },

  props: {
    buttonDisabled: { type: Boolean, default: false },
    selectedProperty: { type: String, default: '' },
  },
};
</script>
