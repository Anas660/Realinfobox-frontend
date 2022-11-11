<template>
  <div class="NewsletterMarketStatusRow">
    <div class="NewsletterMarketStatusText">
      <ReportParagraph :color="branding.color2" font-size="18">
        We are currently in a
      </ReportParagraph>
      <ReportParagraph
        bold
        class="MarketStatusValue"
        :color="branding.color1"
        font-size="34"
      >
        {{ marketType | uppercase }} MARKET
      </ReportParagraph>
      <ReportParagraph :color="branding.color2" font-size="18">
        As of {{ month | month }} {{ year }}, we had
        {{ formattedData.activeTotal | commify }} listings.
      </ReportParagraph>
      <ReportParagraph :color="branding.color2" font-size="18">
        {{ formattedData.soldTotal | commify }} listings were sold in
        {{ month | month }} {{ year }}.
      </ReportParagraph>
    </div>
    <div class="ChartContainer">
      <ReportParagraph
        class="Moi"
        :color="branding.color2"
        font-size="15"
        :style="{ borderColor: branding.color2 }"
      >
        Listing Absorption Rate
      </ReportParagraph>
      <div class="InventoryArrow" :style="{ left: arrowTransformationCoef }">
        <ReportParagraph
          text-align="center"
          font-size="17"
          :color="branding.color2"
        >
          {{ presentData.listingAbsp.toFixed(1) }}%
        </ReportParagraph>
        <NewsletterArrowDown class="Arrow" />
      </div>
      <div class="Axes">
        <div
          class="Seller Rectangle"
          :style="{ backgroundColor: branding.color1 }"
        />
        <div
          class="Balanced Rectangle"
          :style="{ backgroundColor: branding.color2 }"
        />
        <div
          class="Buyer Rectangle"
          :style="{ backgroundColor: branding.color3 }"
        />
      </div>
      <div class="Numbers">
        <ReportParagraph
          v-for="num in numbers"
          :key="num"
          :color="branding.color3"
        >
          {{ `${num}%` }}
        </ReportParagraph>
      </div>
      <div class="Legend">
        <ReportParagraph :color="branding.color2" font-size="16">
          Buyer's<br />market
        </ReportParagraph>
        <ReportParagraph
          class="BalancedMarket"
          :color="branding.color2"
          font-size="16"
        >
          Balanced<br />market
        </ReportParagraph>
        <ReportParagraph
          class="BuyerMarket"
          :color="branding.color2"
          font-size="16"
        >
          Seller's<br />market
        </ReportParagraph>
      </div>
    </div>
  </div>
</template>

<script>
import ReportParagraph from '~/components/atoms/ReportParagraph';
import NewsletterArrowDown from '~/components/svgIcons/newsletter-report-icons/NewsletterArrowDown';
export default {
  components: {
    ReportParagraph,
    NewsletterArrowDown,
  },

  props: {
    presentData: { type: Object, default: () => {} },
    month: { type: Number, required: true },
    year: { type: [String, Number], required: true },
  },

  computed: {
    arrowTransformationCoef() {
      const absorptionCoef = this.listingAbsp > 100 ? 100 : this.listingAbsp;

      return `calc(${absorptionCoef}% - 7%)`;
    },

    isEdmonton() {
      return this.$route.params.cityName === 'edmonton';
    },

    isVictoria() {
      return this.$route.params.cityName === 'victoria';
    },

    branding() {
      return this.$store.state.reports.branding;
    },

    numbers() {
      return Array.from({ length: 11 }, (_, k) => (0 + k) * 10);
    },

    formattedData() {
      if (this.isEdmonton || this.isVictoria) {
        const { residential } = this.presentData;

        return {
          activeTotal: residential.active,
          soldTotal: residential.sold,
        };
      }

      return this.presentData;
    },
    listingAbsp() {
      return this.presentData.listingAbsp;
    },

    marketType() {
      let marketType = 'Unknown';

      if (this.listingAbsp < 30) {
        marketType = "Buyer's";
      } else if (this.listingAbsp >= 30 && this.listingAbsp <= 50) {
        marketType = 'Balanced';
      } else {
        marketType = "Seller's";
      }

      return marketType;
    },
  },
};
</script>

<style scoped lang="scss">
.InventoryArrow {
  position: absolute;
  top: 27px;
  display: flex;
  flex-direction: column;
}
.Moi {
  position: absolute;
  top: 5px;
  right: 10px;
  border-bottom: 1px solid;
}
.Legend {
  display: flex;
  justify-content: center;

  p {
    margin-top: 5px;
  }

  .BalancedMarket {
    margin-left: 23%;
  }

  .BuyerMarket {
    margin-left: auto;
  }
}

.Numbers {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
}

.NewsletterMarketStatusRow {
  display: flex;
  height: 240px;
}

.NewsletterMarketStatusText {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 45%;
  padding: 20px 0 30px 40px;
}

.MarketStatusValue {
  margin: 5px 0 10px 0;
}

.ChartContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 52%;
  padding: 0 10px;
}

.Axes {
  display: flex;
  width: 100%;
  margin-top: 35px;
}

.Chart {
  width: 100%;
  height: 50px;
}

.Rectangle {
  height: 27px;
  margin-right: 5px;
}

.Seller {
  flex: 0.3;
}

.Balanced {
  flex: 0.2;
}

.Buyer {
  flex: 0.5;
}
</style>
