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

const debouncedSearch = useDebounceFn(async (query: string) => {
  if (searchQuery.value.trim()) {
    router.push({
      path: "/search",
      query: { q: query.trim() },
    });
  }
}, 500);

const handleSubmit = () => {
  if (searchQuery.value.trim()) {
    router.push({
      path: "/search",
      query: { q: searchQuery.value.trim() },
    });
  }
};

if (route.path === "/search") {
  // Watch for changes in searchQuery
  watch(searchQuery, (newQuery) => {
    debouncedSearch(newQuery);
  });
}
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
        >
          <li><nuxt-link to="/categories">Categories</nuxt-link></li>
        </ul>
      </div>
      <nuxt-link to="/" class="btn btn-ghost text-xl">
        <nuxt-img src="/logo192.png" width="50" alt="logo" />
        <span style="font-family: cursive"> Chefs </span>
      </nuxt-link>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><nuxt-link to="/categories">Categories</nuxt-link></li>
      </ul>
    </div>
    <div class="navbar-end gap-2">
      <recipe-search v-model="searchQuery" @search="handleSubmit" />
      <button class="btn btn-primary" @click="handleRandomClick">Random</button>
    </div>
  </nav>
</template>
