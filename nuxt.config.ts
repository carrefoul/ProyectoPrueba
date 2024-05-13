// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  googleFonts: {
    families: {
      Roboto: true,
      Inconsolata: true,
      "Space Mono": true,
      "Great Vibes": true
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxtjs/google-fonts']
})

