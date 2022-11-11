export const state = () => ({
  loginChallenge: null,
  refresh: false,
  impersonatedId: null,
});

export const mutations = {
  LOGIN_CHALLENGE_SET(state, payload) {
    state.loginChallenge = payload;
  },
  REFRESH_SET(state, payload) {
    state.refresh = payload;
  },
  IMPERSONATED_ID_SET(state, payload) {
    state.impersonatedId = payload;
  },
};

export const actions = {
  activateImpersonation({ commit }, id) {
    try {
      localStorage.setItem('aid', id);
      commit('IMPERSONATED_ID_SET', id);
    } catch (error) {
      this.$snack.show('Failed to activate the impersonation', 'danger');
    }
  },
  deactivateImpersonation({ commit }) {
    this.$snack.show('Impersonation stopped', 'info');
    localStorage.removeItem('aid');
    commit('IMPERSONATED_ID_SET', undefined);
  },
};
