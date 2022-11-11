<template>
  <div class="col">
    <h4 class="h-12 text-center">{{ title }}</h4>
    <div class="col mt-5">
      <v-text-field
        v-model="row.active"
        label="Active listings"
        class="font-small mb-2"
        outlined
        dense
        hide-details
        type="number"
      />
    </div>
    <div class="col">
      <v-text-field
        v-model="row.sold"
        :label="isFraserValley ? 'Sales' : 'Sold'"
        class="font-small mb-2"
        outlined
        dense
        hide-details
        type="number"
      />
    </div>
    <div class="col">
      <v-text-field
        v-model="row.dom"
        class="font-small mb-2"
        label="Days on Market"
        outlined
        dense
        hide-details
        type="number"
      />
    </div>
    <div class="col">
      <v-text-field
        v-model="row.benchmarkPrice"
        :label="`${hasBenchmarkPriceLabel ? 'Benchmark' : 'Average'} Price`"
        class="font-small mb-2"
        outlined
        dense
        hide-details
        type="number"
      />
    </div>
  </div>
</template>

<script>
import _isEqual from 'lodash/isEqual';
export default {
  props: {
    city: { type: String, default: 'edmonton' },
    rowData: { type: Object, default: () => {} },
    title: { type: String, default: '' },
  },

  data() {
    return {
      row: {},
    };
  },

  computed: {
    isFraserValley() {
      return this.city === 'fraserValley';
    },

    hasBenchmarkPriceLabel() {
      return (
        this.city.toLowerCase() === 'victoria' ||
        this.city.toLowerCase() === 'winnipeg' ||
        this.isFraserValley
      );
    },
  },

  watch: {
    rowData: {
      handler(newVal, oldVal) {
        if (_isEqual(newVal, oldVal)) {
          return;
        }

        if (newVal) {
          this.row = newVal;
        }
      },
      deep: true,
      immediate: true,
    },

    row: {
      handler(newVal) {
        const data = {};
        Object.keys(newVal).forEach(key => {
          data[key] =
            newVal[key] || newVal[key] === 0 ? parseInt(newVal[key]) : null;
        });

        this.$emit('update-type', data);
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.font-small {
  font-size: 14px !important;
}
</style>
