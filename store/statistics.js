export const state = () => ({
  clients: [],
  demos: [],
  products: [],
  logs: [],
  userLogs: [],
  user: null,
  pending: false,
});

export const mutations = {
  CLIENTS_SET(state, { clients }) {
    state.clients = clients;
  },
  DEMOS_SET(state, { demos }) {
    state.demos = demos;
  },
  PRODUCTS_SET(state, { products }) {
    state.products = products;
  },
  SET_LOADING(state, { isLoading }) {
    state.pending = isLoading;
  },
  LOGS_SET(state, { logs }) {
    state.logs = logs;
  },
  USER_LOGS_SET(state, { logs, user }) {
    state.userLogs = logs;
    state.user = user;
  },
  CLEAR(state) {
    const initialState = {
      clients: [],
      demos: [],
      products: [],
      logs: [],
      userLogs: [],
      user: null,
      pending: false,
    };

    Object.assign(state, initialState);
  },
};

export const actions = {
  async getClientsStatistics({ commit }, query) {
    try {
      commit('SET_LOADING', { isLoading: true });
      const { type, ...params } = query;
      const response = await this.$axios.$get('statistics/clients', {
        params,
      });

      commit('CLIENTS_SET', response);
      commit('SET_LOADING', { isLoading: false });
    } catch (error) {
      this.$snack.show('Failed to load clients', 'danger');
    }
  },

  async getDemosStatistics({ commit }, query) {
    try {
      commit('SET_LOADING', { isLoading: true });
      const { type, ...params } = query;
      const response = await this.$axios.$get('statistics/demos', {
        params,
      });

      commit('DEMOS_SET', response);
      commit('SET_LOADING', { isLoading: false });
    } catch (error) {
      this.$snack.show('Failed to load products', 'danger');
    }
  },

  async getProductsStatistics({ commit }, query) {
    try {
      commit('SET_LOADING', { isLoading: true });
      const { type, ...params } = query;
      const response = await this.$axios.$get('statistics/products', {
        params,
      });

      commit('PRODUCTS_SET', response);
      commit('SET_LOADING', { isLoading: false });
    } catch (error) {
      this.$snack.show('Failed to load products', 'danger');
    }
  },
  async clear({ commit }) {
    commit('CLEAR');
  },
  async getLogs({ commit }, query) {
    try {
      commit('SET_LOADING', { isLoading: true });
      const { type, ...params } = query;
      const response = await this.$axios.$get('statistics/logs', {
        params,
      });

      commit('LOGS_SET', response);
      commit('SET_LOADING', { isLoading: false });
    } catch (error) {
      this.$snack.show('Failed to load logs', 'danger');
    }
  },
  async getUserLogs({ commit }, query) {
    try {
      commit('SET_LOADING', { isLoading: true });

      const { type, ...params } = query;

      const response = await this.$axios.$get('statistics/user-logs', {
        params,
      });

      commit('USER_LOGS_SET', response);

      commit('SET_LOADING', { isLoading: false });
    } catch (error) {
      this.$snack.show('Failed to load logs', 'danger');
    }
  },
};
