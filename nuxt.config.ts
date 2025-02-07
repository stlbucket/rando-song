// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  pages: true,

  imports: {
    autoImport: true
  },

  ssr: false,

  compatibilityDate: "2025-02-06"
})