<template>
  <div class="MarketDistibutionTable">
    <template v-if="loading">
      <v-progress-circular indeterminate color="primary" />
    </template>
    <template v-else>
      <v-btn class="mb-3 mb-5 mt-5" color="success" x-small @click="addRange">
        <v-icon left> mdi-plus </v-icon>
        Add row
      </v-btn>
      <div
        v-for="(row, index) in marketDistro"
        :key="index"
        class="row no-gutters"
      >
        <div class="col">
          <v-text-field
            v-model="row.rangeFrom"
            label="lower boundary"
            placeholder="200"
            outlined
            dense
            hide-details
            type="number"
          />
        </div>
        <div v-for="prop in propertyTypes" :key="prop" class="col">
          <v-text-field
            v-model="row[prop]"
            :label="prop"
            outlined
            dense
            hide-details
            type="number"
          />
        </div>
        <div class="col-auto">
          <v-btn small icon color="danger" @click="removeRange(index)">
            <v-icon> mdi-close </v-icon>
          </v-btn>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import _isEqual from 'lodash/isEqual';
import _debounce from 'lodash/debounce';
export default {
  props: {
    value: { type: Array, default: () => [] },
    propertyTypes: { type: Array, default: () => [] },
    loading: { type: Boolean, default: false },
  },

  data() {
    return {
      marketDistro: [],
    };
  },

  watch: {
    value: {
      handler(newVal, oldVal) {
        if (!_isEqual(newVal, oldVal)) {
          this.marketDistro = newVal;
        }
      },

      deep: true,
    },

    marketDistro: {
      handler: _debounce(function (newVal) {
        const ordered = [...newVal].sort((a, b) => a.rangeFrom - b.rangeFrom);
        this.$emit('input', ordered);
      }, 1500),
      deep: true,
    },
  },

  methods: {
    addRange() {
      this.marketDistro.unshift({ rangeFrom: null });
    },

    removeRange(index) {
      this.marketDistro.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.MarketDistibutionTable {
  .row {
    margin-bottom: 8px;
    .col,
    .col-auto {
      padding-top: 0;
      padding-bottom: 0;
      padding-right: 8px;
    }
  }
}
</style>
