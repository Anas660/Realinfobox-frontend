<template>
  <SocialReportSection
    :branding="branding"
    section-title="active & sold listings"
    class="mb-3"
  >
    <div class="SectionWrapper">
      <SocialListingLabelPair
        v-for="(item, idx) in activeSoldData"
        :key="idx"
        class="col-3"
        :active-listings="item.active"
        :colors="$_srm_colors"
        :hide-active="$_srm_propertyTypes[idx] === 'duplex'"
        :month="month"
        :sold-listings="item.sold"
        :year="year"
      />
    </div>
  </SocialReportSection>
</template>

<script>
import SocialListingLabelPair from '~/components/molecules/SocialListingLabelPair';
import SocialReportSection from '~/components/molecules/SocialReportSection';
import socialRowMixin from '~/mixins/socialRowMixin';

export default {
  components: {
    SocialListingLabelPair,
    SocialReportSection,
  },

  mixins: [socialRowMixin],

  computed: {
    activeSoldData() {
      const data = [];
      this.$_srm_propertyTypes.forEach(pt => {
        data.push({
          propertyType: pt,
          active: this.data[pt]?.active,
          sold: this.data[pt]?.sold,
        });
      });
      return data;
    },
  },
};
</script>

<style scoped>
.SectionWrapper {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
</style>
