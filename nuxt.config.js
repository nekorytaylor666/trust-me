export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'trustme',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~layouts/global.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/vue-modal.js', '~/plugins/vuelidate.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas'],
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab'],
          },
        ],
      },
    ],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseUrl: 'http://185.113.134.108/api',
  },
  router: {
    // middleware: ['auth'],
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    parallel: true,
    cache: true,
    extractCSS: process.env.NODE_ENV === 'production',
    optimizeCSS: process.env.NODE_ENV === 'production',
    transpile: ['vue-intersect'],
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: false,
          autoFetch: true,
        },
        endpoints: {
          login: {
            url: 'http://185.113.134.108/api/Account/Login',
            method: 'post',
          },
          register: {
            url: '/Account/Register',
            method: 'post',
          },
          logout: {
            url: '/Account/Logout',
            method: 'post',
          },
          user: {
            url: 'http://185.113.134.108/api/Account/GetUser',
            method: 'get',
          },
        },
      },
    },
  },
};
