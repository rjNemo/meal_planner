<template>
  <label
    class="input input-bordered input-primary flex items-center gap-2 container mx-auto px-4 lg:px-8 my-4"
  >
    <input
      type="text"
      class="grow"
      placeholder="Search recipes..."
      v-model="model"
      @focus="isFocused = true"
      @blur="isFocused = false"
      @keydown.enter="$emit('search')"
    />
    <kbd class="kbd kbd-sm" :class="{ 'opacity-50': !isFocused }">⌘</kbd>
    <kbd class="kbd kbd-sm" :class="{ 'opacity-50': !isFocused }">K</kbd>
  </label>
</template>

<script setup lang="ts">
defineEmits(["search"]);
const model = defineModel<string>();

const isFocused = ref(false);

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
