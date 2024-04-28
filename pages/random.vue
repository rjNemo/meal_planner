<script setup lang="ts">
const { recipe, pending, error } = await useRecipe("random");
</script>

<template>
  <div v-if="pending">Loading</div>
  <div v-else-if="error">Failed: {{ error }}</div>
  <section v-else>
    <Recipe :recipe="recipe" />
  </section>
</template>
