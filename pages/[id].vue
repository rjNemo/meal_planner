<script setup lang="ts">
const { params } = useRoute();
const id = params.id;

const {
  data: recipe,
  pending,
  error,
} = await useFetch(`/api/recipes/${id}`, {
  lazy: true,
});
</script>

<template>
  <div v-if="pending">Loading</div>
  <div v-else-if="error">Failed: {{ error.statusMessage }}</div>
  <section v-else>
    <Recipe :recipe="recipe" />
  </section>
</template>
