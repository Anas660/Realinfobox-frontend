<template>
  <v-select
    v-model="selectedCity"
    :items="citiesSelect"
    :rules="rules"
    :disabled="isLoading || disabled"
    return-object
    label="Select a city..."
  />
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: {
    value: {
      type: [String, Object],
      default: null,
    },
    loadCities: {
      type: Boolean,
      default: true,
    },
    returnObject: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      rules: [v => !!v || 'Select a city'],
      selectedCity: null,
    };
  },
  computed: {
    ...mapGetters({
      citiesArray: 'config/citiesArray',
    }),
    cities: {
      get() {
        return this.citiesArray;
      },
      set(newCities) {
        this.$store.dispatch('config/setCitiesArray', newCities);
      },
    },
    citiesSelect() {
      return this.cities.map(city => ({
        text: city.attributes.name,
        value: city.id,
        name: city.attributes.name.toLowerCase(),
      }));
    },
  },
  watch: {
    value: {
      handler(newVal, oldVal) {
        if (newVal === oldVal) {
          return;
        }

        if (!this.returnObject) {
          const found = this.citiesSelect.find(city => {
            return city.value === newVal || city.id === newVal;
          });
          if (found) {
            this.selectedCity = found;
          }
        } else {
          this.selectedCity = newVal;
        }
      },
    },
    selectedCity: {
      handler(newVal) {
        if (newVal) {
          this.$emit(
            'input',
            newVal.value !== undefined ? newVal.value : newVal,
          );
        }
      },
      immediate: true,
      deep: true,
    },
  },
  created() {
    if (!this.cities.length && this.loadCities) {
      this.$store.dispatch('config/loadCities', {});
    }
    this.selectedCity = this.value;
  },
};
</script>
