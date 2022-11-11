<template>
  <div ref="yearColumns" class="Chart" :style="{ width: `${chartWidth}%` }">
    <div class="Columns">
      <ActiveSoldColumn
        v-for="(item, index) in data"
        :key="item.year + item.month"
        :style="{ marginLeft: !index ? 0 : `${columnMargin}px` }"
        :active="item.active"
        :colors="colors"
        :largest-listing="largestListing"
        :sold-percent="item.soldPercent"
        :sold-delta="item.soldDelta"
        :sold="item.sold"
        :unsold-percent="item.unsoldPercent"
        :month="item.month"
      />
    </div>

    <BorderedText :color="color2" :hide-border="hideBorder" :value="year" />
  </div>
</template>

<script>
import ActiveSoldColumn from '~/components/molecules/ActiveSoldColumn';
import BorderedText from '~/components/atoms/BorderedText';

export default {
  components: {
    ActiveSoldColumn,
    BorderedText,
  },

  props: {
    colors: { type: Object, required: true },
    data: { type: Array, required: true },
    largestListing: { type: Number, required: true },
    year: { type: [String, Number], required: true },
  },

  data() {
    return {
      columnMargin: 0,
    };
  },

  computed: {
    color2() {
      return this.colors.color2;
    },

    chartWidth() {
      const columnCount = this.data.length;
      const maxColumnCount = 13;

      return (100 * columnCount) / maxColumnCount;
    },

    hideBorder() {
      return this.data.length === 1;
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.calcColumnMargin();
    });
  },
  methods: {
    calcColumnMargin() {
      const columnWidth = 31;
      const columnCount = this.data.length;
      const yearColumns = this.$refs.yearColumns;
      if (!yearColumns) return 0;
      const yearWidth = yearColumns.clientWidth;
      const columnSpace = yearWidth / columnCount;
      this.columnMargin = columnSpace - columnWidth;
    },
  },
};
</script>

<style scoped>
.Chart {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.Columns {
  display: flex;
  height: 100%;
}
</style>
