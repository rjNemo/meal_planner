// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxtjs/robots",
    "@sentry/nuxt/module",
    "@vueuse/nuxt",
    "nuxt-delay-hydration",
    "nuxt-icon",
  ],

  app: {
    head: {
      title: "Mood2Food",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Meal Planner",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
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
    public: {
      sentry: {
        dsn: "",
      },
    },
  },

  ssr: true,
  compatibilityDate: "2024-12-13",

  sentry: {
    sourceMapsUploadOptions: {
      org: "ruidy",
      project: "meal-planner",
    },

    autoInjectServerSentry: "top-level-import",
  },

  sourcemap: {
    client: "hidden",
  },
});
