<script setup lang="ts">
defineProps<{
  title: string;
  pictureUrl: string;
  videoUrl: string;
  category: string;
  origin: string;
}>();
</script>

<template>
  <div class="card-body items-center text-center bg-base-200">
    <h2 class="card-title">{{ title }}</h2>
    <figure class="px-10 py-5">
      <nuxt-img
        :src="pictureUrl"
        alt="`${title} picture`"
        :placeholder="[300]"
        width="300"
        height="300"
        format="webp"
      />
    </figure>
    <div class="card-actions space-between">
      <nuxt-link
        :to="videoUrl"
        target="_blank"
        aria-label="watch the recipe in video"
      >
        <icon name="cib:youtube" color="red" />
      </nuxt-link>
      <div class="badge badge-secondary">
        <icon name="cil:apple" /> {{ category }}
      </div>
      <div class="badge badge-secondary">
        <icon name="cil:location-pin" /> {{ origin }}
      </div>
    </div>
  </div>
</template>
