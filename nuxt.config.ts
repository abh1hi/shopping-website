// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  app: {
    head: {
      title: 'NOIR - Gothic Minimalist Fashion',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A beautiful shopping experience inspired by gothic minimalist aesthetics.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Inter:wght@300;400;500;600&display=swap' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/content',
    'nuxt-studio'
  ],
  studio: {
    route: '/_studio',
    repository: {
      provider: 'github',
      owner: 'abh1hi',
      repo: 'shopping-website',
      branch: 'main'
    }
  },
  content: {
    // Content options
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})




