<template>
  <NuxtLink
    :to="`/category/${category.strCategory}`"
    class="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
  >
    <img
      :src="category.strCategoryThumb"
      :alt="category.strCategory"
      class="mb-4 h-48 w-full object-cover rounded"
    />
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {{ category.strCategory }}
    </h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
      {{ category.strCategoryDescription }}
    </p>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Category {
  strCategory: string
  strCategoryThumb: string
  strCategoryDescription: string
}

defineProps<{
  category: Category
}>()
</script>
