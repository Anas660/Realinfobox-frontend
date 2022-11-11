<template>
  <div class="Wrapper">
    <ReportParagraph
      :color="colors.color2"
      :style="{ borderBottom: `2px solid black` }"
      class="Value"
      font-size="30"
    >
      {{ listingCount | commify }}
    </ReportParagraph>
    <div class="BottomContent">
      <div class="Labels">
        <ReportParagraph :color="colors.color2">
          {{ monthString }} {{ year }}
        </ReportParagraph>
        <ReportParagraph :color="labelColor" font-size="12">
          {{ isActive ? 'ACTIVE' : 'SOLD' }}
        </ReportParagraph>
        <ReportParagraph :color="labelColor" font-size="9">
          LISTINGS
        </ReportParagraph>
      </div>
      <ForSaleIcon v-if="isActive" :colors="colors" :height="45" />
      <SoldIcon v-else :colors="colors" :height="45" />
    </div>
  </div>
</template>

<script>
import ForSaleIcon from '~/components/svgIcons/ForSaleIcon';
import ReportParagraph from '~/components/atoms/ReportParagraph';
import SoldIcon from '~/components/svgIcons/SoldIcon';

export default {
  components: {
    ForSaleIcon,
    ReportParagraph,
    SoldIcon,
  },

  props: {
    colors: { type: Object, required: true },
    isActive: { type: Boolean, default: true },
    listingCount: { type: [String, Number], required: true },
    month: { type: [String, Number], required: true },
    year: { type: [String, Number], required: true },
  },

  computed: {
    labelColor() {
      return this.isActive ? this.colors.color2 : this.colors.color1;
    },

    monthString() {
      return this.$options.filters.month(this.month - 1, 'short');
    },
  },
};
</script>

<style scoped>
.Wrapper {
  display: flex;
  flex-direction: column;
  margin-right: 15px;
}

.BottomContent {
  display: flex;
  margin-top: 3px;
}

.Labels {
  margin-right: 15px;
}
</style>
