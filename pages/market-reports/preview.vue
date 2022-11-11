<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <div v-if="loading" class="Preview Skeleton elevation-2 p-4">
        <v-skeleton-loader type="heading" />
        <v-skeleton-loader type="paragraph" />
        <v-skeleton-loader type="image" />
        <v-skeleton-loader type="paragraph" />
      </div>
      <div v-else>
        <ReportPage
          dont-load
          :location-name="reportDetail.name"
          :external-data="reportDetail"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ReportPage from '~/pages/market-reports/_cityName/report/_name/index';

export default {
  components: {
    ReportPage,
  },
  layout: 'public',
  auth: false,

  data() {
    return {
      loading: false,
      reportDetail: {},
    };
  },
  computed: {
    reportToken() {
      return this.$route.query.report_token;
    },
    hideBranding() {
      return this.$route.query.plain;
    },
  },
  mounted() {
    if (this.reportToken) {
      this.loadReport();
    } else {
      this.$snack.show('Authentication failure', 'error');
    }
  },
  methods: {
    async loadReport() {
      try {
        this.loading = true;
        const params = {};
        params.report_token = this.reportToken;
        this.reportDetail = await this.$axios.$get('/public/reports/preview', {
          params,
        });
        this.loading = false;
      } catch (error) {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.Preview {
  &.Skeleton > * {
    margin-bottom: 16px;
  }

  &:not(.Skeleton) {
    all: initial;
    * {
      all: unset;
    }
  }
}
</style>
