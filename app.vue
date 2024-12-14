<template>
  <div data-theme="cupcake" class="flex flex-col h-screen">
    <app-navbar />
    <main class="flex-grow">
      <nuxt-page />
    </main>
    <app-footer />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
