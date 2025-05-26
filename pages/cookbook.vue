<script setup lang="ts">
import type { Recipe } from "~/types/recipe";
import { useStorage } from "@vueuse/core";
const cookbook = useStorage<Recipe[]>("cookbook", [], localStorage);
</script>

<template>
  <main>
    <sentry-error-button />
    <div
      v-if="cookbook.length === 0"
      class="flex justify-center items-center min-h-screen"
    >
      <div class="alert alert-info">
        <span>No recipes found in this category.</span>
      </div>
    </div>
    <ul>
      <li v-for="recipe in cookbook" :key="recipe.id">
        <nuxt-link :to="`/${recipe.id}`">
          <recipe-card
            :title="recipe.title"
            :picture-url="recipe.pictureUrl"
            :video-url="recipe.videoUrl"
            :category="recipe.category"
            :origin="recipe.origin"
          />
        </nuxt-link>
      </li>
    </ul>
  </main>
</template>
