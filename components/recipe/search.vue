<template>
  <label
    class="input input-bordered input-primary flex items-center gap-2 container mx-auto px-4 lg:px-8 my-4"
  >
    <input
      type="text"
      class="grow"
      placeholder="Search"
      v-model="searchQuery"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
    <kbd class="kbd kbd-sm" :class="{ 'opacity-50': !isFocused }">⌘</kbd>
    <kbd class="kbd kbd-sm" :class="{ 'opacity-50': !isFocused }">K</kbd>
  </label>
</template>

<script setup lang="ts">
const searchQuery = ref("");
const isFocused = ref(false);

// Debounced search function
const debouncedSearch = useDebounceFn(async (query: string) => {
  const { data, status, error } = await useRecipeSearch(query);
  console.log("result", data.value, status.value, error.value);
}, 500);

// Watch for changes in searchQuery
watch(searchQuery, (newQuery) => {
  debouncedSearch(newQuery);
});

// Optional: Handle keyboard shortcut
onMounted(() => {
  const handleKeydown = (e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      const inputEl = document.querySelector("input");
      inputEl?.focus();
    }
  };

  window.addEventListener("keydown", handleKeydown);
  onUnmounted(() => {
    window.removeEventListener("keydown", handleKeydown);
  });
});
</script>
