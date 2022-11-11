<template>
  <div class="Container">
    <NewsletterRowHeader
      :title="`${isEdmonton ? 'Average' : 'Benchmark'} Sold Price`"
    />
    <NewsletterBenchmarkRowItem
      v-for="(item, id) in itemData"
      :key="id"
      :benchmark-price-delta="item.benchmarkPriceDelta"
      :benchmark-price-yty-delta="item.benchmarkPriceYtyDelta"
      :hide-line="id === itemData.length - 1"
      :icon="item.icon ? item.icon : item.propertyType"
      :last-month-benchmark="item.lastMonthBenchmark"
      :last-year-benchmark="item.lastYearBenchmark"
      :max-square-height="item.maxSquareHeight"
      :month="month"
      :present-benchmark="item.presentBenchmark"
      :property-type="item.propertyType"
      :section-height="item.sectionHeight"
      :year="year"
    />
  </div>
</template>

<script>
import isCityMixin from '~/mixins/isCityMixin';

import NewsletterBenchmarkRowItem from '~/components/molecules/NewsletterBenchmarkRowItem';
import NewsletterRowHeader from '~/components/molecules/NewsletterRowHeader';
export default {
  components: {
    NewsletterRowHeader,
    NewsletterBenchmarkRowItem,
  },

  mixins: [isCityMixin],

  props: {
    lastMonthData: { type: Object, default: () => {} },
    lastYearData: { type: Object, default: () => {} },
    month: { type: Number, required: true },
    presentData: { type: Object, default: () => {} },
    year: { type: String, required: true },
  },

  computed: {
    detachedData() {
      const data = {
        benchmarkPriceDelta: this.presentData?.detached?.benchmarkPriceDeltaMTM,
        benchmarkPriceYtyDelta:
          this.presentData?.detached?.benchmarkPriceDeltaYTY,
        icon: 'detached',
        lastMonthBenchmark: this.lastMonthData?.detached?.benchmarkPrice,
        lastYearBenchmark: this.lastYearData?.detached?.benchmarkPrice,
        maxSquareHeight: 100,
        presentBenchmark: this.presentData?.detached?.benchmarkPrice,
        propertyType:
          this.isEdmonton || this.isVictoria ? 'Single Family' : 'Detached',
        sectionHeight: 300,
      };

      return data;
    },

    semiData() {
      if (this.isCalgary) {
        const data = {
          benchmarkPriceDelta:
            this.presentData?.['semi-detached']?.benchmarkPriceDeltaMTM,
          benchmarkPriceYtyDelta:
            this.presentData?.['semi-detached']?.benchmarkPriceDeltaYTY,
          maxSquareHeight: 75,
          propertyType: 'Semi-Detached',
          lastYearBenchmark:
            this.lastYearData?.['semi-detached']?.benchmarkPrice,
          presentBenchmark: this.presentData?.['semi-detached']?.benchmarkPrice,
          lastMonthBenchmark:
            this.lastMonthData?.['semi-detached']?.benchmarkPrice,
          sectionHeight: 270,
        };

        return data;
      }

      return null;
    },

    rowData() {
      if (this.isCalgary || this.isVictoria) {
        const data = {
          benchmarkPriceDelta: this.presentData?.row?.benchmarkPriceDeltaMTM,
          benchmarkPriceYtyDelta: this.presentData?.row?.benchmarkPriceDeltaYTY,
          lastMonthBenchmark: this.lastMonthData?.row?.benchmarkPrice,
          lastYearBenchmark: this.lastYearData?.row?.benchmarkPrice,
          maxSquareHeight: 50,
          presentBenchmark: this.presentData?.row?.benchmarkPrice,
          propertyType: 'Row',
          sectionHeight: 250,
        };

        return data;
      }

      return null;
    },

    apartmentData() {
      if (this.isCalgary || this.isVancouver || this.isFraserValley) {
        const data = {
          benchmarkPriceDelta:
            this.presentData?.apartment?.benchmarkPriceDeltaMTM,
          benchmarkPriceYtyDelta:
            this.presentData?.apartment?.benchmarkPriceDeltaYTY,
          maxSquareHeight: 25,
          propertyType: 'Apartment',
          lastYearBenchmark: this.lastYearData?.apartment?.benchmarkPrice,
          presentBenchmark: this.presentData?.apartment?.benchmarkPrice,
          lastMonthBenchmark: this.lastMonthData?.apartment?.benchmarkPrice,
          sectionHeight: 230,
        };

        return data;
      }

      return null;
    },

    condoData() {
      if (this.isEdmontonOrWinnipeg || this.isVictoria) {
        const data = {
          benchmarkPriceDelta: this.presentData?.condo?.benchmarkPriceDeltaMTM,
          benchmarkPriceYtyDelta:
            this.presentData?.condo?.benchmarkPriceDeltaYTY,
          icon: 'apartment',
          lastMonthBenchmark: this.lastMonthData?.condo?.benchmarkPrice,
          lastYearBenchmark: this.lastYearData?.condo?.benchmarkPrice,
          maxSquareHeight: 25,
          presentBenchmark: this.presentData?.condo?.benchmarkPrice,
          propertyType: 'Condos',
          sectionHeight: 230,
        };

        return data;
      }

      return {};
    },

    duplexData() {
      if (this.isEdmonton) {
        const data = {
          benchmarkPriceDelta: this.presentData?.duplex?.benchmarkPriceDeltaMTM,
          benchmarkPriceYtyDelta:
            this.presentData?.duplex?.benchmarkPriceDeltaYTY,
          icon: 'row',
          lastMonthBenchmark: this.lastMonthData?.duplex?.benchmarkPrice,
          lastYearBenchmark: this.lastYearData?.duplex?.benchmarkPrice,
          maxSquareHeight: 75,
          presentBenchmark: this.presentData?.duplex?.benchmarkPrice,
          propertyType: 'Duplex Rowhouse',
          sectionHeight: 270,
        };
        return data;
      }

      return {};
    },

    attachedData() {
      const data = {
        benchmarkPriceDelta: this.presentData?.attached?.benchmarkPriceDeltaMTM,
        benchmarkPriceYtyDelta:
          this.presentData?.attached?.benchmarkPriceDeltaYTY,
        icon: 'row',
        lastMonthBenchmark: this.lastMonthData?.attached?.benchmarkPrice,
        lastYearBenchmark: this.lastYearData?.attached?.benchmarkPrice,
        maxSquareHeight: 75,
        presentBenchmark: this.presentData?.attached?.benchmarkPrice,
        propertyType: 'Attached',
        sectionHeight: 270,
      };

      return data;
    },

    townhomeData() {
      if (this.isVancouver || this.isFraserValley) {
        const data = {
          benchmarkPriceDelta:
            this.presentData?.townhome?.benchmarkPriceDeltaMTM,
          benchmarkPriceYtyDelta:
            this.presentData?.townhome?.benchmarkPriceDeltaYTY,
          icon: 'detached',
          lastMonthBenchmark: this.lastMonthData?.townhome?.benchmarkPrice,
          lastYearBenchmark: this.lastYearData?.townhome?.benchmarkPrice,
          maxSquareHeight: 100,
          presentBenchmark: this.presentData?.townhome?.benchmarkPrice,
          propertyType: 'Townhomes',
          sectionHeight: 300,
        };

        return data;
      }

      return null;
    },

    itemData() {
      const calgaryData = [
        this.detachedData,
        this.semiData,
        this.rowData,
        this.apartmentData,
      ];

      const edmontonData = [this.detachedData, this.duplexData, this.condoData];

      const vancouverData = [
        this.detachedData,
        this.townhomeData,
        this.apartmentData,
      ];

      const victoriaData = [this.detachedData, this.condoData, this.rowData];

      const winnipegData = [
        this.detachedData,
        this.attachedData,
        this.condoData,
      ];

      switch (this.routeCity) {
        case 'calgary':
          return calgaryData;
        case 'edmonton':
          return edmontonData;
        case 'victoria':
          return victoriaData;
        case 'winnipeg':
          return winnipegData;
        case 'vancouver':
        case 'fraser-valley':
          return vancouverData;

        default:
          return {};
      }
    },
  },
};
</script>
