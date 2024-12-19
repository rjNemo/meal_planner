<script setup lang="ts">
import type { Recipe } from "~/types/recipe";

defineProps<{ recipe: Recipe }>();

const shareRecipe = async (recipe: Recipe) => {
  const url =
    useRequestURL().href.split("/").slice(0, -1).join("/") + "/" + recipe.id;

  if (navigator.share) {
    try {
      await navigator.share({
        title: recipe.title,
        text: `Check out this recipe: ${recipe.title}`,
        url,
      });
    } catch (error) {
      alert("Failed to share the recipe.");
    }
  } else {
    alert("Sharing not supported on this device.");
  }
};
</script>

<template>
  <div class="container mx-auto px-4 lg:px-8">
    <div class="flex flex-col lg:flex-row lg:justify-start gap-6 py-4">
      <div class="w-full lg:w-[480px]">
        <div class="card bg-base-100 shadow-xl mx-auto lg:mx-0">
          <recipe-card
            :title="recipe.title"
            :picture-url="recipe.pictureUrl"
            :video-url="recipe.videoUrl"
            :category="recipe.category"
            :origin="recipe.origin"
          />
        </div>
      </div>

      <div class="w-full lg:w-[480px]">
        <recipe-ingredients :ingredients="recipe.ingredients" />
      </div>
    </div>

    <div class="flex flex-col items-center py-6">
      <h2 class="text-2xl lg:text-3xl font-semibold mb-4">Instructions</h2>
      <p class="prose prose-lg max-w-none w-full">
        {{ recipe.instructions }}
      </p>
      <button class="btn btn-accent mt-4" @click="shareRecipe(recipe)">
        <icon name="uil:share-alt" class="mr-2 w-6 h-6" />
        Share Recipe
      </button>
    </div>
  </div>
</template>
