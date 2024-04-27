<script setup lang="ts">
const { recipe, error } = await useRecipe();
</script>

<template>
  <div v-if="error">Failed: {{ error }}</div>
  <section v-else>
    <div class="card w-96 bg-base-100 shadow-xl">
      <RecipeCard
        :title="recipe.title"
        :pictureUrl="recipe.pictureUrl"
        :videoUrl="recipe.videoUrl"
        :category="recipe.category"
        :origin="recipe.origin"
      />
    </div>
  </section>
</template>
