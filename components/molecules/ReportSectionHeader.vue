<template>
  <div class="Wrapper" :style="{ marginBottom: `${marginBottom}px` }">
    <ReportLeftLabel :colors="colors" :label="label" />
    <div v-if="showLegend" class="Legend">
      <div class="RowOne">
        <div class="Rectangle">
          <div :style="{ background: color1 }" />
          <div :style="{ background: color2 }" />
        </div>
        <ReportParagraph :color="color2">
          % of homes SOLD out of active listings
        </ReportParagraph>
      </div>

      <div class="RowTwo">
        <div class="Rectangle" :style="{ background: color3 }" />
        <ReportParagraph :color="color2">
          % of UNSOLD, EXPIRED & TERMINATED Listings
        </ReportParagraph>
      </div>
    </div>

    <div class="Right">
      <ReportParagraph
        v-if="website"
        :color="colors.color3"
        :style="{ margin: 'auto 15px auto auto' }"
        font-size="14.5"
      >
        {{ website }}
      </ReportParagraph>

      <ReportRightLabel
        :colors="colors"
        :title="title"
        :subtitle="subtitle"
        :website="website"
        :show-right-label-upper-border="showRightLabelUpperBorder"
      />
    </div>
  </div>
</template>

<script>
import ReportLeftLabel from '~/components/atoms/ReportLeftLabel';
import ReportParagraph from '~/components/atoms/ReportParagraph';
import ReportRightLabel from '~/components/atoms/ReportRightLabel';

export default {
  components: {
    ReportLeftLabel,
    ReportParagraph,
    ReportRightLabel,
  },

  props: {
    colors: { type: Object, required: true },
    label: { type: String, required: true },
    marginBottom: { type: [String, Number], default: '30' },
    showRightLabelUpperBorder: { type: Boolean, default: false },
    showLegend: { type: Boolean, default: false },
    subtitle: { type: String, required: true },
    title: { type: String, required: true },
    website: { type: String, default: '' },
  },

  computed: {
    color1() {
      return this.colors.color1;
    },

    color2() {
      return this.colors.color2;
    },

    color3() {
      return this.colors.color3;
    },
  },
};
</script>

<style scoped>
.Wrapper {
  display: flex;
  height: 43px;
}

.Right {
  display: flex;
  margin-left: auto;
}

.Legend {
  display: flex;
  flex-direction: column;
  margin-left: 7px;
  justify-content: center;
}

.RowOne,
.RowTwo {
  display: flex;
  align-items: center;
}

.Rectangle {
  display: flex;
  width: 30px;
  height: 9px;
  margin-right: 5px;
}

.Rectangle div {
  width: 50%;
}
</style>
