<template>
  <div>
    <Loader v-if="isLoading" class="Loader" />
    <div v-else class="d-flex flex-row justify-center">
      <Report
        :hide-branding="!showBanner"
        :branding="branding"
        :title="name"
        :month="reportMonth"
        :name="name"
        :width="1260"
        :year="reportYear"
        property-type="detached"
      >
        <SocialMarketStatusRow
          v-if="showMarketStatus"
          :branding="branding"
          :data="reportData"
          :month="reportMonth"
          :name="name"
          :year="reportYear"
        />
        <SocialBenchmarkPriceRow
          v-if="showBenchmark"
          :branding="branding"
          :data="reportData"
          :month="reportMonth"
          :name="name"
          :year="reportYear"
        />
        <SocialActiveSoldListingsRow
          v-if="showActiveSold"
          :branding="branding"
          :data="reportData"
          :colors="colors"
          :month="reportMonth"
          :name="name"
          :year="reportYear"
        />
        <SocialADOMRow
          v-if="showAdom"
          :branding="branding"
          :data="reportData"
          :month="reportMonth"
          :name="name"
          :year="reportYear"
        />
      </Report>
    </div>
    <portal to="reportSelection">
      <SocialReportOptionsCard
        disabled
        :selected-property="name"
        @onClick="generateCanvas"
      />
    </portal>
  </div>
</template>

<script>
import { axios, CancelToken } from 'axios';
import html2canvas from 'html2canvas';

import loadReportMixin from '~/mixins/loadReportMixin';

import Loader from '~/components/atoms/Loader';
import Report from '~/components/organisms/Report';
import SocialActiveSoldListingsRow from '~/components/organisms/SocialActiveSoldListingsRow';
import SocialADOMRow from '~/components/organisms/SocialADOMRow';
import SocialBenchmarkPriceRow from '~/components/organisms/SocialBenchmarkPriceRow';
import SocialMarketStatusRow from '~/components/organisms/SocialMarketStatusRow';
import SocialReportOptionsCard from '~/components/organisms/SocialReportOptionsCard';

import { mapGetters } from 'vuex';

export default {
  components: {
    Loader,
    Report,
    SocialActiveSoldListingsRow,
    SocialADOMRow,
    SocialBenchmarkPriceRow,
    SocialMarketStatusRow,
    SocialReportOptionsCard,
  },

  mixins: [loadReportMixin],

  data() {
    return {
      reportData: null,
      isDownloading: false,
      isLoading: false,
    };
  },

  computed: {
    branding() {
      return this.$store.state.reports.branding;
    },

    colors() {
      const { color1, color2, color3 } = this.branding;

      return {
        color1,
        color2,
        color3,
      };
    },

    name() {
      const defaultName = this.$route.params.name.toLowerCase();

      if (defaultName === 'calgary') {
        return 'City of Calgary';
      }

      return defaultName;
    },

    ...mapGetters({
      showBanner: 'completeSocialReportConfigurator/showBanner',
      showMarketStatus: 'completeSocialReportConfigurator/showMarketStatus',
      showBenchmark: 'completeSocialReportConfigurator/showBenchmark',
      showActiveSold: 'completeSocialReportConfigurator/showActiveSold',
      showAdom: 'completeSocialReportConfigurator/showAdom',
    }),
  },

  async created() {
    this.$store.dispatch('reports/loadBranding');
  },

  methods: {
    download(canvas, filename) {
      var lnk = document.createElement('a'),
        e;

      lnk.download = filename;
      lnk.href = canvas.toDataURL('image/png;base64');

      if (document.createEvent) {
        e = document.createEvent('MouseEvents');
        e.initMouseEvent(
          'click',
          true,
          true,
          window,
          0,
          0,
          0,
          0,
          0,
          false,
          false,
          false,
          false,
          0,
          null,
        );

        lnk.dispatchEvent(e);
      } else if (lnk.fireEvent) {
        lnk.fireEvent('onclick');
      }
    },

    async generateCanvas() {
      this.isDownloading = true;
      const report = document.querySelector('.Report');

      const options = {
        useCORS: true,
        allowTaint: true,
        width: 1080,
        scale: 2,
      };

      const canvas = await html2canvas(report, options);

      const monthString = this.$options.filters.month(this.reportMonth - 1);

      this.download(
        canvas,
        `${this.name} - Complete Report - ${monthString} ${this.reportYear}`,
      );

      this.isDownloading = false;
    },

    async fetchReport() {
      try {
        if (this.cancelToken) this.cancelToken.cancel();

        this.cancelToken = CancelToken.source();
        this.isLoading = true;

        const { thisM } = await this.$axios.$get(
          `/reports/social/${this.routeCity}/${encodeURIComponent(
            this.name,
          )}/latest`,
          {
            cancelToken: this.cancelToken.token,
          },
        );

        this.reportData = thisM;
      } catch (error) {
        if (axios.isCancel(error)) return;
        this.$snack.show(`Couldn't load report ${error}`, 'error');
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.Report {
  transform: scale(0.7);
}
</style>
