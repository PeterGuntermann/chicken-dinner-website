// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {},
  compatibilityDate: '2024-04-03',
  css: [
    //
    'bootstrap/scss/bootstrap.scss',
    '~/assets/scss/custom.scss',
  ],
  devtools: {
    enabled: true,
  },
  modules: [
    //
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    'nuxt-time',
  ],
  nitro: {
    logLevel: 'trace',
    prerender: {
      routes: ['/', '/datenschutz', '/impressum', '/galerie-2024-full'],
      crawlLinks: false,
      failOnError: false,
    },
  },
});
