<script setup lang="ts">
const url = useRequestURL();
useSeoMeta({
  title: `Mood2Food`,
  description: "The perfect meal that fits your mood",
  ogTitle: `Mood2Food`,
  ogDescription: "The perfect meal that fits your mood",
  ogImage: "/logo192.png",
  ogUrl: url.href,
  twitterTitle: `Mood2Food`,
  twitterDescription: "The perfect meal that fits your mood",
  twitterImage: "/logo192.png",
  twitterCard: "summary",
});
</script>

<template>
  <div class="hero min-h-full bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse h-full">
      <nuxt-img
        src="/chef.svg"
        alt="Chef holding a knife"
        class="max-w-sm object-contain rounded-lg"
        :placeholder="[400, 300]"
        format="webp"
        height="300"
        width="400"
      />
      <div class="flex flex-col justify-center">
        <h1 class="text-5xl font-bold prose">Eat Something New</h1>
        <p class="py-6 prose">Generate a random recipe.</p>
        <nuxt-link to="/random" class="btn btn-primary">
          Random Recipe Now
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
