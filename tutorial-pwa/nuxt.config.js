module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'tutorial-pwa',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'tutorial project of PWA'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    '@nuxtjs/pwa'
  ],
  manifest: {
    name: 'Tutorial-PWA',
    lang: 'ja',
    short_name: 'Tutorial',
    title: 'Tutorial-PWA',
    'og:title': 'Tutorial-PWA',
    description: 'Tutorial-PWA',
    'og:description': 'Tutorial-PWA',
    theme_color: '#ffffff',
    background_color: '#ffffff'
  },
  workbox: {
    dev: true,
  }
}
