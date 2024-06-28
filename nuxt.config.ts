// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  image: {
    domains: ["www.themealdb.com"],
  },
  modules: ["@nuxt/eslint", "@nuxt/image", "nuxt-icon"],
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
});
