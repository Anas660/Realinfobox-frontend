<template>
  <div
    class="Report"
    :style="{ border: `2px solid ${branding.color2}`, width: `${width}px` }"
  >
    <ReportBranding
      v-if="!hideBranding"
      :branding="branding"
      :max-width="width"
    />
    <ReportTitle
      :as-of="`${asOfMonth} ${year}`"
      :color1="branding.color1"
      :color2="branding.color2"
      :color3="branding.color3"
      :label="title.toUpperCase()"
      :property-type="propertyType"
    />
    <slot />
    <ReportFooter :background="branding.color2" />
  </div>
</template>

<script>
import ReportBranding from '~/components/molecules/ReportBranding';
import ReportFooter from '~/components/molecules/ReportFooter';
import ReportTitle from '~/components/molecules/ReportTitle';

export default {
  components: { ReportBranding, ReportTitle, ReportFooter },
  props: {
    branding: { type: Object, required: true },
    hideBranding: { type: Boolean, default: false },
    month: { type: [String, Number], required: true },
    propertyType: { type: String, required: true },
    title: { type: String, required: true },
    width: { type: Number, default: 990 },
    year: { type: [String, Number], required: true },
  },

  computed: {
    asOfMonth() {
      return this.$options.filters.month(this.month - 1);
    },
  },
};
</script>

<style scoped>
.Report {
  margin-bottom: 60px;
  page-break-after: always;
  page-break-inside: avoid;
}
</style>
