<template>
  <p v-if="!to" :class="styling" @click="disabled ? () => {} : $emit('click')">
    {{ isLoading ? $t('common.loading') : text }}
  </p>
  <a v-else :class="styling" :href="to" target="_blank">{{ text }}</a>
</template>

<script>
export default {
  props: {
    disabled: { type: Boolean, default: false },
    fitButton: { type: Boolean, default: false },
    isLoading: { type: Boolean, default: false },
    text: { type: String, required: true },
    to: { type: String, default: '' },
  },

  computed: {
    styling() {
      return `
        color-white
        font-bold
        py-3 px-6
        rounded-large
        text-center
        text-sm
        text-white
        ${!this.disabled ? 'active:bg-orangeRoughby' : ''}
        ${!this.disabled ? 'hover:bg-hotCinnamon' : ''}
        ${this.disabled ? 'cursor-default' : 'cursor-pointer'}
        ${this.fitButton ? 'w-full' : 'w-40'}
        ${this.isLoading || this.disabled ? 'bg-tapa' : 'bg-tango'}
        ${this.isLoading || this.disabled ? 'opacity-50' : ''}
      `;
    },
  },
};
</script>
