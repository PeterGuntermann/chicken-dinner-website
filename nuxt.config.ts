// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {},
  modules: ['@nuxt/content', '@nuxt/image', '@nuxt/fonts', 'nuxt-time'],
  css: ['bootstrap/dist/css/bootstrap.min.css', '~/assets/scss/custom.scss'],
});
