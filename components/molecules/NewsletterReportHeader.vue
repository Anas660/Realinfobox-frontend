<template>
  <div
    class="NewsletterReportHeader"
    :style="{ backgroundColor: branding.color2 }"
  >
    <Dot />
    <ReportParagraph color="white" font-size="34">
      MARKET STATUS - {{ cityName | uppercase }}
    </ReportParagraph>
  </div>
</template>

<script>
import ReportParagraph from '~/components/atoms/ReportParagraph';
import Dot from '~/components/atoms/Dot';

export default {
  components: {
    Dot,
    ReportParagraph,
  },

  props: {
    branding: { type: Object, required: true },
  },

  computed: {
    cityName() {
      let routeCity = this.$route.params.name;

      if (routeCity === 'City of Calgary') {
        routeCity = 'Calgary';
      }

      return routeCity;
    },
  },
};
</script>

<style scoped lang="scss">
.NewsletterReportHeader {
  display: flex;
  height: 70px;
  width: 100%;
  align-items: center;
  padding-left: 20px;

  p {
    margin-left: 10px;
  }
}
</style>
