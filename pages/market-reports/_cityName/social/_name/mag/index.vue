<template>
  <Loader v-if="isLoading" />
  <div v-else class="d-flex my-0 mx-auto w-full justify-center">
    <div class="Border">
      <div class="Report">
        <component
          :is="`${routeCity}-mag-report`"
          class="MagReport"
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
        @onClick="generateCanvas('MAG')"
      />
    </portal>
  </div>
</template>

<script>
import downloadSocialReportMixin from '~/mixins/DownloadSocialReportMixin';
import loadReportMixin from '~/mixins/loadReportMixin';

import CalgaryMagReport from '~/components/organisms/CalgaryMagReport';
import EdmontonMagReport from '~/components/organisms/EdmontonMagReport';
import FraserValleyMagReport from '~/components/organisms/FraserValleyMagReport';
import VancouverMagReport from '~/components/organisms/VancouverMagReport';
import VictoriaMagReport from '~/components/organisms/VictoriaMagReport';
import WinnipegMagReport from '~/components/organisms/WinnipegMagReport';
import Loader from '~/components/atoms/Loader';
import ReportPageHeader from '~/components/organisms/ReportPageHeader';
import SocialArrow from '~/components/svgIcons/SocialArrow';
import BlueReportCard from '~/components/organisms/BlueReportCard';

export default {
  components: {
    CalgaryMagReport,
    EdmontonMagReport,
    FraserValleyMagReport,
    Loader,
    ReportPageHeader,
    VancouverMagReport,
    VictoriaMagReport,
    WinnipegMagReport,
    SocialArrow,
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
        this.isLoading = false;
      } catch (error) {
        this.$snack.show(`Couldn't load report ${error}`, 'error');
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

.MagReport {
  font-family: 'Montserrat';
}

.Report {
  width: 600px;
  height: 600px;
}
</style>
