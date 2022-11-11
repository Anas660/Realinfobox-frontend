export default function ({ app, store }) {
  if (!(app.$auth.user.roles.admin || app.$auth.user.roles.editor)) {
    store.commit('ui/SNACKBAR_SHOW', {
      color: 'error',
      message: 'Forbidden',
    });
    app.router.replace('/');
  }
}
