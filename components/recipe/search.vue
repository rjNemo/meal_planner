<template>
  <label
    class="input input-bordered input-primary flex items-center gap-2 container mx-auto px-4 lg:px-8 my-4"
  >
    <input
      v-model="model"
      type="text"
      class="grow"
      placeholder="Search recipes..."
      :autofocus="autofocus"
      @focus="isFocused = true"
      @blur="isFocused = false"
    >
    <kbd
      class="hidden md:inline-block kbd kbd-sm"
      :class="{ 'opacity-50': !isFocused }"
      >⌘</kbd
    >
    <kbd
      class="hidden md:inline-block kbd kbd-sm"
      :class="{ 'opacity-50': !isFocused }"
      >K</kbd
    >
  </label>
</template>

<script setup lang="ts">
const model = defineModel<string>();
defineProps<{ autofocus?: boolean }>();

const isFocused = ref(false);

// Debounced navigation
const debouncedSearch = useDebounceFn((query: string) => {
  navigateTo(`/search?q=${encodeURIComponent(query || "")}`);
}, 200);

// Watch for changes in model
watch(model, (newQuery) => {
  debouncedSearch(newQuery || "");
});

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
