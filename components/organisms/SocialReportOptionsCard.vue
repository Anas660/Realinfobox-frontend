<template>
  <div class="rounded-small bg-white shadow-lg">
    <OptionSection label="Selected" :value="selectedProperty" />
    <OptionSection
      label="Month"
      :value="lastAvailableMonth(formatCityName(selectedCity))"
    />
    <div class="d-flex mb-3.5 flex-col">
      <section
        class="mb-3 border-0 border-b border-solid border-swissCoffee px-4 pt-3"
      >
        <p class="m-0 mb-3 text-sm font-semibold text-creole">Sections</p>
        <v-checkbox
          v-model="showBanner"
          class="m-0 h-[47px] p-0"
          label="Banner"
          :disabled="buttonDisabled"
        />
        <v-checkbox
          v-model="showMarketStatus"
          class="m-0 h-[47px] p-0"
          label="Market status"
          :disabled="buttonDisabled"
        />
        <v-checkbox
          v-model="showBenchmark"
          class="m-0 h-[47px] p-0"
          label="Benchmark Price"
          :disabled="buttonDisabled"
        />
        <v-checkbox
          v-model="showActiveSold"
          class="m-0 h-[47px] p-0"
          label="Active/Sold"
          :disabled="buttonDisabled"
        />
        <v-checkbox
          v-model="showAdom"
          class="m-0 h-[47px] p-0"
          label="ADOM"
          :disabled="buttonDisabled"
        />
      </section>
      <section class="pl-4 pb-5">
        <p class="m-0 pb-3 text-sm font-semibold text-creole">Get report</p>
        <outlined-button
          class="mx-auto"
          text="Download PNG"
          :disabled="buttonDisabled"
          @onClick="$emit('onClick')"
        />
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import OutlinedButton from '~/components/atoms/OutlinedButton';
import OptionSection from '../molecules/OptionSection';

export default {
  components: {
    OutlinedButton,
    OptionSection,
  },

  props: {
    buttonDisabled: { type: Boolean, default: false },
    selectedProperty: { type: String, default: '' },
  },

  computed: {
    ...mapGetters({
      selectedCity: 'reports/selectedCity',
      lastAvailableMonth: 'reports/getLastAvailable',
    }),

    showBanner: {
      get() {
        return this.$store.state.completeSocialReportConfigurator.showBanner;
      },
      set(value) {
        this.$store.commit(
          'completeSocialReportConfigurator/SET_SHOW_BANNER',
          value,
        );
      },
    },
    showMarketStatus: {
      get() {
        return this.$store.state.completeSocialReportConfigurator
          .showMarketStatus;
      },
      set(value) {
        this.$store.commit(
          'completeSocialReportConfigurator/SET_SHOW_MARKET_STATUS',
          value,
        );
      },
    },
    showBenchmark: {
      get() {
        return this.$store.state.completeSocialReportConfigurator.showBenchmark;
      },
      set(value) {
        this.$store.commit(
          'completeSocialReportConfigurator/SET_SHOW_BENCHMARK',
          value,
        );
      },
    },
    showActiveSold: {
      get() {
        return this.$store.state.completeSocialReportConfigurator
          .showActiveSold;
      },
      set(value) {
        this.$store.commit(
          'completeSocialReportConfigurator/SET_SHOW_ACTIVE_SOLD',
          value,
        );
      },
    },
    showAdom: {
      get() {
        return this.$store.state.completeSocialReportConfigurator.showAdom;
      },
      set(value) {
        this.$store.commit(
          'completeSocialReportConfigurator/SET_SHOW_ADOM',
          value,
        );
      },
    },
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

<style scoped>
.boa {
  height: 45px;
}
</style>
