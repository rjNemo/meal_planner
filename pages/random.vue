<script setup lang="ts">
const {
  data: recipe,
  pending,
  error,
} = await useFetch("/api/recipes", { lazy: true });
</script>

<template>
  <div v-if="pending">Loading</div>
  <div v-else-if="error">Failed: {{ error }}</div>
  <section v-else>
    <Recipe :recipe="recipe" />
  </section>
</template>
