<template>
  <ReportSection
    :colors="colors"
    :is-first="isFirst"
    :subtitle="$_rrm_subtitle"
    :website="website"
    :label="`${
      $_rrm_cityName === 'calgary' ? 'BENCHMARK' : 'AVERAGE'
    } PRICE TREND`"
    :title="`10 YEAR ${
      $_rrm_cityName === 'calgary' ? 'BENCHMARK' : 'AVERAGE'
    } PRICE HISTORY`"
  >
    <div class="BenchmarkPriceData">
      <div class="LeftData">
        <component
          :is="iconName"
          :colors="colors"
          :class="iconName"
          :height="iconHeight"
        />

        <PropertyRow
          :colors="colors"
          :label="`PROPERTY TYPE:`"
          :value="$t(`reports.${$_rrm_cityName}.${propertyType}`).toUpperCase()"
          font-size="15"
        />
        <ReportParagraph :color="$_rrm_color1" font-size="15">{{
          name.toUpperCase()
        }}</ReportParagraph>
      </div>
      <div class="Chart">
        <TenYearChart
          :benchmark-price-total-delta="$_rrm_CMD.benchmarkPriceYTYDelta"
          :data="data"
          :colors="colors"
        />
      </div>
    </div>
  </ReportSection>
</template>

<script>
import ApartmentIcon from '~/components/svgIcons/ApartmentIcon';
import CalgarySkylineIcon from '~/components/svgIcons/CalgarySkylineIcon';
import DetachedIcon from '~/components/svgIcons/DetachedIcon';
import EdmontonSkylineIcon from '~/components/svgIcons/EdmontonSkylineIcon';
import PropertyRow from '~/components/molecules/PropertyRow';
import ReportParagraph from '~/components/atoms/ReportParagraph';
import ReportSection from '~/components/atoms/ReportSection';
import RowIcon from '~/components/svgIcons/RowIcon';
import SemiDetachedIcon from '~/components/svgIcons/SemiDetachedIcon';
import TenYearChart from '~/components/molecules/TenYearChart';

import ReportRowMixin from '~/mixins/reportRowMixin';

export default {
  components: {
    ApartmentIcon,
    CalgarySkylineIcon,
    DetachedIcon,
    EdmontonSkylineIcon,
    PropertyRow,
    ReportSection,
    ReportParagraph,
    RowIcon,
    SemiDetachedIcon,
    TenYearChart,
  },

  mixins: [ReportRowMixin],

  props: {
    website: { type: String, default: '' },
  },

  computed: {
    iconName() {
      if (this.isCity) return `${this.$_rrm_cityName}-skyline-icon`;
      let property = this.propertyType;
      if (property === 'duplex' || property === 'residential')
        property = 'semi-detached';
      if (property === 'condo') property = 'apartment';
      return property + '-icon';
    },

    iconHeight() {
      const { propertyType } = this;

      switch (propertyType) {
        case 'detached':
          return '160';
        case 'semi-detached':
          return '115';
        case 'row':
          return '120';
        case 'apartment':
          return '150';
        default:
          return '150';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.BenchmarkPriceData {
  display: flex;
  height: 100%;

  .Chart {
    width: 60%;
    margin-left: auto;
  }
}

.LeftData {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35%;
}

.PropertyRow {
  margin: 0 auto;
}

.calgary-skyline-icon {
  width: auto;
  height: 105px;
  margin-bottom: 20px;
}

.detached-icon {
  width: auto;
  height: 160px;
  margin-bottom: 20px;
}

.semi-detached-icon {
  width: auto;
  height: 115px;
  margin-bottom: 20px;
}

.row-icon {
  width: auto;
  height: 120px;
  margin-bottom: 20px;
}

.apartment-icon {
  width: auto;
  height: 150px;
  margin-bottom: 20px;
}
</style>
