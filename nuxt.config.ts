// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

    devServer: {
        port: 3080
    },

    css: ['~/assets/css/main.css'],

    modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxt/content'
  ],

    content: {
        sources: {
            content: {
                driver: 'fs',
                base: './content'
            }
        }
    }
})
