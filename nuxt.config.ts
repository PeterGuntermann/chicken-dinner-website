// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {},
  modules: ['@nuxt/content', '@nuxt/fonts', '@nuxt/image', '@nuxt/scripts', 'nuxt-time'],
  css: ['bootstrap/scss/bootstrap.scss', '~/assets/scss/custom.scss'],
});
