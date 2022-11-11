<template>
  <div class="col">
    <h4 class="mb-2 text-center">{{ title }}</h4>
    <div class="col">
      <v-text-field
        v-model="row.sold"
        label="Sold"
        outlined
        dense
        hide-details
        type="number"
      />
      <p class="DataSource">Paragon</p>
    </div>
    <div class="col">
      <v-text-field
        v-model="row.active"
        label="Active"
        outlined
        dense
        hide-details
        type="number"
      />
      <p class="DataSource">
        {{ title === $t('reports.edmonton.duplex') ? 'N/A' : 'GeoJet' }}
      </p>
    </div>
    <div class="col">
      <v-text-field
        v-model="row.dom"
        label="Days on Market"
        outlined
        dense
        hide-details
        type="number"
      />
      <p class="DataSource">Paragon</p>
    </div>
    <div class="col">
      <v-text-field
        v-model="row.benchmarkPrice"
        label="Average Price"
        outlined
        dense
        hide-details
        type="number"
      />
      <p class="DataSource">Paragon</p>
    </div>
    <div class="col">
      <v-text-field
        v-model="row.benchmarkPriceYTD"
        label="Average Price YTD"
        outlined
        dense
        hide-details
        type="number"
      />
      <p class="DataSource">Paragon</p>
    </div>
  </div>
</template>

<script>
import _isEqual from 'lodash/isEqual';
export default {
  props: {
    dataSourceLabel: { type: String, default: 'Paragon' },
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

.DataSource {
  text-align: right;
  margin: 0;
}
</style>
