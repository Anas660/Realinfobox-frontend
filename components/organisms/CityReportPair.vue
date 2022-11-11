<template>
  <div>
    <Report
      :branding="branding"
      :title="name"
      :month="monthString"
      :property-type="propertyType"
      :year="year"
    >
      <MarketStatusRow
        :absorption-rate="absorptionRate"
        :chart-data="marketStatusChartData"
        :colors="colors"
        :is-first="true"
        :listings-count="listingsCount"
        :month="month"
        :name="name"
        :property-type="propertyType"
        :sold-listings="soldListings"
        :year="year"
      />
      <BenchmarkPriceRow
        :benchmark-price="benchmarkPrice"
        :benchmark-price-chart-data="benchmarkPriceChartData"
        :benchmark-price-delta="benchmarkPriceDelta"
        :benchmark-price-yty-delta="benchmarkPriceYtyDelta"
        :colors="colors"
        :month="month"
        :name="name"
        :property-type="propertyType"
        :year="year"
      />
      <BenchmarkPriceTrendRow
        :benchmark-price-yty-delta="benchmarkPriceYtyDelta"
        :chart-data="yearData"
        :colors="colors"
        :is-city="true"
        :name="name"
        :property-type="propertyType"
      />
    </Report>

    <Report
      :branding="branding"
      :title="name"
      :month="month"
      :property-type="propertyType"
      :year="year"
    >
      <ActiveSoldListingsRow
        :active-listings="listingsCount"
        :active-yty-delta="activeYtyDelta"
        :benchmark-price-delta="benchmarkPriceDelta"
        :chart-data="activeSoldChartData"
        :colors="colors"
        :is-first="true"
        :last-month-string="lastMonthString"
        :month="monthString"
        :name="name"
        :property-type="propertyType"
        :sold-listings="soldListings"
        :sold-percent="absorptionRate"
        :sold-yty-delta="soldYtyDelta"
        :year="year"
      />
      <AdomRow
        :colors="colors"
        :dom-data="domData"
        :month-string="monthString"
        :name="name"
        :property-type="propertyType"
        :year="year"
      />
      <MarketDistributionRow
        :colors="colors"
        :market-distribution="marketDistribution"
        :name="name"
        :property-type="propertyType"
        :year="year"
      />
    </Report>
  </div>
</template>

<script>
import ActiveSoldListingsRow from '~/components/organisms/ActiveSoldListingsRow';
import AdomRow from '~/components/organisms/AdomRow';
import BenchmarkPriceRow from '~/components/organisms/BenchmarkPriceRow';
import BenchmarkPriceTrendRow from '~/components/organisms/BenchmarkPriceTrendRow';
import MarketDistributionRow from '~/components/organisms/MarketDistributionRow';
import MarketStatusRow from '~/components/organisms/MarketStatusRow';
import Report from '~/components/organisms/Report';

export default {
  components: {
    ActiveSoldListingsRow,
    AdomRow,
    BenchmarkPriceRow,
    BenchmarkPriceTrendRow,
    MarketDistributionRow,
    MarketStatusRow,
    Report,
  },

  props: {
    branding: { type: Object, required: true },
    data: { type: Array, required: true },
    lastMonthString: { type: String, required: true },
    month: { type: [String, Number], required: true },
    monthString: { type: String, required: true },
    name: { type: String, required: true },
    propertyType: { type: String, required: true },
    year: { type: [String, Number], required: true },
    yearData: { type: Array, required: true },
  },

  computed: {
    colors() {
      const { color1, color2, color3 } = this.branding;

      return {
        color1,
        color2,
        color3,
      };
    },

    latestMonthIndex() {
      return this.data.length - 1;
    },

    absorptionRate() {
      return this.data[this.latestMonthIndex].soldPercent;
    },

    listingsCount() {
      return this.data[this.latestMonthIndex].active;
    },

    soldListings() {
      return this.data[this.latestMonthIndex].sold;
    },

    marketStatusChartData() {
      const chartData = this.data.map(
        ({ soldPercent, unsoldPercent, soldPercentDelta, month, year }) => ({
          soldPercent,
          unsoldPercent,
          soldPercentDelta,
          month,
          year,
        }),
      );

      return chartData;
    },

    benchmarkPrice() {
      return this.data[this.latestMonthIndex].benchmarkPrice;
    },

    benchmarkPriceDelta() {
      return this.data[this.latestMonthIndex].benchmarkPriceDelta;
    },

    benchmarkPriceYtdDelta() {
      return this.data[this.latestMonthIndex].benchmarkPriceYTDDelta;
    },

    benchmarkPriceYtyDelta() {
      return this.data[this.latestMonthIndex].benchmarkPriceYTYDelta;
    },

    activeYtyDelta() {
      return this.data[this.latestMonthIndex].activeYTYDelta;
    },

    soldYtyDelta() {
      return this.data[this.latestMonthIndex].soldYTYDelta;
    },

    benchmarkPriceChartData() {
      const chartData = this.data.map(
        ({ benchmarkPrice, benchmarkPriceDelta, month, year }) => ({
          benchmarkPrice,
          benchmarkPriceDelta,
          month,
          year,
        }),
      );

      return chartData;
    },

    activeSoldChartData() {
      const chartData = this.data.map(
        ({
          active,
          month,
          sold,
          soldPercent,
          soldPercentDelta,
          unsoldPercent,
          year,
        }) => ({
          active,
          month,
          sold,
          soldPercent,
          soldPercentDelta,
          unsoldPercent,
          year,
        }),
      );

      return chartData;
    },

    domData() {
      const data = this.data.map(({ dom, domDelta, year, month }) => ({
        dom,
        domDelta,
        month,
        year,
      }));

      return data;
    },

    marketDistribution() {
      return this.data[this.latestMonthIndex].marketDistribution;
    },
  },
};
</script>
