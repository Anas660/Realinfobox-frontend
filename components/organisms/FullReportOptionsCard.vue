<template>
  <div class="rounded-small bg-white shadow-lg">
    <OptionSection :value="cityName" label="Selected" />
    <OptionSection
      label="Month"
      :value="lastAvailableMonth(formatCityName(selectedCity))"
    />

    <div class="d-flex mb-3.5 flex-col pt-4">
      <section class="mb-4 border-0 border-b border-solid border-swissCoffee">
        <p class="m-0 pl-4 text-sm font-semibold text-creole">Type of house</p>
        <v-radio-group
          class="mt-2 pl-4"
          :value="selectedProperty"
          column
          @change="$emit('propertyTypeChange', $event)"
        >
          <v-radio
            v-for="propertyType in propertyTypes"
            :key="propertyType"
            :value="propertyType"
          >
            <template #label>
              <p class="m-0 text-sm">
                {{ $t(`reports.${city}.${propertyType}`) }}
              </p>
            </template>
          </v-radio>
        </v-radio-group>
      </section>

      <section class="pl-4 pb-2">
        <p class="mb-2 text-sm font-semibold text-creole">Get report</p>
        <outlined-button
          class="mx-auto w-full"
          text="Download PDF"
          :disabled="buttonDisabled"
          @onClick="$emit('onDownloadPdfClick')"
        />
        <outlined-button
          class="mx-auto w-full"
          text="Show PDF"
          :disabled="buttonDisabled"
          @onClick="$emit('onShowPdfClick')"
        />
        <outlined-button
          v-clipboard:copy="previewUrl"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
          class="mx-auto w-full"
          text="Copy link"
          :disabled="buttonDisabled"
        />
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import RolesMixin from '~/mixins/auth';

import OutlinedButton from '~/components/atoms/OutlinedButton';
import OptionSection from '~/components/molecules/OptionSection';

export default {
  components: {
    OutlinedButton,
    OptionSection,
  },

  mixins: [RolesMixin],

  props: {
    city: { type: String, required: true },
    cityName: { type: String, required: true },
    previewUrl: { type: String, required: true },
    buttonDisabled: { type: Boolean, default: false },
    propertyTypes: { type: Array, required: true },
    selectedProperty: { type: String, required: true },
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
    onCopy: function () {
      this.$snack.show('Copied to clipboard', 'success');
    },

    onError: function () {
      this.$snack.show('Failed to copy', 'danger');
    },

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
