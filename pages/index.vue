<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <NuxtImg src="/chef.svg" class="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 class="text-5xl font-bold prose">Eat Something New</h1>
        <p class="py-6 prose">Generate a random recipe.</p>
        <NuxtLink to="/random" class="btn btn-primary" external>
          Random Recipe Now
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
