// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxt/content'],

  app: {
    baseURL: '/personalWeb/',
    head: {
      title: 'Jiaodi — Frontend × AI',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Jiaodi — Frontend × AI. Building usable, trustworthy, and maintainable AI product experiences with Vue and Node.js.',
        },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/personalWeb/favicon.svg' }],
    },
  },

  css: ['~/assets/styles/tokens.css', '~/assets/styles/global.css'],

  content: {
    highlight: {
      theme: 'github-dark',
    },
  },

  nitro: {
    prerender: {
      routes: ['/'],
    },
  },

  compatibilityDate: '2024-11-01',
})
