import { normalize } from '~/vuex/utils';
import { Cities, Products } from '~/vuex/schema';
import _camelCase from 'lodash/camelCase';

export const state = () => ({
  cities: {},
  products: {},
  blockSets: [],
  publishNotification: '',
  templates: {},
  demoDrips: [],
});

export const mutations = {
  CITIES_SET(state, { cities }) {
    state.cities = cities;
  },
  PRODUCTS_SET(state, { products }) {
    state.products = products;
  },
  BLOCK_SETS_SET(state, payload) {
    state.blockSets = payload;
  },
  PUBLISH_NOTIFICATION_SET(state, payload) {
    state.publishNotification = payload;
  },
  EMAIL_TEMPLATE_SET(state, { templateName, template, subject }) {
    const name = _camelCase(templateName);

    this._vm.$set(state.templates, name, {
      template,
      subject,
    });
  },
  DEMO_DRIPS_SET(state, payload) {
    state.demoDrips = payload;
  },
};

export const actions = {
  async loadCities({ commit }, { isPublic }) {
    try {
      const response = await this.$axios.$get(
        `${isPublic ? '/public' : ''}/config/cities`,
      );
      const { entities } = normalize(response, Cities);

      commit('CITIES_SET', entities);
    } catch (error) {
      this.$snack.show('Failed to load cities', 'danger');
    }
  },

  async loadProducts({ commit }) {
    try {
      const response = await this.$axios.$get('/products');
      const { entities } = normalize(response, Products);

      commit('PRODUCTS_SET', entities);
      return true;
    } catch (error) {
      this.$snack.show('Failed to load products', 'danger');
    }
  },

  async addCity(_, payload) {
    try {
      await this.$axios.$post('/config/cities', payload);
      // commit('CITIES_SET', response);
    } catch (error) {
      this.$snack.show('Failed to add a city', 'danger');
    }
  },

  async loadBlockSets({ commit }) {
    try {
      const response = await this.$axios.$get('/config/block-sets');
      commit('BLOCK_SETS_SET', response);
    } catch (error) {
      this.$snack.show('Failed to load block sets', 'danger');
    }
  },

  async loadPublishNotification({ commit }) {
    try {
      const response = await this.$axios.$get('/config/publish-notification');
      commit('PUBLISH_NOTIFICATION_SET', response);
    } catch (error) {
      this.$snack.show('Failed to load publish notification', 'danger');
    }
  },

  setCitiesArray({ commit }, cities) {
    const { entities } = normalize(cities, Cities);

    commit('CITIES_SET', entities);
  },

  async loadDemoDrips({ commit }) {
    try {
      const response = await this.$axios.$get('/drips');
      response.forEach(demoDrip => {
        demoDrip.attributes['city_name'] =
          this.state.config.cities[demoDrip.attributes['city_id']].attributes[
            'name'
          ];
      });
      commit('DEMO_DRIPS_SET', response);
    } catch (error) {
      this.$snack.show('Failed to load demo drips sets', 'danger');
    }
  },

  async loadEmailTemplate({ commit }, { templateName }) {
    try {
      const { template, subject } = await this.$axios.$get(
        '/config/templates/' + templateName,
      );
      commit('EMAIL_TEMPLATE_SET', { templateName, template, subject });
    } catch (error) {
      this.$snack.show('Failed to load the email template', 'danger');
    }
  },

  async saveEmailTemplate({ commit }, { templateName, email, subject }) {
    try {
      const result = await this.$axios.$post(
        '/config/templates/' + templateName,
        {
          template: email,
          subject,
        },
      );
      commit('EMAIL_TEMPLATE_SET', {
        templateName,
        template: result.template,
        subject: result.subject,
      });
    } catch (error) {
      this.$snack.show('Failed to save the email template', 'danger');
    }
  },
};

export const getters = {
  citiesArray(state) {
    if (!state.cities) return [];
    return Object.values(state.cities);
  },
  productsArray(state) {
    if (!state.products) return [];
    return Object.values(state.products);
  },
};
