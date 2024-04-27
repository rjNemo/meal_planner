<script setup lang="ts">
const { recipe, pending, error } = await useRecipe();
</script>

<template>
  <div v-if="pending">Loading</div>
  <div v-else-if="error">Failed: {{ error }}</div>
  <section v-else>
    <div class="lg:flex space-y-4 lg:justify-evenly py-4">
      <div class="card w-96 bg-base-100 shadow-xl mx-auto lg:mx-2">
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
  </section>
</template>
