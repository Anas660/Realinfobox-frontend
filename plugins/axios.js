export default function ({ $axios, app, store, redirect }) {
  $axios.onResponseError(async error => {
    // if(error.response.status === 500) {
    //   redirect('/sorry');
    // }

    let originalRequest = error.config;
    // login challenge
    if (error.response.data.code === 'LoginChallenge') {
      store.commit('authLocal/LOGIN_CHALLENGE_SET', error.response.data.challenge_parameters);
      app.router.push('/new-password');
      return;
    }

    if (error.response && error.response.data.error) {
      const errorCode = error.response.data.error.code;
      switch (errorCode) {
        case 'AccessTokenExpired':
          // try to refresh
          const localRefreshToken = app.$auth.getRefreshToken(app.$auth.$storage.state.strategy);
          if (localRefreshToken) {
            try {
              const refreshResponse = await $axios.$post('/auth/login/refresh', {
                refresh_token: localRefreshToken.replace('Bearer ', ''),
              });

              app.$auth.setToken(app.$auth.$storage.state.strategy, 'Bearer ' + refreshResponse.access_token);
              $axios.setHeader('Authorization', 'Bearer ' + refreshResponse.access_token);
              // app.$auth.setRefreshToken(app.$auth.$storage.state.strategy, 'Bearer ' + refreshResponse.refresh_token);
              originalRequest.headers['Authorization'] = `Bearer ${refreshResponse.access_token}`;

              originalRequest.__isRetryRequest = true;
              return await $axios(originalRequest);
            } catch (error) {
              app.$auth.logout();

              app.$nextTick(() => {
                app.router.push('/login');
              });
            }
          }

          break;

        default:
          break;
      }
    }
    throw error.response.data.error;
  });

  $axios.onResponse(response => {
    if (response) {
      const { url, method } = response.config;
      if (url === '/auth/login' && method === 'post' && response.status === 200) {
        // on login we need to manually save the refresh token
        app.$auth.setRefreshToken(app.$auth.$storage.state.strategy, `Bearer ${response.data.refresh_token}`);
      }
    }
    return response;
  });

  $axios.onRequest(config => {
    const impersonatedId = store.state.authLocal.impersonatedId;
    if (impersonatedId) {
      const aid = `aid=${impersonatedId}`;
      if (config.url.includes('?')) config.url = config.url.replace('?', `?${aid}&`);
      else config.url += `?${aid}`;
    }
  });
}
