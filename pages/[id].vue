<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});

const { params } = useRoute();
const routeParam = params.id;

const id = typeof routeParam === "string" ? routeParam : routeParam[0];

const {
  data: recipe,
  status,
  error,
} = id === "random" ? await useRecipeRandom() : await useRecipeById(Number(id));

if (error.value) {
  if (error.value.message === "Recipe not found") {
    throw createError({
      statusCode: 404,
      statusMessage: "Recipe not found",
    });
  }

  throw createError({
    statusCode: 400,
    statusMessage: "Invalid recipe id",
    message: error.value.message,
  });
}
const url = useRequestURL();
useSeoMeta({
  title: `${recipe.value!.title} | Mood2Food`,
  description: "The perfect meal that fits your mood",
  ogTitle: `${recipe.value!.title} | Mood2Food`,
  ogDescription: "The perfect meal that fits your mood",
  ogImage: recipe.value!.pictureUrl,
  ogUrl: url.href,
  twitterTitle: `${recipe.value!.title} | Mood2Food`,
  twitterDescription: "The perfect meal that fits your mood",
  twitterImage: recipe.value!.pictureUrl,
  twitterCard: "summary",
});
</script>

<template>
  <div v-if="status !== 'success'">Loading</div>
  <section v-else>
    <Recipe :recipe="recipe!" />
  </section>
</template>
