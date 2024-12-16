<script setup lang="ts">
import type { Recipe } from "~/types/recipe";

const route = useRoute();
const searchQuery = computed(() => route.query.q as string);
const searchResults = ref<Recipe[]>([]);

const { data, status, error } = await useRecipeSearch(searchQuery.value || "");
if (error.value) {
  throw createError({
    statusCode: 500,
    message: error.value.message,
  });
}

searchResults.value = data.value;

watch(searchQuery, async (newQuery) => {
  const { data, error } = await useRecipeSearch(newQuery.trim());
  if (error.value) {
    throw createError({
      statusCode: 500,
      message: error.value.message,
    });
  }

  searchResults.value = data.value;
});
</script>

<template>
  <div class="container mx-auto px-4">
    <div v-if="status === 'pending'" class="flex justify-center my-8">
      <span class="loading loading-spinner loading-lg text-primary" />
    </div>

    <div
      v-else-if="searchResults.length > 0"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8"
    >
      <div
        v-for="recipe in searchResults"
        :key="recipe.id"
        class="card bg-base-100 shadow-xl"
      >
        <figure>
          <nuxt-img
            :src="recipe.pictureUrl"
            :alt="recipe.title"
            format="webp"
            loading="lazy"
            :placeholder="[350]"
            height="350"
            width="350"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ recipe.title }}</h2>
          <p>{{ recipe.category }} • {{ recipe.origin }}</p>
          <div class="card-actions justify-end">
            <nuxt-link :to="`/${recipe.id}`" class="btn btn-primary">
              View Recipe
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div
      v-else-if="searchQuery"
      role="alert"
      class="alert alert-info my-8 items-center flex"
    >
      <icon name="uil:info-circle" class="w-8 h-8" />
      <span>No recipes found for "{{ searchQuery }}"</span>
    </div>
  </div>
</template>
