<script setup lang="ts">
const { data: categories, status, error } = useCategories();
</script>

<template>
  <div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold mb-8 text-center">Recipe Categories</h1>

    <div v-if="status === 'pending'" class="flex justify-center my-8">
      <span class="loading loading-spinner loading-lg text-primary" />
    </div>

    <div
      v-else-if="error"
      class="alert alert-error my-8 flex-col items-center"
    >
      <div class="flex items-center">
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
        <span>Failed to load categories</span>
      </div>
    </div>

    <div
      v-else-if="categories?.length > 0"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8"
    >
      <category-card
        v-for="category in categories"
        :key="category.strCategory"
        :category="category"
      />
    </div>

    <div
      v-else
      class="alert alert-info my-8 flex-col items-center"
    >
      <div class="flex items-center">
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
          />
        </svg>
        <span>No categories available</span>
      </div>
    </div>
  </div>
</template>
