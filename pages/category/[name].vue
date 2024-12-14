<script setup lang="ts">
const route = useRoute();
const categoryName = route.params.name as string;

const { data: categories } = useCategories();
const { data: recipes, status } = useCategoryRecipes(categoryName);

const category = computed(() => 
  categories.value?.find((c) => c.name === categoryName)
);

if (!category.value) {
  throw createError({
    statusCode: 404,
    message: 'Category not found',
  });
}
</script>

<template>
  <div>
    <div 
      class="hero h-[40vh] bg-cover bg-center relative"
      :style="`background-image: url(${category.value.picture})`"
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <h1 class="text-5xl font-bold">{{ category.value.name }}</h1>
      </div>
    </div>

    <div class="container mx-auto px-4 py-8">
      <div class="prose max-w-none mb-12">
        <p>{{ category.value.description }}</p>
      </div>

      <div v-if="status === 'pending'" class="flex justify-center my-8">
        <span class="loading loading-spinner loading-lg text-primary" />
      </div>

      <div
        v-else-if="recipes?.length"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div
          v-for="recipe in recipes"
          :key="recipe.id"
          class="card bg-base-100 shadow-xl"
        >
          <figure>
            <img :src="recipe.pictureUrl" :alt="recipe.title" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{{ recipe.title }}</h2>
            <div class="card-actions justify-end">
              <nuxt-link :to="`/recipe/${recipe.id}`" class="btn btn-primary">
                View Recipe
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="alert alert-info">
        <span>No recipes found in this category.</span>
      </div>
    </div>
  </div>
</template>
