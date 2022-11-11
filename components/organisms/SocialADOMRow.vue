<template>
  <SocialReportSection
    :branding="branding"
    height="150px"
    section-title="average days on market"
  >
    <div class="SectionWrapper">
      <AdomCell
        v-for="(dom, idx) in domData"
        :key="idx"
        class="col-3"
        :adom="dom.dom"
        :colors="$_srm_colors"
        :year="year"
        :month="month"
      />
    </div>
  </SocialReportSection>
</template>

<script>
import AdomCell from '~/components/molecules/AdomCell';
import SocialReportSection from '~/components/molecules/SocialReportSection';
import socialRowMixin from '~/mixins/socialRowMixin';

export default {
  components: {
    AdomCell,
    SocialReportSection,
  },

  mixins: [socialRowMixin],

  computed: {
    domData() {
      const data = [];
      this.$_srm_propertyTypes.forEach(pt => {
        data.push({
          propertyType: pt,
          dom: this.data[pt]?.dom,
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
