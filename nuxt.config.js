// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss",'nuxt-swiper', ],
    swiper: {
      // Swiper options
      //----------------------
      // prefix: 'Swiper',
      // styleLang: 'css',
      // modules: ['navigation', 'pagination'], // all modules are imported by default
    },
    darkMode: 'class',
    css: [
      "vuetify/lib/styles/main.sass",
      "@mdi/font/css/materialdesignicons.min.css",
    ],
    build: {
      transpile: ["vuetify"],
    },
    ssr: false,
    app: {
      pageTransition: { name: "page", mode: "out-in" },
    },
    
  });
  