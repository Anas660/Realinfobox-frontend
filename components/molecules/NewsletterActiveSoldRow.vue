<template>
  <div class="AdomRowWrapper">
    <NewsletterRowHeader title="Active & Sold Listings" />
    <div class="ContentWrapper">
      <div
        class="AsodTitle"
        :style="{
          backgroundColor: `${branding.color3}`,
          filter: 'brightness(114%)',
        }"
      >
        <NewsletterActiveSoldIcon />
        <ReportParagraph
          font-size="22"
          text-align="center"
          :color="branding.color2"
        >
          ACTIVE & SOLD LISTINGS
        </ReportParagraph>
      </div>
      <div class="AsodContent">
        <div class="Squares">
          <ActiveSoldSquare
            :active="
              isEdmonton || isVictoria
                ? lastYearData.residential.active
                : lastYearData.activeTotal
            "
            :largest-value="largestValue"
            :month="month"
            :sold="
              isEdmonton || isVictoria
                ? lastYearData.residential.sold
                : lastYearData.soldTotal
            "
            :square-color="branding.color3"
            :year="year - 1"
            subtitle="Last year"
          />
          <ActiveSoldSquare
            :active="
              isEdmonton || isVictoria
                ? lastMonthData.residential.active
                : lastMonthData.activeTotal
            "
            :largest-value="largestValue"
            :month="month - 1"
            :sold="
              isEdmonton || isVictoria
                ? lastMonthData.residential.sold
                : lastMonthData.soldTotal
            "
            :square-color="branding.color2"
            :year="lastMonthYear"
            subtitle="Last month"
          />
          <ActiveSoldSquare
            :active="
              isEdmonton || isVictoria
                ? presentData.residential.active
                : presentData.activeTotal
            "
            :largest-value="largestValue"
            :month="month"
            :sold="
              isEdmonton || isVictoria
                ? presentData.residential.sold
                : presentData.soldTotal
            "
            :square-color="branding.color1"
            :subtitle-color="branding.color1"
            :year="year"
            subtitle="present"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReportParagraph from '~/components/atoms/ReportParagraph';
import NewsletterActiveSoldIcon from '~/components/svgIcons/newsletter-report-icons/NewsletterActiveSoldIcon';
import ActiveSoldSquare from '~/components/molecules/ActiveSoldSquare';
import NewsletterRowHeader from '~/components/molecules/NewsletterRowHeader';

export default {
  components: {
    // NewsletterRowHeader,
    ReportParagraph,
    // NewsletterActiveSoldIcon,
    // ActiveSoldSquare,
  },

  props: {
    lastMonthData: { type: Object, default: () => {} },
    lastYearData: { type: Object, default: () => {} },
    presentData: { type: Object, default: () => {} },
    month: { type: [String, Number], required: true },
    year: { type: [String, Number], required: true },
  },

  computed: {
    lastMonthYear() {
      const lastYear = this.year - 1;
      return this.month === 0 ? lastYear : this.year;
    },

    isEdmonton() {
      return this.$route.params.cityName === 'edmonton';
    },

    isVictoria() {
      return this.$route.params.cityName === 'victoria';
    },

    branding() {
      return this.$store.state.reports.branding;
    },

    largestValue() {
      const defaultValues = [
        this.lastYearData.activeTotal,
        this.lastMonthData.activeTotal,
        this.presentData.activeTotal,
      ];

      const specialValues = [
        this.lastYearData?.residential?.active,
        this.lastMonthData?.residential?.active,
        this.lastMonthData?.residential?.active,
      ];

      const values =
        this.isEdmonton || this.isVictoria ? specialValues : defaultValues;

      return Math.max(...values);
    },
  },
};
</script>

<style scoped>
.ContentWrapper {
  display: flex;
  height: 300px;
}

.AsodTitle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
}

.AsodTitle p {
  margin-top: 10px;
}

.AsodContent {
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
  padding: 0 30px;
}

.Squares {
  display: flex;
  height: 70%;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 30px;
}
</style>
