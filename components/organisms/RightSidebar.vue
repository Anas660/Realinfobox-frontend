<template>
  <div
    :class="`
    ${isCollapsed ? 'w-12' : 'w-56'}
    ${isCollapsed ? 'p-0' : 'p-3 pb-0'}
    d-flex
    flex-col overflow-hidden bg-alabaster pb-10 transition-all`"
  >
    <div
      v-if="isCollapsed"
      class="d-flex mt-auto w-full cursor-pointer justify-center"
    >
      <div @click="toggleIsCollapsed">
        <CollapseNavIcon />
      </div>
    </div>

    <div v-else class="d-flex h-full flex-col">
      <p class="ml-auto text-sm text-black opacity-10">v.{{ version }}</p>
      <div
        class="d-flex mb-4 items-center border-0 border-b border-solid border-creole border-opacity-20 px-2 pb-5"
      >
        <user-circle-icon class="mr-1" wi />
        <p class="zero-text text-sm text-tapa">
          {{ userName }}
        </p>
      </div>
      <div class="mx-1">
        <div class="d-flex items-center">
          <p class="mr-4 text-sm text-creole opacity-20">City</p>
          <v-select
            v-if="isAdmin"
            v-model="selectedCityModel"
            class="custom"
            :items="cities"
            dense
            append-icon="mdi-chevron-down"
          />
          <p v-else class="margin-0 ml-[20px] text-sm capitalize text-tapa">
            {{ selectedCity }}
          </p>
        </div>
      </div>

      <portal-target class="mt-5" name="reportSelection" />

      <div
        class="d-flex mt-auto mb-2 cursor-pointer"
        @click="toggleIsCollapsed"
      >
        <CollapseNavIcon class="rotate-[53deg] cursor-pointer" />
        <p class="m-0 pl-3 text-sm">Collapse</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import RolesMixin from '~/mixins/auth';

import UserCircleIcon from '~/components/svgIcons/UserCircleIcon';
import CollapseNavIcon from '~/components/svgIcons/CollapseNavIcon';

export default {
  components: { UserCircleIcon, CollapseNavIcon },

  mixins: [RolesMixin],

  data() {
    return {
      isCollapsed: true,
    };
  },

  computed: {
    cities() {
      return [
        'Calgary',
        'Edmonton',
        'Fraser Valley',
        'Vancouver',
        'Victoria',
        'Winnipeg',
      ];
    },

    path() {
      return this.$route.path;
    },

    selectedCityModel: {
      get() {
        return this.selectedCity;
      },
      set(val) {
        this.setSelectedCity(val);
      },
    },

    version() {
      return process.env.VERSION;
    },

    ...mapGetters({
      selectedCity: 'reports/selectedCity',
    }),
  },

  watch: {
    path() {
      const shouldExpand =
        this.path.includes('market-reports') && !this.path.includes('settings');

      this.isCollapsed = !shouldExpand;
    },
  },

  created() {
    this.isAdmin
      ? this.setSelectedCity(this.cities[0])
      : this.setSelectedCity(this.me.attributes.city_name);
  },

  methods: {
    toggleIsCollapsed() {
      this.isCollapsed = !this.isCollapsed;
    },

    setSelectedCity(city) {
      this.$store.commit('reports/SET_SELECTED_CITY', city);
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
.custom {
  font-size: 13px !important;
}

.zero-text {
  margin: 0 !important;
}
</style>
