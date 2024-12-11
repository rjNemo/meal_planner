<script setup lang="ts">
import { idSchema } from "~/types/id";

const { params } = useRoute();
const routeParam = params.id;

const parsed = idSchema.safeParse(routeParam);

if (!parsed.success) {
  throw createError({
    statusCode: 400,
    statusMessage: "Invalid recipe id",
  });
}

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
