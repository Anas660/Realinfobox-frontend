<template>
  <svg
    width="14"
    height="9"
    viewBox="0 0 14 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.00001 1.65685L6.65686 7.31371L12.3137 1.65685"
      :stroke="iconFill"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
import navIconMixin from '~/mixins/navIconMixin';

export default {
  mixins: [navIconMixin],

  props: {
    isUpsideDown: { type: Boolean, default: false },
  },

  computed: {
    iconFill() {
      return this.isUpsideDown ? '#F07423' : '#FFF';
    },
  },
};
</script>
