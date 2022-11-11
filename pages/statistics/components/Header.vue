<template>
  <div class="d-flex justify-content-between align-items-center my-4">
    <div>
      <slot name="left">
        <span class="headline">
          {{ title }}
        </span>
      </slot>
    </div>
    <div>
      <slot name="right">
        <v-select
          :items="years"
          label="Select year"
          :value="selectedYear"
          @input="handleYearChange"
        ></v-select>
      </slot>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  props: {
    title: { type: String, default: '' },
  },
  data() {
    return {
      years: [2022],
      selectedYear: new Date().getFullYear(),
    };
  },
  computed: {
    actionButtonVisible() {
      return this.actionButtonText || this.actionButtonIcon;
    },
  },
  created() {
    const currentYear = new Date().getFullYear() + 1;

    const range = _.range(2022, currentYear);

    this.years = range;
  },
  methods: {
    handleYearChange(year) {
      this.selectedYear = year;
      this.$emit('handleYearChange', year);
    },
  },
};
</script>

<style></style>
