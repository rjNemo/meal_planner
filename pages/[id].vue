<script setup lang="ts">
const { params } = useRoute();
const routeParam = params.id;

const id =
  typeof routeParam === "string" ? Number(routeParam) : Number(routeParam[0]);

const { data: recipe, pending, error } = await useRecipeById(id);

if (error.value) {
  let statusCode = 400;
  if (error.value.message === "Recipe not found") {
    throw createError({
      statusCode: 404,
      statusMessage: "Recipe not found",
    });
  }

  throw createError({
    statusCode,
    statusMessage: "Invalid recipe id",
    message: error.value.message,
  });
}
</script>

<template>
  <div v-if="pending">Loading</div>
  <section v-else>
    <Recipe :recipe="recipe!" />
  </section>
</template>
