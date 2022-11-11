export default {
  props: {
    branding: { type: Object, required: true },
    data: { type: Object, required: true },
    month: { type: [String, Number], required: true },
    name: { type: String, required: true },
    year: { type: [String, Number], required: true },
  },

  computed: {
    $_srm_cityName() {
      return this.$route.params.cityName;
    },
    $_srm_propertyTypes() {
      const { name, $_srm_cityName } = this;

      if ($_srm_cityName === 'calgary') {
        return ['detached', 'semi-detached', 'row', 'apartment'];
      }

      if (name === 'Edmonton') {
        return ['residential', 'detached', 'duplex', 'condo'];
      }

      if (name === 'Winnipeg') {
        return ['condo', 'attached', 'detached'];
      }

      if (name === 'Victoria') {
        return ['detached', 'row', 'condo'];
      }

      if (name === 'Vancouver' || name === 'Fraser Valley') {
        return ['detached', 'townhome', 'apartment'];
      }

      return ['residential', 'detached', 'condo'];
    },
    $_srm_colors() {
      const { color1, color2, color3 } = this.branding;
      return { color1, color2, color3 };
    },
  },
};
