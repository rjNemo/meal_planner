<script setup lang="ts">
const route = useRoute();
const searchQuery = computed(() => route.query.q as string);

const { data, status, error } = await useRecipeSearch(searchQuery.value || "");
</script>

<template>
  <div class="container mx-auto px-4">
    <div v-if="status" class="flex justify-center my-8">
      <span class="loading loading-spinner loading-lg text-primary"></span>
    </div>

    <div v-else-if="error" class="alert alert-error my-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>Error: {{ error.message }}</span>
    </div>

    <div
      v-else-if="data"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8"
    >
      <div
        v-for="recipe in data"
        :key="recipe.id"
        class="card bg-base-100 shadow-xl"
      >
        <figure><img :src="recipe.pictureUrl" :alt="recipe.title" /></figure>
        <div class="card-body">
          <h2 class="card-title">{{ recipe.title }}</h2>
          <p>{{ recipe.category }} • {{ recipe.origin }}</p>
          <div class="card-actions justify-end">
            <NuxtLink :to="`/recipe/${recipe.id}`" class="btn btn-primary"
              >View Recipe</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="searchQuery" class="alert alert-info my-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="stroke-current shrink-0 w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <span>No recipes found for "{{ searchQuery }}"</span>
    </div>
  </div>
</template>
