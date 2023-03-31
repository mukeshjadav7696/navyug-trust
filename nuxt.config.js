export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Navyug Vidyabhavan Trust',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Hammersmith+One&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap' },
    ],
    script: [
      {
        src: "https://kit.fontawesome.com/e272688bb1.js",
        crossorigin: "anonymous",
        async: true
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/style.scss',
    '@/assets/css/style.css',
    '@/assets/scss/swiper.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '@/plugins/swiper-plugin.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/pwa',
    '@nuxtjs/moment',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],

  axios: {
    proxy: false // Can be also an object with default options
  },

  proxy: {
    // '/api/': 'https://app.ckpcet.ac.in/',
    '/api/': {
      target: 'https://app.ckpcet.ac.in/',
      pathRewrite: { '^/api/': '' }
    },
    '/app-img/': {
      target: 'https://app.ckpcet.ac.in/',
      pathRewrite: { '^/app-img/': '' }
    },
    changeOrigin: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  pwa: {
    manifest: {
      name: 'Navyug Vidyabhavan Trust',
      short_name: 'Navyug Trust',
      description: 'Navyug Vidyabhavan Trust',
      start_url: '/',
      display: 'standalone',
      background_color: '#000000',
      theme_color: '#033B77',
      lang: 'en',
      useWebmanifestExtension: false
    }
  },
  server: {
    port: 3002, // default: 3000
  },
}
