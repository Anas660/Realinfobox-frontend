export const state = () => ({
  selectedCity: 'City of Calgary',
  reports: [],

  branding: {
    agentPhotoUrl: null,
    backgroundUrl: null,
    bannerHeight: 200,
    customBannerUrl: null,
    color1: '#df5326',
    color2: '#575757',
    color3: '#afafaf',
    company: 'My Company',
    email: 'my@email.com',
    name: 'My Name',
    phone: '123456789',
    title: 'Bc.',
    website: 'www.my-web.com',
  },
  calgary: {
    lastAvailable: null,
    structure: null,
  },
  edmonton: {
    lastAvailable: null,
    structure: null,
  },
  'fraser-valley': {
    lastAvailable: null,
    structure: null,
  },
  vancouver: {
    lastAvailable: null,
    structure: null,
  },
  victoria: {
    lastAvailable: null,
    structure: null,
  },
  winnipeg: {
    lastAvailable: null,
    structure: null,
  },
  isStructureLoading: false,
  brandingLoaded: false,
});

export const mutations = {
  SET_SELECTED_CITY(state, payload) {
    state.selectedCity = payload;
  },

  BRANDING_SET(state, payload) {
    state.branding = payload;
  },
  BRANDING_LOADED_SET(state, payload) {
    state.brandingLoaded = payload;
  },
  STRUCTURE_SET(state, { city, payload }) {
    state[city].structure = {
      ...state[city].structure,
      ...payload,
    };
  },
  LAST_AVAILABLE_SET(state, { city, date }) {
    state[city.toLowerCase()].lastAvailable = date;
  },
  STRUCTURE_LOADING_SET(state, payload) {
    state.isStructureLoading = payload;
  },
};

export const actions = {
  async loadBranding({ commit }) {
    try {
      const response = await this.$axios.$get('/reports/branding');
      commit('BRANDING_SET', response);
      commit('BRANDING_LOADED_SET', true);
    } catch (error) {
      commit('BRANDING_LOADED_SET', false);
      this.$snack.show('Unable to load the report branding', 'danger');
    }
  },

  async loadStructure({ commit }, { city }) {
    try {
      commit('STRUCTURE_LOADING_SET', true);
      const response = await this.$axios.$get(`/reports/${city}/structure`);
      commit('STRUCTURE_SET', {
        city,
        payload: response,
      });
    } catch (error) {
      this.$snack.show('Failed to load structure', 'error');
    } finally {
      commit('STRUCTURE_LOADING_SET', false);
    }
  },

  async loadLastAvailable({ commit }, { city }) {
    try {
      const { date } = await this.$axios.$get(
        `/reports/${city.toLowerCase()}/last-available`,
      );

      commit('LAST_AVAILABLE_SET', { city, date });
    } catch (error) {
      this.$snack.show('Unable to load last available data', 'error');
    }
  },

  async setLastAvailable({ commit }, { city, date }) {
    try {
      const response = await this.$axios.$post(
        `/reports/${city}/last-available`,
        {
          date,
        },
      );

      commit('LAST_AVAILABLE_SET', { city, date: response.date });
      this.$snack.show('Last visible report set OK', 'success');
    } catch (error) {
      this.$snack.show('Unable to load report', 'danger');
    }
  },
};

export const getters = {
  selectedCity: state => state.selectedCity,

  isStructureLoading: state => state.isStructureLoading,

  locationSubarray: state => (cityName, locationName) => {
    const structure = state[cityName]?.structure;
    if (!structure) {
      return null;
    }

    let found = false;
    found = structure.regions.find(({ name }) => name === locationName);

    if (found) {
      return found;
    }

    for (const area of [...structure.regions, ...structure.areas]) {
      if (area.name === locationName) {
        return area.areas || area.communities;
      }
    }
  },

  locationArray: state => cityName => {
    const struc = state[cityName]?.structure;
    if (!struc) {
      return [];
    }

    const locations = [];
    const flatten = (level, parentType = null, parentName = null) => {
      locations.push({
        name: level.name,
        type: level.type,
        city: cityName,
        parentName,
        parentType,
      });

      Object.values(level).forEach(val => {
        if (Array.isArray(val)) {
          val.forEach(item => flatten(item, level.type, level.name));
        }
      });
    };

    flatten(struc);
    return locations;
  },

  getLastAvailable: state => cityName => {
    let lastAvail = state[cityName].lastAvailable;
    return lastAvail;
  },
};
