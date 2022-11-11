<template>
  <ReportSection
    :colors="colors"
    :is-first="isFirst"
    :subtitle="$_rrm_subtitle"
    :website="website"
    height="300pt"
    label="LISTING ABSORPTION RATE"
    title="13 MONTHS MARKET HISTORY"
  >
    <div class="Content">
      <div class="Data">
        <div class="DataRow">
          <AbsorptionRateNumbers
            class="RateNumbers"
            :absorption-rate="$_rrm_CMD.soldPercent"
            :colors="colors"
            :month="$_rrm_month"
            :year="$_rrm_year"
          />
          <ListingAbsorptionArrowData
            :colors="colors"
            :mtm-value="$_rrm_CMD.soldPercentDelta"
            :yty-value="$_rrm_CMD.soldPercentYTYDelta"
            :month-to-month-text="monthToMonthText"
            :year-to-year-text="yearToYearText"
          />
        </div>
        <div class="IconRow">
          <ListingAbsorptionRateCircle
            :value="$_rrm_CMD.soldPercent"
            :colors="colors"
          />
          <div class="IconRowText">
            <ReportParagraph
              :color="$_rrm_color2"
              :bold="true"
              font-size="15"
              text-align="center"
            >
              {{ $_rrm_CMD.unsoldPercent }}%
            </ReportParagraph>
            <ReportParagraph
              :color="$_rrm_color2"
              :bold="true"
              font-size="12"
              text-align="center"
            >
              UNSOLD, EXPIRED<br />& TERMINATED listings
            </ReportParagraph>
          </div>
        </div>
      </div>

      <div v-if="$_rrm_chartData" class="Charts">
        <MarketStatusChart
          v-for="(chartData, idx) in $_rrm_chartData"
          :key="idx"
          :chart-data="chartData"
          :colors="colors"
          :year="chartData[0].year"
        />
      </div>
    </div>
  </ReportSection>
</template>

<script>
import groupBy from 'lodash/groupBy';

import AbsorptionRateNumbers from '~/components/molecules/AbsorptionRateNumbers';
import ListingAbsorptionArrowData from '~/components/organisms/ListingAbsorptionArrowData';
import ListingAbsorptionRateCircle from '~/components/atoms/ListingAbsorptionRateCircle';
import MarketStatusChart from '~/components/organisms/MarketStatusChart';
import ReportParagraph from '~/components/atoms/ReportParagraph';
import ReportSection from '~/components/atoms/ReportSection';
import ReportRowMixin from '~/mixins/reportRowMixin';

export default {
  components: {
    AbsorptionRateNumbers,
    ListingAbsorptionArrowData,
    ListingAbsorptionRateCircle,
    MarketStatusChart,
    ReportParagraph,
    ReportSection,
  },

  mixins: [ReportRowMixin],

  props: {
    website: { type: String, default: '' },
  },

  computed: {
    monthToMonthText() {
      let text = this.getText(this.$_rrm_CMD.soldPercentDelta);
      return `${text} compared to ${this.$_rrm_lastMonthStringShort} ${this.$_rrm_year}`;
    },

    yearToYearText() {
      let text = this.getText(this.$_rrm_CMD.soldPercentYTYDelta);
      return `${text} compared to ${this.$_rrm_monthStringShort} ${this.$_rrm_lastYear}`;
    },

    chart() {
      const groupedData = groupBy(this.chartData, 'year');
      const mappedData = Object.values(groupedData);

      return mappedData;
    },
  },
  methods: {
    changeDirection(value) {
      if (value > 0) return 'up';
      if (value < 0) return 'down';
      if (value === 0) return 'nochange';
      return null;
    },
    getText(value) {
      const direction = this.changeDirection(value);
      switch (direction) {
        case 'up':
          return `The odds of selling increased by ${value}%`;
        case 'down':
          return `The odds of selling decreased by ${value}%`;
        case 'nochange':
          return "The odds of selling didn't change";

        default:
          return 'Odds data not available';
      }
    },
  },
};
</script>

<style scoped>
.Content {
  display: flex;
  height: 100%;
}

.Data {
  display: flex;
  flex-direction: column;
  width: 35%;
}

.DataRow {
  display: flex;
}

.RateNumbers {
  width: 40%;
  margin-top: 13px;
  margin-right: 10px;
}

.Charts {
  display: flex;
  margin-left: auto;
  width: 57%;
}

.ListingAbsorptionRateIcon {
  height: 155px;
}

.IconRow {
  display: flex;
}

.IconRowText {
  display: flex;
  font-weight: bold;
  flex-direction: column;
  font-size: 13pt;
  text-align: center;
  margin-top: auto;
  margin-bottom: 20px;
}

.IconRowText p {
  margin: 0;
}
</style>
