<template>
  <div class="ColumnWrapper">
    <div class="Numbers">
      <ReportParagraph
        :bold="true"
        :color="color1"
        class="AmountSold"
        font-size="9.5"
      >
        {{ value }} SOLD
      </ReportParagraph>
      <ReportParagraph
        :color="color2"
        :style="{ borderTop: `2px solid ${color2}` }"
        font-size="9.5"
        text-align="center"
      >
        {{ percent }}%
      </ReportParagraph>
    </div>
    <div
      :style="{
        height: `${columnHeight}%`,
        backgroundColor: color3,
      }"
      class="Column"
    />
  </div>
</template>

<script>
import ReportParagraph from '~/components/atoms/ReportParagraph';

export default {
  components: {
    ReportParagraph,
  },

  props: {
    colors: { type: Object, required: true },
    largestPercentage: { type: Number, required: true },
    percent: { type: Number, required: false, default: null },
    value: { type: Number, required: false, default: null },
  },

  computed: {
    columnHeight() {
      if (this.percent) {
        const columnHeight = (this.percent * 75) / this.largestPercentage;
        return columnHeight;
      }

      return 0;
    },

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
.ColumnWrapper {
  width: 60px;
  display: flex;
  flex-direction: column;
}

.Numbers {
  margin-top: auto;
}

.AmountSold {
  margin-bottom: 35px;
  transform: rotate(-90deg);
}

.Column {
  transform: rotate(180deg);
}
</style>
