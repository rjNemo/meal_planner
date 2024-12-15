<script setup lang="ts">
const route = useRoute();
const categoryName = route.params.name as string;

const { data: recipes, status } = await useCategoryRecipes(categoryName);

if (!recipes.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Category not found",
  });
}

const { data: categories } = await useCategories();
const category = categories.value?.find((c) => c.name === categoryName);

const url = useRequestURL();
useSeoMeta({
  title: `${categoryName} | Mood2Food`,
  description: "The perfect meal that fits your mood",
  ogTitle: `${categoryName} | Mood2Food`,
  ogDescription: "The perfect meal that fits your mood",
  ogImage: category!.picture,
  ogUrl: url.href,
  twitterTitle: `${categoryName} | Mood2Food`,
  twitterDescription: "The perfect meal that fits your mood",
  twitterImage: category!.picture,
  twitterCard: "summary",
});
</script>

<template>
  <div>
    <div
      class="hero h-[40vh] bg-cover bg-center relative"
      :style="`background-image: url(${category!.picture})`"
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <h1 class="text-5xl font-bold">{{ category?.name || categoryName }}</h1>
      </div>
    </div>

    <div class="container mx-auto px-4 py-8">
      <div class="prose max-w-none mb-12">
        <p>{{ category!.description }}</p>
      </div>

      <div v-if="status === 'pending'" class="flex justify-center my-8">
        <span class="loading loading-spinner loading-lg text-primary" />
      </div>

      <div
        v-else-if="recipes?.length"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div
          v-for="recipe in recipes"
          :key="recipe.id"
          class="card bg-base-100 shadow-xl"
        >
          <figure>
            <nuxt-img
              :src="recipe.pictureUrl"
              :alt="recipe.title"
              :placeholder="[300]"
              format="webp"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{{ recipe.title }}</h2>
            <div class="card-actions justify-end">
              <nuxt-link :to="`/${recipe.id}`" class="btn btn-primary">
                View Recipe
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="alert alert-info">
        <span>No recipes found in this category.</span>
      </div>
    </div>
  </div>
</template>
