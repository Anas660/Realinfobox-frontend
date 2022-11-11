export const state = () => ({
  drips: [],
});

export const mutations = {
  DRIPS_SET(state, payload) {
    state.drips = payload;
  },
};

export const actions = {
  async getDrips({ commit }) {
    try {
      const response = await this.$axios.$get('/drips');
      commit('DRIPS_SET', response);
    } catch (error) {
      this.$snack.show('Failed to set drips', 'danger');
    }
  },
};
