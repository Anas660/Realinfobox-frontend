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
          class="select-date"
          :items="selectedDates"
          :value="selectedDate"
          label="Select Month"
          @input="handleDateChange"
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
      selectedDates: [],
      selectedDate: null,
    };
  },
  computed: {
    actionButtonVisible() {
      return this.actionButtonText || this.actionButtonIcon;
    },
  },
  created() {
    this.selectedDate = `${new Date().getFullYear()}-${
      new Date().getMonth() + 1
    }`;

    const datesToSelect = [];
    const years = this.getYears();

    years.forEach(year => {
      const months = this.getMonths(year);

      months.map(month => {
        datesToSelect.push(`${year}-${month}`);
      });
    });

    this.selectedDates = datesToSelect;
  },
  methods: {
    handleDateChange(year) {
      this.selectedYear = year;
      this.$emit('handleDateChange', year);
    },
    getYears() {
      return _.range(2022, new Date().getFullYear() + 1).reverse();
    },
    getMonths(year) {
      if (year === new Date().getFullYear()) {
        const startMonth = year === 2022 ? 8 : 1;
        return _.range(startMonth, new Date().getMonth() + 2).reverse();
      } else {
        return _.range(1, 13).reverse();
      }
    },
  },
};
</script>

<style></style>
