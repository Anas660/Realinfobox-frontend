<template>
  <SocialReportSection :branding="branding" section-title="Market status">
    <div class="SectionWrapper">
      <MarketStatusCell
        v-for="(item, idx) in tachymeterData"
        :key="idx"
        class="col-3"
        :absorption-rate="item.listingAbsp"
        :branding="branding"
        :month="month"
        :property-type="$t(`reports.${$_srm_cityName}.${item.propertyType}`)"
        :year="year"
      />
    </div>
  </SocialReportSection>
</template>

<script>
import MarketStatusCell from '~/components/molecules/MarketStatusCell';
import SocialReportSection from '~/components/molecules/SocialReportSection';
import socialRowMixin from '~/mixins/socialRowMixin';

export default {
  components: {
    MarketStatusCell,
    SocialReportSection,
  },

  mixins: [socialRowMixin],

  computed: {
    tachymeterData() {
      const data = [];
      this.$_srm_propertyTypes.forEach(pt => {
        let listingAbsp = this.data[pt]?.listingAbsp;

        // TODO: Remove after the listingAbsp is added to the backend response
        if (!listingAbsp) {
          const active = this.data[pt]?.active;
          const sold = this.data[pt]?.sold;

          listingAbsp = Math.round((100 * sold) / active);
        }
        listingAbsp = listingAbsp > 100 ? 100 : listingAbsp;
        data.push({
          propertyType: pt,
          listingAbsp,
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
