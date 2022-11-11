<template>
  <div :style="{ background }" class="Wrapper">
    <p class="Disclaimer">
      This report was created by Real Info Box Inc. using the most recent
      {{ association }} statistical reports. Information herein deemed reliable
      but not guaranteed. This report is for information purposes. It assumes no
      liability for any action taken based on this information. Not inteded to
      solicit buyers or sellers under contract. Copyright &#169; 2015-{{ year }}
      by Real Info Box Inc. All rights are reserved. Only clients of Real Info
      Box Inc. have the right to view, copy and distribute the market reports
      for the commercial purpose as per User Agreement. www.RealInfoBox.com
    </p>
    <RealLogo />
  </div>
</template>

<script>
import RealLogo from '~/components/svgIcons/RealLogo';

export default {
  components: { RealLogo },
  props: {
    background: { type: String, required: true },
  },

  computed: {
    association() {
      switch (this.cityName) {
        case 'calgary':
          return 'CREB Calgary Real Estate Board Monthly';
        case 'edmonton':
          return 'RAE Realtors Association of Edmonton';
        default:
          return '';
      }
    },

    cityName() {
      return this.$route.params.cityName;
    },

    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
.Wrapper {
  display: flex;
  color: white;
  border-top: 2px solid black;
  padding: 5px;
  padding-right: 30px;
  height: 60px;
}

.Disclaimer {
  width: 95%;
  font-size: 7pt;
  margin: auto 0;
  margin-right: 30px;
  font-family: 'Open Sans';
}
</style>
