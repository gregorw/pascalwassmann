import pkg from './package'
import createClient from './plugins/contentful'
require('dotenv').config()

const contentful = createClient()

export default {
  mode: 'universal',

  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
  },

  /*
   ** Headers of the page
   */
  head: {
    title: 'Pascal Wassmann',
    htmlAttrs: {
      lang: 'de-CH',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa'],

  buildModules: ['@nuxtjs/dotenv'],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    }
  },

  generate: {
    routes () {
      return Promise.all([
        contentful.getEntries({ 'content_type': 'project' }),
        contentful.getEntries({ 'content_type': 'page' }),
        contentful.getEntries({ 'content_type': 'job' })
      ]).then(([projects, pages, jobs]) => {
        return [
          ...projects.items.map((project) => { return `/projekte/${project.fields.slug}` }),
          ...pages.items.map((page) => { return `/${page.fields.slug}` }),
          ...jobs.items.map((job) => { return `/jobs/${job.fields.slug}` })
        ]
      })
    }
  }
}
