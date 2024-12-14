// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "nuxt-icon",
    "nuxt-delay-hydration",
    "@nuxtjs/robots",
    "@vueuse/nuxt",
  ],

  app: {
    head: {
      title: "Meal Planner",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Meal Planner",
        },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "slide", mode: "out-in" },
  },

  build: {
    transpile: ["trpc-nuxt"],
  },

  css: ["~/assets/css/main.css"],

  delayHydration: {
    mode: "init",
    // enables nuxt-delay-hydration in dev mode for testing
    debug: process.env.NODE_ENV === "development",
  },

  image: {
    domains: ["www.themealdb.com"],
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    // The private keys which are only available server-side
    apiUrl: "",
    // Keys within public are also exposed client-side
  },

  ssr: true,
  compatibilityDate: "2024-12-13",
});