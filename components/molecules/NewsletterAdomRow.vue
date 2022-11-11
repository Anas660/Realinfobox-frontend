<template>
  <div class="AdomRowWrapper">
    <NewsletterRowHeader title="Average Days on Market" />
    <div class="ContentWrapper">
      <div
        class="AdomTitle"
        :style="{
          backgroundColor: `${branding.color3}`,
          filter: 'brightness(114%)',
        }"
      >
        <NewsletterAdomIcon />
        <ReportParagraph :color="branding.color2" font-size="22">
          AVERAGE DAYS
        </ReportParagraph>
      </div>
      <div class="AdomContent">
        <div class="Squares">
          <BenchmarkSquare
            :largest-value="largestValue"
            :max-square-height="120"
            :month="month"
            :price="
              isVictoria || isEdmonton
                ? lastYearData.residential.dom
                : lastYearData.domAvg
            "
            :year="year - 1"
            :square-color="branding.color3"
            subtitle="last year"
            is-adom
          />
          <BenchmarkSquare
            :largest-value="largestValue"
            :max-square-height="120"
            :price="
              isVictoria || isEdmonton
                ? lastMonthData.residential.dom
                : lastMonthData.domAvg
            "
            :year="lastMonthYear"
            :square-color="branding.color2"
            :month="month - 1"
            subtitle="last month"
            is-adom
          />
          <BenchmarkSquare
            :largest-value="largestValue"
            :max-square-height="120"
            :price="
              isVictoria || isEdmonton
                ? presentData.residential.dom
                : presentData.domAvg
            "
            :year="year"
            :square-color="branding.color1"
            :month="month"
            subtitle="present"
            is-adom
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReportParagraph from '~/components/atoms/ReportParagraph';
import NewsletterAdomIcon from '~/components/svgIcons/newsletter-report-icons/NewsletterAdomIcon';
import BenchmarkSquare from '~/components/molecules/BenchmarkSquare';
import NewsletterRowHeader from '~/components/molecules/NewsletterRowHeader';

export default {
  components: {
    NewsletterRowHeader,
    ReportParagraph,
    BenchmarkSquare,
    NewsletterAdomIcon,
  },

  props: {
    presentData: { type: Object, default: () => {} },
    lastYearData: { type: Object, default: () => {} },
    lastMonthData: { type: Object, default: () => {} },
    month: { type: Number, required: true },
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

    largestValue() {
      const defaultValues = [
        this.lastMonthData?.domTotal,
        this.presentData?.domTotal,
        this.lastYearData?.domTotal,
      ];
      const residentialValues = [
        this.lastMonthData?.residential?.dom,
        this.presentData?.residential?.dom,
        this.lastYearData?.residential?.dom,
      ];
      const values =
        this.isVictoria || this.isEdmonton ? residentialValues : defaultValues;
      const maxVal = Math.max(...values);

      return maxVal;
    },

    branding() {
      return this.$store.state.reports.branding;
    },
  },
};
</script>

<style scoped>
.ContentWrapper {
  display: flex;
  height: 300px;
}

.AdomTitle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
}

.AdomTitle p {
  margin-top: 10px;
}

.AdomContent {
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
