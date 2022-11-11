export const state = () => ({
  content: [],
});

export const mutations = {
  CONTENT_SET(state, payload) {
    state.content = payload;
  },
};

export const actions = {
  async getContent({ commit }) {
    try {
      const response = await this.$axios.$get('/content');
      commit('CONTENT_SET', response);
    } catch (error) {
      this.$snack.show('Failed to get content', 'danger');
    }
  },
};
