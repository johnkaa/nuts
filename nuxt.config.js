export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuts',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/node_modules/swiper/css/swiper.css',
    '@/assets/style/global'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/toast', mode: 'client' },
    { src: '~plugins/select' },
    { src: '~plugins/vee-validate', mode: 'client' },
    { src: '~plugins/uploadImg' },
    '~plugins/db'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // router: {
  //   middleware: ['auth']
  // },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/firebase'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  firebase: {
    config: {
      apiKey: 'AIzaSyD3jYW9w1vZdAw4efW1SzamcRZrsVuUxfc',
      authDomain: 'nuts-ea11b.firebaseapp.com',
      databaseURL: 'https://nuts-ea11b-default-rtdb.firebaseio.com',
      projectId: 'nuts-ea11b',
      storageBucket: 'nuts-ea11b.appspot.com',
      messagingSenderId: '1039641335607',
      appId: '1:1039641335607:web:95c8ebd7b8a5c6e803ecb2',
    },
    initialize: {
      onAuthStateActions: 'onAuthStateChangedAction',
      subcribeManually: false
    },
    ssr: true,
    services: {
      auth: true, // Just as example. Can be any other service.
      database: true,
      storage: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transiple: ['vee-validate']
  },
}
