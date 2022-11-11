<template>
  <nuxt-link class="text-white no-underline" :to="to">
    <p :class="styling" @click="disabled ? () => {} : $emit('onClick')">
      {{ isLoading ? 'Loading...' : text }}
    </p>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    disabled: { type: Boolean, default: false },
    fitButton: { type: Boolean, default: false },
    isLoading: { type: Boolean, default: false },
    text: { type: String, required: true },
    transparent: { type: Boolean, default: false },
    to: { type: String, default: '' },
  },

  computed: {
    styling() {
      return `
        ${!this.disabled ? 'hover:bg-tango' : ''}
        ${this.fitButton ? 'w-full' : 'w-40'}
        ${this.transparent ? 'border-white' : 'border-tango'}
        ${this.transparent ? 'text-white' : 'text-tango'}
        border
        border-solid
        active:bg-orangeRoughby
        active:border-orangeRoughby
        bg-transparent
        cursor-pointer
        font-bold
        hover:border-tango
        hover:text-white
        py-2
        mb-2
        px-6
        rounded-large
        text-center
        text-sm
      `;
    },
  },
};
</script>
