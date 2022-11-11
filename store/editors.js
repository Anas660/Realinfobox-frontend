export const state = () => ({
  editors: [],
});

export const mutations = {
  EDITORS_SET(state, payload) {
    state.editors = payload;
  },
};

export const actions = {
  async getEditors({ commit }) {
    try {
      const response = await this.$axios.$get('/editors');
      commit('EDITORS_SET', response);
    } catch (error) {
      this.$snack.show(error, 'danger');
    }
  },
};
