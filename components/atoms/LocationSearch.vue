<template>
  <div>
    <v-autocomplete
      :items="locations"
      item-text="name"
      return-object
      label="Search a location"
      placeholder="Search location"
      prepend-icon="mdi-magnify"
      :disabled="disabled"
      @input="navigateToPage"
    >
      <template #selection="data">
        <div class="d-flex">
          <div class="mr-2">
            {{ data.item.name }}
          </div>
          <div class="hint">
            {{ data.item.type }}
          </div>
        </div>
      </template>
      <template #item="data">
        <div class="d-flex">
          <div class="mr-2">
            {{ data.item.name }}
          </div>
          <div class="hint">
            {{ data.item.type }}
          </div>
        </div>
      </template>
    </v-autocomplete>
  </div>
</template>

<script>
import structureMixin from '~/mixins/structureMixin';
export default {
  mixins: [structureMixin],
  props: {
    searchCity: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    areaName() {
      return this.$route.params.areaId;
    },
    regionName() {
      return this.$route.params.regionId;
    },
    sublocName() {
      return this.areaName || this.regionName;
    },
    locations() {
      return this.locationArray(this.searchCity);
    },
  },
  methods: {
    navigateToPage(location) {
      const { city, name, type, parentName, parentType } = location;
      const escapedName = encodeURIComponent(name);
      let route = `/market-reports/${city}`;
      let typePlural = type + 's';

      if (type === 'city' && !parentType) {
        typePlural = 'cities';
        route = '/market-reports';
      } else {
        if (city === 'calgary') {
          if (parentType === 'region') {
            route += `/regions/${parentName}`;
          } else if (type !== 'community') {
            route += `/${typePlural}`;
          } else {
            route += '/areas/' + parentName;
          }
        }

        if (city === 'edmonton') {
          if (type === 'city') {
            route += '/cities';
          } else if (parentType === 'zone') {
            route += `/areas/${this.areaName}/zones/${parentName}`;
          } else if (type === 'community' && parentName === 'Edmonton') {
            route += '/communities';
          } else if (type === 'community' && parentName !== 'Edmonton') {
            route += '/cities/' + parentName;
          } else if (type === 'zone') {
            route += `/areas/${parentName}/zones`;
          } else {
            route += `/${typePlural}`;
          }
        }
        route += '?only=' + escapedName;
      }

      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.ActivatorWrapper {
  display: flex;
  align-items: center;
  height: 48px;
  width: 100%;
}
</style>
