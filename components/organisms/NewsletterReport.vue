<template>
  <div class="NewsletterReport">
    <ReportBranding v-if="showBanner" :branding="branding" />
    <NewsletterReportHeader :branding="branding" />
    <NewsletterMarketStatusRow
      v-if="showMarketStatus"
      :month="month"
      :present-data="presentData"
      :year="year"
    />
    <NewsletterBenchmarkSoldRow
      v-if="showBenchmark"
      :last-month-data="lastMonthData"
      :last-year-data="lastYearData"
      :month="month"
      :present-data="presentData"
      :year="year"
    />
    <NewsletterActiveSoldRow
      v-if="showActiveSold"
      :last-month-data="lastMonthData"
      :last-year-data="lastYearData"
      :month="month"
      :present-data="presentData"
      :year="year"
    />
    <NewsletterAdomRow
      v-if="showAdom"
      :last-month-data="lastMonthData"
      :last-year-data="lastYearData"
      :month="month"
      :present-data="presentData"
      :year="year"
    />
    <ReportFooter :background="branding.color2" />
  </div>
</template>

<script>
import ReportBranding from '~/components/molecules/ReportBranding';
import NewsletterAdomRow from '~/components/molecules/NewsletterAdomRow';
import NewsletterBenchmarkSoldRow from '~/components/molecules/NewsletterBenchmarkSoldRow';
import NewsletterMarketStatusRow from '~/components/molecules/NewsletterMarketStatusRow';
import NewsletterReportHeader from '~/components/molecules/NewsletterReportHeader';
import ReportFooter from '~/components/molecules/ReportFooter';

import ReportRowMixin from '~/mixins/reportRowMixin';

import { mapGetters } from 'vuex';
import NewsletterActiveSoldRow from '~/components/molecules/NewsletterActiveSoldRow.vue';

export default {
  components: {
    ReportBranding,
    NewsletterAdomRow,
    NewsletterBenchmarkSoldRow,
    NewsletterMarketStatusRow,
    NewsletterReportHeader,
    ReportFooter,
    NewsletterActiveSoldRow,
  },

  mixins: [ReportRowMixin],

  props: {
    lastMonthData: { type: Object, default: () => {} },
    lastYearData: { type: Object, default: () => {} },
    month: { type: Number, required: true },
    presentData: { type: Object, default: () => {} },
    showBanner: { required: true, type: Boolean },
    showActiveSold: { required: true, type: Boolean },
    showAdom: { required: true, type: Boolean },
    showBenchmark: { required: true, type: Boolean },
    showMs: { required: true, type: Boolean },
    year: { type: [String, Number], required: true },
  },

  computed: {
    branding() {
      return this.$store.state.reports.branding;
    },

    ...mapGetters({
      showBanner: 'completeSocialReportConfigurator/showBanner',
      showMarketStatus: 'completeSocialReportConfigurator/showMarketStatus',
      showBenchmark: 'completeSocialReportConfigurator/showBenchmark',
      showActiveSold: 'completeSocialReportConfigurator/showActiveSold',
      showAdom: 'completeSocialReportConfigurator/showAdom',
    }),
  },

  created() {
    this.$store.dispatch('reports/loadBranding');
  },
};
</script>

<style scoped>
.NewsletterReport {
  display: flex;
  flex-direction: column;
  width: 1000px;
}
</style>
