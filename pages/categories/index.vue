<script setup lang="ts">
const { data: categories, status, error } = useCategories();

if (error.value) {
  throw createError({
    statusCode: 500,
    message: error.value.message,
  });
}
const url = useRequestURL();
useSeoMeta({
  title: `Recipe categories | Mood2Food`,
  description: "The perfect meal that fits your mood",
  ogTitle: `Recipe categories | Mood2Food`,
  ogDescription: "The perfect meal that fits your mood",
  ogImage: "/logo192.png",
  ogUrl: url.href,
  twitterTitle: `Recipe categories | Mood2Food`,
  twitterDescription: "The perfect meal that fits your mood",
  twitterImage: "/logo192.png",
  twitterCard: "summary",
});
</script>

<template>
  <div class="container mx-auto px-4">
    <div v-if="status === 'pending'" class="flex justify-center my-8">
      <span class="loading loading-spinner loading-lg text-primary" />
    </div>

    <div
      v-else-if="categories!.length > 0"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8"
    >
      <div
        v-for="category in categories"
        :key="category.name"
        class="card bg-base-100 shadow-xl h-[28rem] sm:h-[32rem] md:h-[36rem] lg:h-[32rem]"
      >
        <figure>
          <nuxt-img
            :src="category.picture"
            :alt="category.name"
            :placeholder="[160, 100]"
            height="100"
            width="160"
            format="webp"
            loading="lazy"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ category.name }}</h2>
          <p class="line-clamp-6 text-sm">
            {{ category.description }}
          </p>
          <div class="card-actions justify-end">
            <nuxt-link
              :to="`/categories/${category.name}`"
              class="btn btn-primary"
            >
              View Recipes
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div v-else role="alert" class="alert alert-info my-8 items-center flex">
      <icon name="uil:info-circle" class="w-8 h-8" />
      <span>No categories available</span>
    </div>
  </div>
</template>
