export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  srcDir: 'src/',
  server:{
    port: 8000,
    host:'0.0.0.0'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-base',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css', '~/assets/css/reset.css', '@fortawesome/fontawesome-svg-core/styles.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src:'~/services/plugin/CsrPlugins.js',
      ssr:false
    },
    {
      src:'~/services/plugin/SsrPlugins.js',
      ssr:true
    },
    '~/services/plugin/ServiceInjection.js'

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome'
  ],

  fontawesome: {
    icons: {
      solid: true,
      regular:true,
      light:true,
      duotone:true,
      brands:true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/dayjs'
  ],
  dayjs:{
    locale:['ko'],
    defaultLocale:'ko'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    proxy:true,
    baseURL: 'http://localhost:8080',
    init(axios,ctx){
      axios.defaults.xsrfHeaderName = 'X-CSRF-TOKEN',
      axios.defaults.headers = { csrf: 'user_auth_token' }
    }
  },
  proxy:{
    '/admin' : 'http://localhost:8080'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS:true
  },
  generate:{
    fallback: 'index.html'
  }
}
