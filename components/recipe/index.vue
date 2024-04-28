<script setup lang="ts">
import type { Recipe } from "~/types/recipe";

defineProps<{ recipe: Recipe }>();
</script>

<template>
  <div>
    <div class="lg:flex space-y-4 lg:justify-evenly py-4">
      <div class="card w-96 bg-base-100 shadow-xl mx-auto lg:mx-2 min-h-32">
        <RecipeCard
          :title="recipe.title"
          :picture-url="recipe.pictureUrl"
          :video-url="recipe.videoUrl"
          :category="recipe.category"
          :origin="recipe.origin"
        />
      </div>

      <RecipeIngredients :ingredients="recipe.ingredients" />
    </div>
    <div class="flex flex-col items-center p-4">
      <h2 class="prose lg:prose-xl">Instructions</h2>
      <p class="prose">{{ recipe.instructions }}</p>
    </div>
  </div>
</template>
