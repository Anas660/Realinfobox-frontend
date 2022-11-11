import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      $_sm_isStructureLoading: true,
      $_sm_searchString: '',
    };
  },
  computed: {
    $_sm_structure() {
      const city = this.searchCity || this.cityName;
      if (this.$store.state.reports[city]) {
        return this.$store.state.reports[city]
          ? this.$store.state.reports[city].structure
          : null;
      }

      return null;
    },

    cityName() {
      //todo update default to user's main city
      return this.$route.params.cityName || 'calgary';
    },

    $_sm_onlyName() {
      return this.$route.query.only;
    },

    ...mapGetters('reports', {
      isLoading: 'isStructureLoading',
      locationSubarray: 'locationSubarray',
      locationArray: 'locationArray',
    }),

    searchLocations() {
      if (this.$_sm_structure) {
        return this.locationArray.filter(loc =>
          loc.name.includes(this.$_sm_searchString),
        );
      }

      return [];
    },
  },

  created() {
    if (!this.$_sm_structure) {
      this.$store.dispatch('reports/loadStructure', { city: this.cityName });
    }
  },
};
