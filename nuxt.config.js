require('dotenv').config();

const appConfig = {
  stage: process.env.NODE_ENV === 'development' ? 'dev' : 'prod',
  apiUrl: process.env.API_URL,
};

const fs = require('fs');
const packageJson = fs.readFileSync('./package.json');
const version = JSON.parse(packageJson).version || 0;

import colors from 'vuetify/lib/util/colors';

export default {
  ssr: false,
  server: {
    port: 3000, // default: 3000
  },
  generate: {
    fallback: true,
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'RealInfoBox',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Your Reality Info partner',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap',
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  pageTransition: {
    name: 'page',
    mode: 'out-in',
  },

  /*
   ** Global CSS
   */
  css: [
    // 'element-ui/lib/theme-chalk/index.css',
    '~/assets/scss/main.scss',
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // '@/plugins/element-ui',
    '@/plugins/axios',
    { src: '~plugins/filters', ssr: false },
    { src: '~plugins/ckeditor.js', ssr: false },
    { src: '~plugins/helpers.js', ssr: false },
    { src: '~plugins/vue-clipboard.js', ssr: false },
    { src: '~plugins/mq.js' },
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/gtm',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/style-resources',
    '@nuxtjs/vuetify',
    '@nuxtjs/sentry',
    '@nuxtjs/dotenv',
    'portal-vue/nuxt',
    'nuxt-i18n',
  ],

  gtm: {
    id: 'GTM-W4Z3NFK',
  },

  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    display: 'swap',
    families: {
      Poppins: {
        wght: [400, 600],
      },
    },
  },

  env: {
    BASE_URL: appConfig.apiUrl,
    VERSION: version,
  },

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: appConfig.apiUrl,
  },

  router: {
    middleware: ['auth'],
  },

  auth: {
    // See https://auth.nuxtjs.org/
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/auth/login',
            method: 'post',
            propertyName: 'access_token',
          },
          user: {
            url: '/auth/me',
            method: 'get',
            propertyName: false,
          },
          logout: false,
        },
        tokenRequired: true,
        tokenType: 'Bearer',
      },
    },
    redirect: {
      login: '/login',
      logout: '/login',
      home: '/',
    },
    watchLoggedIn: true,
  },

  vuetify: {
    treeshake: true,
    theme: {
      dark: false,
      themes: {
        light: {
          dark: colors.grey.darken3,
          primary: colors.deepOrange.base,
        },
      },
    },
  },

  i18n: {
    locales: [{ code: 'en', iso: 'en-US', file: 'en.json' }],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: '~/i18n/',
    vueI18n: {
      fallbackLocale: 'en',
    },
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],

    babel: {
      compact: true,
    },
  },
  sentry: {
    dsn: 'https://f17bd372c0f74a19a968a0b73fcc42a3@o258837.ingest.sentry.io/2121469',
    tracing: {
      tracesSampleRate: 1.0,
      vueOptions: {
        tracing: true,
        tracingOptions: {
          hooks: ['mount', 'update'],
          timeout: 2000,
          trackComponents: true,
        },
      },
      browserOptions: {},
    },
    config: {
      environment: appConfig.stage,
      debug: appConfig.stage !== 'prod',
    },
    disableServerSide: true,
    disableClientSide: appConfig.stage !== 'prod',
  },
};
