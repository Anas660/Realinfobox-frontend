export default {
  props: {
    isActive: { type: Boolean, default: true },
  },

  computed: {
    stroke() {
      return this.isActive ? '#F07423' : 'white';
    },

    opacity() {
      return this.isActive ? '1' : '0.6';
    },
  },
};
