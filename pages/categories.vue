<script setup lang="ts">
const { data: categories, status } = useCategories();
</script>

<template>
  <div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold mb-8 text-center">Recipe Categories</h1>

    <div v-if="status === 'pending'" class="text-center">Loading...</div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <category-card
        v-for="category in categories"
        :key="category.strCategory"
        :category="category"
      />
    </div>
  </div>
</template>
