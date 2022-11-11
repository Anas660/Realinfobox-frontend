const defaultSnack = {
  color: '',
  message: '',
  timeout: 5000,
};

export const state = () => ({
  snackbar: defaultSnack,
});

export const mutations = {
  SNACKBAR_SHOW(state, payload) {
    state.snackbar = {
      ...state.snackbar,
      ...payload,
    };
  },
};

export const actions = {
  async snack() {
    try {
      ///
    } catch (error) {
      this.$snack.show(error, 'danger');
    }
  },
};
