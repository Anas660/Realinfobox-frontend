<template>
  <div class="col">
    <h4 class="mb-2 text-center">{{ title }}</h4>
    <div class="col">
      <v-text-field
        v-model="row.sold"
        class="mb-2"
        label="Sold"
        outlined
        dense
        hide-details
        type="number"
      />
    </div>
    <div class="col">
      <v-text-field
        v-model="row.newListings"
        class="mb-2"
        label="Active Listings"
        outlined
        dense
        hide-details
        type="number"
      />
    </div>
    <div class="col">
      <v-text-field
        v-model="row.averageSquareFeet"
        class="mb-2"
        label="Average sq ft"
        outlined
        dense
        hide-details
        type="number"
      />
    </div>
    <div class="col">
      <v-text-field
        v-model="row.dom"
        class="mb-2"
        label="Days on Market"
        outlined
        dense
        disabled
        hide-details
        type="number"
      />
    </div>
    <div class="col">
      <v-text-field
        v-model="row.averagePrice"
        class="mb-2"
        label="Average Price"
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
h1 {
  text-align: center;
}
</style>
