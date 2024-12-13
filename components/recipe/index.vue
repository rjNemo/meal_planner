<script setup lang="ts">
import type { Recipe } from "~/types/recipe";

defineProps<{ recipe: Recipe }>();
</script>

<template>
  <div class="container mx-auto px-4 lg:px-8">
    <div class="flex flex-col lg:flex-row lg:justify-start gap-6 py-4">
      <div class="w-full lg:w-[480px]">
        <div class="card bg-base-100 shadow-xl mx-auto lg:mx-0">
          <RecipeCard
            :title="recipe.title"
            :picture-url="recipe.pictureUrl"
            :video-url="recipe.videoUrl"
            :category="recipe.category"
            :origin="recipe.origin"
          />
        </div>
      </div>

      <div class="w-full lg:w-[480px]">
        <RecipeIngredients :ingredients="recipe.ingredients" />
      </div>
    </div>

    <div class="flex flex-col items-center py-6">
      <h2 class="text-2xl lg:text-3xl font-semibold mb-4">Instructions</h2>
      <p class="prose prose-lg max-w-none w-full">
        {{ recipe.instructions }}
      </p>
    </div>
  </div>
</template>
