<script setup lang="ts">
const { data: categories, status, error } = useCategories();

if (error.value) {
  throw createError({
    statusCode: 500,
    message: error.value.message,
  });
}
</script>

<template>
  <div class="container mx-auto px-4">
    <div v-if="status === 'pending'" class="flex justify-center my-8">
      <span class="loading loading-spinner loading-lg text-primary" />
    </div>

    <div
      v-else-if="categories!.length > 0"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8"
    >
      <div
        v-for="category in categories"
        :key="category.name"
        class="card bg-base-100 shadow-xl h-[28rem] sm:h-[32rem] md:h-[36rem] lg:h-[32rem]"
      >
        <figure>
          <img :src="category.picture" :alt="category.name" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ category.name }}</h2>
          <p class="line-clamp-6 text-sm">
            {{ category.description }}
          </p>
          <div class="card-actions justify-end">
            <nuxt-link
              :to="`/categories/${category.name}`"
              class="btn btn-primary"
            >
              View Recipes
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="alert alert-info my-8 flex-col items-center">
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
