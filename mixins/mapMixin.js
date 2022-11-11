export default {
  props: {
    isCity: { type: Boolean, default: false },
    selectedArea: { type: String, default: '' },
  },
  methods: {
    handleIsSelected(area) {
      const isTheSame = this.selectedArea === area || this.isCity;
      return isTheSame ? '#f07423' : '#fff';
    },
    handleIsSelectedText(area) {
      const isTheSame = this.selectedArea === area || this.isCity;
      return isTheSame ? '#fff' : '#807873';
    },
  },
};
