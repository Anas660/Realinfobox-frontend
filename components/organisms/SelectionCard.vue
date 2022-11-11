<template>
  <div class="mt-12 rounded-small bg-white shadow-lg">
    <OptionSection label="Selected" :value="selectedProperty" />
    <OptionSection
      label="Month"
      :value="lastAvailableMonth(formatCityName(selectedCity))"
    />
    <div class="align-center mt-5 flex flex-col justify-center">
      <outlined-button
        v-if="hasFullReport"
        :disabled="!selectedProperty"
        :to="fullReportPath"
        text="Full Report"
      />
      <outlined-button
        :disabled="!selectedProperty"
        :to="socialReportPath"
        text="Social Report"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import OutlinedButton from '~/components/atoms/OutlinedButton';
import OptionSection from '../molecules/OptionSection.vue';

export default {
  components: {
    OutlinedButton,
    OptionSection,
  },

  props: {
    fullReportPath: { type: String, required: true },
    hasFullReport: { type: Boolean, required: true },
    socialReportPath: { type: String, required: true },
    selectedProperty: { type: String, default: '' },
    month: { type: String, required: true },
  },

  computed: {
    ...mapGetters({
      selectedCity: 'reports/selectedCity',
      lastAvailableMonth: 'reports/getLastAvailable',
    }),
  },

  watch: {
    selectedCity() {
      this.dispatchLoadLastAvailable();
    },
  },

  created() {
    this.dispatchLoadLastAvailable();
  },

  methods: {
    dispatchLoadLastAvailable() {
      this.$store.dispatch('reports/loadLastAvailable', {
        city: this.formatCityName(this.selectedCity),
      });
    },

    formatCityName(name) {
      let formattedName = name.toLowerCase();

      if (formattedName === 'fraser valley') {
        formattedName = 'fraser-valley';
      }

      return formattedName;
    },
  },
};
</script>
