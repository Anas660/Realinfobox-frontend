export const state = () => ({
  isLoading: false,
  users: [],
  usersCount: 0,
  usersNextToken: [null],
  demoUsers: [],
  demoUsersNextToken: [null],
  demoUsersCount: 0,
});

export const mutations = {
  USERS_SET(state, payload) {
    const tokens = payload.init ? [null] : state.usersNextToken;

    if (payload.lastEvaluatedKey)
      tokens[payload.page] = payload.lastEvaluatedKey;

    state.users = payload.data;
    state.usersNextToken = [...tokens];
    state.isLoading = false;

    if (payload.total) {
      state.usersCount = payload.total;
    }
  },
  DEMO_USERS_SET(state, payload) {
    const tokens = payload.init ? [null] : state.demoUsersNextToken;

    if (payload.lastEvaluatedKey)
      tokens[payload.page] = payload.lastEvaluatedKey;

    state.demoUsers = payload.data;
    state.demoUsersNextToken = [...tokens];
    state.isLoading = false;

    if (payload.total) {
      state.demoUsersCount = payload.total;
    }
  },
  SET_LOADING(state) {
    state.isLoading = !state.isLoading;
  },
  USERS_SET_COUNT(state, payload) {
    state.usersCount = payload.count;
  },
  USERS_SET_DEMO_COUNT(state, payload) {
    state.demoUsersCount = payload.count;
  },
};

export const actions = {
  async getUsers({ commit }, query) {
    commit('SET_LOADING');

    const { type, page, init, ...params } = query;

    try {
      const response = await this.$axios.$get('/users', {
        params: params,
      });

      commit('USERS_SET', { ...response, init: init, page: page });
    } catch (error) {
      this.$snack.show('Failed to get users', 'danger');
    }
  },
  async getUsersCount({ commit }, query) {
    try {
      const response = await this.$axios.$get('/users/count', {
        params: { userType: query.userType },
      });
      commit('USERS_SET_COUNT', response);
    } catch (error) {
      this.$snack.show('Failed to get users count', 'warning');
    }
  },
  async getDemoUsers({ commit }, query) {
    commit('SET_LOADING');

    const { type, init, page, ...params } = query;

    try {
      const response = await this.$axios.$get('/users', {
        params: params,
      });

      commit('DEMO_USERS_SET', { ...response, init: init, page: page });
    } catch (error) {
      this.$snack.show('Failed to set demo users', 'danger');
    }
  },

  async getDemoUsersCount({ commit }) {
    try {
      const response = await this.$axios.$get('/users/count', {
        params: { userType: 'demo' },
      });

      commit('USERS_SET_DEMO_COUNT', response);
    } catch (error) {
      this.$snack.show('Failed to get users count', 'danger');
    }
  },
};
