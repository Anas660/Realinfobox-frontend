<template>
  <div>
    <Loader v-if="isLoading" class="fixed" />
    <div v-else class="d-flex justify-center">
      <div class="border-3 border border-solid">
        <NewsletterReport
          class="Report"
          :present-data="thisM"
          :last-year-data="lastY"
          :last-month-data="lastM"
          :month="reportMonth - 1"
          :show-banner="showBanner"
          :show-ms="showMs"
          :show-benchmark="showBenchmark"
          :show-active-sold="showActiveSold"
          :show-adom="showAdom"
          :year="reportYear"
        />
      </div>
    </div>
    <portal to="reportSelection">
      <SocialReportOptionsCard
        disabled
        :selected-property="name"
        @onClick="generateCanvas('Newsletter', 1, 1000, reportHeight)"
      />
    </portal>
  </div>
</template>

<script>
import { axios, CancelToken } from 'axios';

import downloadSocialReportMixin from '~/mixins/DownloadSocialReportMixin';
import loadReportMixin from '~/mixins/loadReportMixin';

import Loader from '~/components/atoms/Loader';
import NewsletterReport from '~/components/organisms/NewsletterReport';
import SocialReportOptionsCard from '~/components/organisms/SocialReportOptionsCard.vue';

export default {
  components: {
    Loader,
    NewsletterReport,
    SocialReportOptionsCard,
  },
  mixins: [loadReportMixin, downloadSocialReportMixin],

  data() {
    return {
      lastM: null,
      lastY: null,
      thisM: null,
      isLoading: false,
      showBanner: true,
      showMs: true,
      showBenchmark: true,
      showActiveSold: true,
      showAdom: true,
    };
  },

  computed: {
    branding() {
      return this.$store.state.reports.branding;
    },

    name() {
      const defaultName = this.$route.params.name.toLowerCase();

      if (defaultName === 'calgary') {
        return 'City of Calgary';
      }

      return defaultName;
    },

    reportHeight() {
      const { offsetHeight } = document.querySelector('.Report');
      return offsetHeight;
    },
  },

  methods: {
    async fetchReport() {
      try {
        if (this.cancelToken) {
          this.cancelToken.cancel();
        }

        this.cancelToken = CancelToken.source();
        this.isLoading = true;

        const { lastM, lastY, thisM } = await this.$axios.$get(
          `/reports/social/${this.routeCity}/${encodeURIComponent(
            this.name,
          )}/latest`,
          {
            cancelToken: this.cancelToken.token,
          },
        );

        this.lastM = lastM;
        this.lastY = lastY;
        this.thisM = thisM;

        this.isLoading = false;
      } catch (error) {
        this.$snack.show(`Couldn't load report ${error}`, 'error');
        this.isLoading = false;

        if (axios.isCancel(error)) {
          return;
        }
      }
    },
  },
};
</script>
