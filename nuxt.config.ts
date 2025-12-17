// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    devServer: {
        port: 3080
    },
    ssr: true,
    css: ['~/assets/css/main.css'],
    modules: [
        '@nuxt/eslint',
        '@nuxt/image',
        '@nuxt/scripts',
        '@nuxt/test-utils',
        '@nuxt/ui',
        '@nuxt/content',
    ],
    content: {
        sources: {
            content: {
                driver: 'fs',
                base: './content'
            }
        }
    },
    nitro: {
        prerender: {
            crawlLinks: true,
            routes: [
                '/',
                '/miasta/bialystok',
                '/miasta/olsztyn',
                '/miasta/radom',
                '/miasta/warszawa',
                '/promesy/radom',
                '/jak-uzyskac-pozwolenie-na-bron-krok-po-kroku',
                '/kompendium',
                '/rozporzadzenie-transport',
                '/skrocona-ustawa-o-broni-i-amunicji',
                '/ustawa-o-broni-i-amunicji',
                '/zasady-bezpieczenstwa'
            ]
        }
    },
    buildModules: [
        '@nuxtjs/pwa',
    ],
    pwa: {
        manifest: {
            name: 'Sagittarius FAQ',
            short_name: 'Sagittarius',
            description: 'Informacje o składaniu wniosków na broń w różnych miastach Polski',
            start_url: '/',
            display: 'standalone',
            background_color: '#ffffff',
            theme_color: '#000000',
            icons: [
                {
                    src: '/android-chrome-192x192.png',
                    sizes: '192x192',
                    type: 'image/png'
                },
                {
                    src: '/android-chrome-512x512.png',
                    sizes: '512x512',
                    type: 'image/png'
                },
                {
                    src: '/apple-touch-icon.png',
                    sizes: '180x180',
                    type: 'image/png'
                },
                {
                    src: '/favicon-32x32.png',
                    sizes: '32x32',
                    type: 'image/png'
                },
                {
                    src: '/favicon-16x16.png',
                    sizes: '16x16',
                    type: 'image/png'
                }
            ]
        },
        icon: {
            source: '/public/android-chrome-512x512.png'
        },
        meta: {
            theme_color: '#000000',
            author: 'Karol Sójka',
            lang: 'pl'
        },
        workbox: {
            enabled: true
        }
    }
})
