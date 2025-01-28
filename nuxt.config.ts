// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    srcDir: "src",
    rootDir: "./",
    components: [
        { path: "blocks", extensions: ["vue"] },
        { path: "blocks/home", extensions: ["vue"] },
        { path: "components", extensions: ["vue"] },
        { path: "icons", extensions: ["vue"] },
    ],
    css: [
        "@/assets/stylesheets/css/global.css",
        "@fortawesome/fontawesome-pro/css/all.css",
    ],
    runtimeConfig: {
        public: {
            NUXT_APP_VERSION: process.env.NUXT_APP_VERSION,
            NUXT_APP_LAST_UPDATE: process.env.NUXT_APP_LAST_UPDATE,
            STRAPI_API_URL: process.env.NUXT_PUBLIC_STRAPI_API_URL,
            STRAPI_URL: process.env.NUXT_PUBLIC_STRAPI_URL,
            STRAPI_API_TOKEN: process.env.NUXT_PUBLIC_STRAPI_API_TOKEN,
        },
    },
});
