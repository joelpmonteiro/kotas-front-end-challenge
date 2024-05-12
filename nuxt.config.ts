// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:false,
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],

  modules: ["@nuxt/eslint","@nuxtjs/tailwindcss","@pinia/nuxt","@vueuse/nuxt"]
})
