// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/eslint", "@nuxt/image", "nuxt-icon", "nuxt-delay-hydration"],

  build: {
    transpile: ["trpc-nuxt"],
  },

  css: ["~/assets/css/main.css"],

  image: {
    domains: ["www.themealdb.com"],
  },

  delayHydration: {
    mode: "init",
    // enables nuxt-delay-hydration in dev mode for testing
    debug: process.env.NODE_ENV === "development",
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

