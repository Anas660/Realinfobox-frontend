export default function (ctx) {
  const { app, route } = ctx;
  if (app.$auth.user) {
    const roles = app.$auth.user.roles;
    const hasNewsletter = app.$auth.user.allows.includes('newsletter');
    const hasReports = app.$auth.user.allows.includes('reports');
    if (route.path === '/') {
      if (roles.user) {
        if (hasNewsletter || roles.demo) {
          app.router.push('/campaigns');
        } else if (hasReports) {
          app.router.push('/market-reports');
        }
        return;
      } else if (roles.editor || roles.admin) {
        app.router.push('/clients');
        return;
      }
    }
  }
}
