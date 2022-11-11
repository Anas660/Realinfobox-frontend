<template>
  <Loader v-if="isLoading" />
  <div v-else class="d-flex my-0 mx-auto w-full justify-center">
    <div class="Border">
      <div class="Report">
        <PrimaryMsReport
          :listing-absp="reportData.listingAbsp"
          :month="(reportMonth - 1) | month"
          :name="name"
          :year="reportYear"
        />
      </div>
    </div>
    <portal to="reportSelection">
      <BlueReportCard
        :button-disabled="isLoading"
        :selected-property="name"
        @onClick="generateCanvas('MS')"
      />
    </portal>
  </div>
</template>

<script>
import downloadSocialReportMixin from '~/mixins/DownloadSocialReportMixin';
import loadReportMixin from '~/mixins/loadReportMixin';

import Loader from '~/components/atoms/Loader';
import PrimaryMsReport from '~/components/organisms/PrimaryMsReport';
import BlueReportCard from '~/components/organisms/BlueReportCard.vue';

export default {
  components: {
    Loader,
    PrimaryMsReport,
    BlueReportCard,
  },
  mixins: [downloadSocialReportMixin, loadReportMixin],

  data() {
    return {
      isLoading: false,
      reportData: {},
    };
  },

  created() {
    this.fetchReport();
  },

  methods: {
    async fetchReport() {
      try {
        this.isLoading = true;

        const { thisM } = await this.$axios.$get(
          `/reports/social/${this.routeCity}/${encodeURIComponent(
            this.name,
          )}/latest`,
        );

        this.reportData = thisM;
      } catch (error) {
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
  width: 600px;
  height: 600px;
}

.Border {
  border: 2px solid black;
}
</style>
