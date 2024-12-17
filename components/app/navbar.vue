<script setup lang="ts">
const router = useRouter();
const route = useRoute();
const searchQuery = ref((route.query.q as string) || "");

const { execute } = useRecipeRandom();

const handleRandomClick = async () => {
  if (route.path !== "/random") {
    await router.push("/random");
  }
  await execute();
};
</script>

<template>
  <nav class="navbar bg-base-300">
    <div class="navbar-start">
      <div class="dropdown">
        <div
          tabindex="0"
          role="button"
          class="btn btn-ghost lg:hidden"
          arial-label="Menu button"
        >
          <icon name="uil:bars" class="w-6 h-6" />
          <!-- TODO: add transition into cross on click -->
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
        >
          <slot name="menu" />
        </ul>
      </div>
      <nuxt-link to="/" class="btn btn-ghost text-xl">
        <nuxt-img src="/logo192.png" width="50" height="50" alt="logo" />
        <span style="font-family: cursive"> Chefs </span>
      </nuxt-link>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <slot name="menu" />
      </ul>
    </div>
    <div class="navbar-end gap-2">
      <!-- Search icon for mobile -->
      <nuxt-link
        to="/search"
        class="btn btn-ghost sm:hidden"
        aria-label="Search"
      >
        <icon name="uil:search" class="w-6 h-6" />
      </nuxt-link>
      <!-- Search bar for larger screens -->
      <recipe-search v-model="searchQuery" class="hidden sm:flex" />
      <button class="btn btn-primary" @click="handleRandomClick">Random</button>
    </div>
  </nav>
</template>
