const title = 'Nuxt.js project starter template'
const description = 'This is Nuxt.js project starter template.'
const uri = 'https://xxxx/'
const target = 'static' // server or static

export default {
  /*
   ** --------------------------------------------------
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   ** --------------------------------------------------
   */
  mode: 'universal',
  /*
   ** --------------------------------------------------
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   ** --------------------------------------------------
   */
  target,
  /*
   ** --------------------------------------------------
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   ** --------------------------------------------------
   */
  head: {
    title,
    titleTemplate: '%s |' + ' ' + title,
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:site_name', property: 'og:site_name', content: title },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:url', property: 'og:url', content: uri },
      { hid: 'og:title', property: 'og:title', content: title },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: uri + 'images/ogp.png',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** --------------------------------------------------
   ** Global CSS and Sass
   ** --------------------------------------------------
   */
  css: ['ress', '~/assets/scss/base.scss'],
  /*
   ** --------------------------------------------------
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   ** --------------------------------------------------
   */
  plugins: ['~/plugins/axios'],
  /*
   ** --------------------------------------------------
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   ** --------------------------------------------------
   */
  components: true,
  /*
   ** --------------------------------------------------
   ** Nuxt.js dev-modules
   ** --------------------------------------------------
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
    '@nuxtjs/date-fns',
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/style-resources',
  ],
  /**
   * Nuxt Optimized Images
   * See: https://marquez.co/docs/nuxt-optimized-images/?ref=aceforth
   */
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true,
  },
  /*
   ** Style Resources module configuration
   ** See https://www.npmjs.com/package/@nuxtjs/style-resources
   */
  styleResources: {
    scss: ['~/assets/scss/system.scss'],
  },
  /*
   ** --------------------------------------------------
   ** Nuxt.js modules
   ** --------------------------------------------------
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** dotenv module configuration
   */
  dotenv: {
    path: process.cwd(),
  },
  env: {
    API_KEY: process.env.API_KEY,
    BASE_URI: process.env.BASE_URI,
  },
  /*
   ** --------------------------------------------------
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   ** --------------------------------------------------
   */
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
    filenames: {
      app: ({ isDev }) => (isDev ? '[name].[hash].js' : '[chunkhash].js'),
      chunk: ({ isDev }) => (isDev ? '[name].[hash].js' : '[chunkhash].js'),
    },
  },
}
