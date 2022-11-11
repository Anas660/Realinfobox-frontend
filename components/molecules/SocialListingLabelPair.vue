<template>
  <div class="PairWrapper">
    <SocialListingLabel
      v-if="!hideActive"
      :colors="colors"
      :listing-count="activeListings"
      :month="month"
      :year="year"
    />
    <SocialListingLabel
      :is-active="false"
      :colors="colors"
      :month="month"
      :listing-count="soldListings"
      :year="year"
    />
  </div>
</template>

<script>
import SocialListingLabel from '~/components/molecules/SocialListingLabel';

export default {
  components: {
    SocialListingLabel,
  },

  props: {
    activeListings: { type: [String, Number], required: true },
    colors: { type: Object, required: true },
    hideActive: { type: Boolean, default: false },
    month: { type: [String, Number], required: true },
    soldListings: { type: [String, Number], required: true },
    year: { type: [String, Number], required: true },
  },
};
</script>

<style scoped>
.PairWrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 310px;
}
</style>
