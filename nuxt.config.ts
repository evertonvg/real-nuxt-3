// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    // '**': { swr: 300, prerender: true }
    '/': { ssr: true },
    '/categories': { prerender: true },
    '/categories/*': { swr: 300 },
    '/posts/*': { swr: 60 }
  }
})
