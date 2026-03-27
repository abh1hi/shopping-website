import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    products: defineCollection({
      source: 'products.json',
      type: 'data'
    })
  }
})
