
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      'nuxt-i18n',
      {
        defaultLocale: 'en',
        detectBrowserLanguage: false,
        locales: [
          'en',
          'nl'
        ],
        // locales.map(locale => ({
        //   code: locale.code,
        //   iso: locale.code,
        //   name: locale.name
        // })),
        rootRedirect: 'en',
        strategy: 'prefix',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: { 'translation_key': 'My awesome translation' },
            nl: { 'translation_key': 'Mijn toffe vertaling' },
          }
        }
      }
    ]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
