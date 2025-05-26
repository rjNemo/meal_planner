<script setup lang="ts">
import type { Recipe } from "~/types/recipe";

import { useLocalStorage } from "@vueuse/core";
const { recipe } = defineProps<{ recipe: Recipe }>();

const cookbook = useLocalStorage<Recipe[]>("cookbook", []);

const likedRecipes = ref(new Set<string>());
onMounted(() => {
  likedRecipes.value = new Set(cookbook.value.map((recipe) => recipe.id));
  console.log("cook", likedRecipes.value);
});

const toggleLike = (recipeId: string) => {
  if (likedRecipes.value.has(recipeId)) {
    likedRecipes.value.delete(recipeId);
    cookbook.value = cookbook.value.filter((recipe) => recipe.id !== recipeId);
  } else {
    likedRecipes.value.add(recipeId);
    const recipeToAdd = recipe;
    if (recipeToAdd) {
      cookbook.value = [...cookbook.value, recipeToAdd];
    }
  }
};

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
      console.error(error);
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
      <div class="flex gap-4 mt-4">
        <button class="btn btn-accent" @click="shareRecipe(recipe)">
          <icon name="uil:share-alt" class="mr-2 w-6 h-6" />
          Share Recipe
        </button>
        <button
          class="btn btn-ghost"
          :class="{ 'text-red-500': likedRecipes.has(recipe.id) }"
          @click="toggleLike(recipe.id)"
        >
          <icon
            :name="likedRecipes.has(recipe.id) ? 'uil:heart' : 'uil:heart-alt'"
            class="w-6 h-6"
          />
          Like
        </button>
      </div>
    </div>
  </div>
</template>
