export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  mode: 'universal',
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
  css: ['~/assets/css/global.css', '~/assets/css/tailwind.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/vue-modal.js',
    '~/plugins/vuelidate.js',
    '~/plugins/vue-mask.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-fontawesome',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],
  fontawesome: {
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
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'http://185.113.134.108/api',
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
            url: '/Account/Login',
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
            url: '/Account/GetUser',
            method: 'get',
          },
        },
      },
      facebook: {
        endpoints: {
          userInfo:
            'https://graph.facebook.com/v6.0/me?fields=id,name,picture{url}',
        },
        clientId: '3413817302069694',
        scope: ['public_profile', 'email'],
      },
      google: {
        clientId:
          '282480388228-qegfu2a7k0ocgikhmgehiuubcs20r5hd.apps.googleusercontent.com',
      },
    },
  },
  tailwindcss: {
    cssPath: '~assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
  },
  purgeCSS: {
    enabled: false,
  },
};
