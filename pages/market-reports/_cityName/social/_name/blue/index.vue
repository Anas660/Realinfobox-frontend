<template>
  <Loader v-if="isLoading" />
  <div v-else class="d-flex my-0 mx-auto w-full justify-center">
    <div class="Border">
      <div class="Report">
        <component
          :is="`${routeCity}-adom-report`"
          class="AdomReport"
          :month="(reportMonth - 1) | month"
          :name="name"
          :report-data="reportData"
          :year="reportYear"
        />
      </div>
    </div>
    <portal to="reportSelection">
      <BlueReportCard
        :button-disabled="isLoading"
        :selected-property="name"
        @onClick="generateCanvas('ADOM')"
      />
    </portal>
  </div>
</template>

<script>
import downloadSocialReportMixin from '~/mixins/DownloadSocialReportMixin';
import loadReportMixin from '~/mixins/loadReportMixin';

import CalgaryAdomReport from '~/components/svgIcons/CalgaryAdomReport';
import EdmontonAdomReport from '~/components/svgIcons/EdmontonAdomReport';
import FraserValleyAdomReport from '~/components/svgIcons/FraserValleyAdomReport';
import VancouverAdomReport from '~/components/svgIcons/VancouverAdomReport';
import VictoriaAdomReport from '~/components/svgIcons/VictoriaAdomReport';
import WinnipegAdomReport from '~/components/svgIcons/WinnipegAdomReport';
import Loader from '~/components/atoms/Loader';
import BlueReportCard from '~/components/organisms/BlueReportCard';

export default {
  components: {
    CalgaryAdomReport,
    EdmontonAdomReport,
    FraserValleyAdomReport,
    Loader,
    VancouverAdomReport,
    VictoriaAdomReport,
    WinnipegAdomReport,
    BlueReportCard,
  },
  mixins: [downloadSocialReportMixin, loadReportMixin],

  data() {
    return {
      isLoading: false,
      reportData: {},
    };
  },

  computed: {
    name() {
      return this.$route.params.name;
    },
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');

.Border {
  border: 2px solid black;
}

.Report {
  width: 600px;
  height: 600px;
}

.AdomReport {
  font-family: 'Montserrat';
}
</style>
