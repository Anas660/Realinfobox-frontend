<template>
  <div class="Wrapper">
    <ReportParagraph
      :color="isForSale ? color2 : color1"
      class="ListingCount"
      font-size="33"
    >
      {{ listingCount | commify }}
    </ReportParagraph>
    <div class="ListingInfo">
      <div class="ListingInfoLabels">
        <ReportParagraph :color="color2" font-size="14">
          {{ (month - 1) | month('short') }} {{ year }}
        </ReportParagraph>
        <ReportParagraph :color="isForSale ? color2 : color1" font-size="16">
          {{ isForSaleText }}
        </ReportParagraph>
        <ReportParagraph :color="isForSale ? color2 : color1" font-size="11">
          Listings
        </ReportParagraph>
      </div>

      <ForSaleIcon v-if="isForSale" :colors="colors" class="Icon" />
      <SoldIcon v-else :colors="colors" class="Icon" />
    </div>

    <ArrowData
      :colors="colors"
      :height="arrowDataHeight"
      :text="monthToMonthText"
      :value="listingMonthDelta"
      font-family="Open Sans"
      title="Month to Month"
    />
    <ArrowData
      :colors="colors"
      :height="arrowDataHeight"
      :show-border="false"
      :text="yearToYearText"
      :value="listingYearDelta"
      font-family="Open Sans"
      title="Year to Year"
    />
  </div>
</template>

<script>
import ArrowData from '~/components/molecules/ArrowData';
import ForSaleIcon from '~/components/svgIcons/ForSaleIcon';
import ReportParagraph from '~/components/atoms/ReportParagraph';
import SoldIcon from '~/components/svgIcons/SoldIcon';

export default {
  components: {
    ArrowData,
    ForSaleIcon,
    ReportParagraph,
    SoldIcon,
  },

  props: {
    arrowDataHeight: { type: String, default: 'auto' },
    colors: { type: Object, required: true },
    isForSale: { type: Boolean, required: true },
    listingCount: { type: Number, default: null },
    listingMonthDelta: { type: Number, default: null },
    listingYearDelta: { type: Number, default: null },
    month: { type: [String, Number], required: true },
    year: { type: [String, Number], required: true },
  },

  computed: {
    isForSaleText() {
      return this.isForSale ? 'ACTIVE' : 'SOLD';
    },

    color1() {
      return this.colors.color1;
    },

    color2() {
      return this.colors.color2;
    },

    monthToMonthText() {
      const isJanuary = this.month === 1;
      const year = isJanuary ? this.year - 1 : this.year;
      const text = this.getText(this.listingMonthDelta);

      return `${text} from ${this.prevMonthString} ${year}`;
    },

    yearToYearText() {
      let text = this.getText(this.listingYearDelta);
      return `${text} from ${this.monthString} ${this.year - 1}`;
    },

    monthString() {
      return this.$options.filters.month(this.month - 1, 'short');
    },
    prevMonthString() {
      return this.$options.filters.prevMonth(this.month - 1, 'short');
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
          return `Up ${value}%`;
        case 'down':
          return `Down ${value}%`;
        case 'nochange':
          return 'No Change';

        default:
          return 'N/A';
      }
    },
  },
};
</script>

<style scoped>
.Wrapper {
  display: flex;
  flex-direction: column;
  width: 47%;
}

.ListingCount {
  border-bottom: 2px solid black;
}

.ListingInfo {
  display: flex;
  margin-bottom: 20px;
}

.ListingInfoLabels {
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-bottom: 10px;
}

.Icon {
  height: 50px;
  margin-top: 5px;
}
</style>
