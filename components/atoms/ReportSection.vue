<template>
  <div class="ReportContent" :style="{ height: height }">
    <ReportSectionHeader
      :colors="colors"
      :label="label"
      :margin-bottom="marginBottom"
      :show-legend="showLegend"
      :show-right-label-upper-border="!isFirst"
      :subtitle="subtitle"
      :title="title"
      :website="website"
    />
    <div class="ReportSlot">
      <slot :style="{ marginBottom: `${marginBottom}px` }" />
    </div>
  </div>
</template>

<script>
import ReportSectionHeader from '~/components/molecules/ReportSectionHeader';

export default {
  components: {
    ReportSectionHeader,
  },

  props: {
    colors: { type: Object, required: true },
    height: { type: String, default: '338px' },
    isFirst: { type: Boolean, default: false },
    label: { type: String, required: true },
    marginBottom: { type: String, default: '30' },
    showLegend: { type: Boolean, default: false },
    subtitle: { type: String, required: true },
    title: { type: String, required: true },
    website: { type: String, default: '' },
  },
};
</script>

<style scoped>
.ReportContent {
  display: flex;
  flex-direction: column;
}

.ReportSlot {
  padding: 0 20px;
  height: calc(100% - 76px);
}
</style>
