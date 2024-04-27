<script setup lang="ts">
const props = defineProps<{
  title: string;
  pictureUrl: string;
  videoUrl: string;
  category: string;
  origin: string;
}>();
</script>

<template>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{{ title }}</h2>
    <figure class="px-10 py-5">
      <NuxtImg :src="pictureUrl" alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-actions space-between">
      <NuxtLink class="badge badge-outline" :to="videoUrl">
        <Icon name="cib:youtube" color="red" />
      </NuxtLink>
      <div class="badge badge-secondary">
        <Icon name="cil:apple" /> {{ category }}
      </div>
      <div class="badge badge-secondary">
        <Icon name="cil:location-pin" /> {{ origin }}
      </div>
    </div>
  </div>
</template>
