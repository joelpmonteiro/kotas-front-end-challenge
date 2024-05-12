// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:false,
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],
  plugins: [
    '~/plugins/vue-virtual-scroller.ts',
  ],
  modules: ["@nuxt/eslint","@nuxtjs/tailwindcss","@pinia/nuxt","@vueuse/nuxt"]
})
