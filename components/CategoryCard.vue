<script setup lang="ts">
import type { Category } from "~/types/category";

defineProps<{
  category: Category;
}>();
</script>

<template>
  <nuxt-link
    :to="`/category/${category.name}`"
    class="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
  >
    <img
      :src="category.picture"
      :alt="category.name"
      class="mb-4 h-48 w-full object-cover rounded"
    />
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      {{ category.name }}
    </h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
      {{ category.description }}
    </p>
  </nuxt-link>
</template>
