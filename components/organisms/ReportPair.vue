<template>
  <div>
    <portal :to="`marketStatus-${propertyType}`">
      <MarketStatusRow
        :data="data"
        :colors="colors"
        :is-first="true"
        :name="name"
        :city-name="cityName"
        :property-type="propertyType"
      />
    </portal>
    <portal :to="`benchmarkPrice-${propertyType}`">
      <BenchmarkPriceRow
        :data="data"
        :colors="colors"
        :name="name"
        :city-name="cityName"
        :property-type="propertyType"
        :website="branding.website"
      />
    </portal>
    <portal :to="`benchmarkPriceTrend-${propertyType}`">
      <BenchmarkPriceTrendRow
        :data="yearData"
        :colors="colors"
        :name="name"
        :city-name="cityName"
        :is-city="isCity"
        :property-type="propertyType"
        :website="branding.website"
      />
    </portal>
    <portal :to="`benchmarkPriceTrendCity-${propertyType}`">
      <BenchmarkPriceTrendRow
        :colors="colors"
        :data="cityYears"
        :is-city="true"
        :name="cityName"
        :city-name="cityName"
        :property-type="propertyType"
        :website="branding.website"
      />
    </portal>
    <portal :to="`activeSold-${propertyType}`">
      <ActiveSoldListingsRow
        :data="data"
        :colors="colors"
        :is-first="true"
        :name="name"
        :city-name="cityName"
        :property-type="propertyType"
        :website="branding.website"
      />
    </portal>
    <portal :to="`absorptionRate-${propertyType}`">
      <ListingAbsorptionRateRow
        :data="data"
        :colors="colors"
        :name="name"
        :city-name="cityName"
        :property-type="propertyType"
        :website="branding.website"
      />
    </portal>
    <portal :to="`adom-${propertyType}`">
      <AdomRow
        :colors="colors"
        :data="data"
        :name="name"
        :city-name="cityName"
        :property-type="propertyType"
        :website="branding.website"
      />
    </portal>
    <portal :to="`marketDistribution-${propertyType}`">
      <MarketDistributionRow
        :data="data"
        :colors="colors"
        :market-distribution="
          lastMonthData ? lastMonthData.marketDistribution : []
        "
        :name="name"
        :city-name="name"
        :property-type="propertyType"
        :year="year"
        :website="branding.website"
      />
    </portal>
    <template v-if="isCity">
      <Report
        :id="`reportOne/${propertyType}`"
        :branding="branding"
        :title="name"
        :month="month"
        :property-type="propertyType"
        :year="year"
      >
        <portal-target :name="`marketStatus-${propertyType}`" />
        <portal-target :name="`benchmarkPrice-${propertyType}`" />
        <portal-target :name="`benchmarkPriceTrend-${propertyType}`" />
      </Report>

      <Report
        :id="`reportTwo/${propertyType}`"
        :branding="branding"
        :title="name"
        :month="month"
        :property-type="propertyType"
        :year="year"
      >
        <portal-target :name="`activeSold-${propertyType}`" />
        <portal-target :name="`adom-${propertyType}`" />
        <portal-target :name="`marketDistribution-${propertyType}`" />
      </Report>
    </template>

    <template v-else>
      <Report
        :id="`reportOne/${propertyType}`"
        :branding="branding"
        :title="name"
        :month="month"
        :property-type="propertyType"
        :year="year"
      >
        <portal-target :name="`benchmarkPrice-${propertyType}`" />
        <portal-target :name="`benchmarkPriceTrend-${propertyType}`" />
        <portal-target :name="`benchmarkPriceTrendCity-${propertyType}`" />
      </Report>

      <Report
        :id="`reportTwo/${propertyType}`"
        :branding="branding"
        :title="name"
        :month="month"
        :property-type="propertyType"
        :year="year"
      >
        <portal-target :name="`activeSold-${propertyType}`" />
        <portal-target :name="`absorptionRate-${propertyType}`" />
        <portal-target :name="`adom-${propertyType}`" />
      </Report>
    </template>
  </div>
</template>

<script>
import ActiveSoldListingsRow from '~/components/organisms/ActiveSoldListingsRow';
import AdomRow from '~/components/organisms/AdomRow';
import BenchmarkPriceRow from '~/components/organisms/BenchmarkPriceRow';
import BenchmarkPriceTrendRow from '~/components/organisms/BenchmarkPriceTrendRow';
import ListingAbsorptionRateRow from '~/components/organisms/ListingAbsorptionRateRow';
import MarketDistributionRow from '~/components/organisms/MarketDistributionRow';
import MarketStatusRow from '~/components/organisms/MarketStatusRow';
import Report from '~/components/organisms/Report';

export default {
  components: {
    ActiveSoldListingsRow,
    AdomRow,
    BenchmarkPriceRow,
    BenchmarkPriceTrendRow,
    ListingAbsorptionRateRow,
    MarketDistributionRow,
    MarketStatusRow,
    Report,
  },
  props: {
    branding: { type: Object, required: true },
    cityYears: { type: Array, required: true },
    data: { type: Array, required: true },
    isCity: { type: Boolean, default: false },
    month: { type: [String, Number], required: true },
    name: { type: String, required: true },
    cityName: { type: String, required: true },
    propertyType: { type: String, required: true },
    year: { type: [String, Number], required: true },
    yearData: { type: Array, required: true },
  },
  computed: {
    latestMonthIndex() {
      return this.data.length - 1;
    },

    lastMonthData() {
      return this.data[this.data.length - 1];
    },

    colors() {
      const { color1, color2, color3 } = this.branding;

      return {
        color1,
        color2,
        color3,
      };
    },
  },
};
</script>
