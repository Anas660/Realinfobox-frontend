export default {
  data() {
    return {
      isDownloading: false,
    };
  },
  computed: {
    routeCity() {
      return this.$route.params.cityName;
    },

    isCalgary() {
      return this.routeCity === 'calgary';
    },

    isEdmonton() {
      return this.routeCity === 'edmonton';
    },

    isFraserValley() {
      return this.routeCity === 'fraser-valley';
    },

    isVictoria() {
      return this.routeCity === 'victoria';
    },

    isWinnipeg() {
      return this.routeCity === 'winnipeg';
    },

    isVancouver() {
      return this.routeCity === 'vancouver';
    },

    isEdmontonOrWinnipeg() {
      return this.isEdmonton || this.isWinnipeg;
    },

    isMajorCity() {
      return this.isEdmonton || this.isCalgary;
    },
  },
};
