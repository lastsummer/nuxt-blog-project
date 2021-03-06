const bodyParser = require('body-parser')
const axios = require('axios')

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
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
     '@nuxtjs/axios'
  ],
  axios:{
    baseURL: process.env.BASE_URL || 'https://summer-nuxt.firebaseio.com'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://summer-nuxt.firebaseio.com',
    fbApiKey: "AIzaSyAZkTN1ryDbRs7ZkV3H9aCTzHqM8dfyc-Q"
  },
  router:{
    middleware: 'log'
  },
  serverMiddleware:[
    bodyParser.json(),
    '~/api'
  ],
  generate:{
    routes: function(){
      return axios.get('https://summer-nuxt.firebaseio.com/posts.json')
      .then(res => {
        const routes = []
        for (const key in res.data){
          routes.push('/posts/' + key)
        }
        return routes
      })
    }
  }
}
