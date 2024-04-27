<script setup lang="ts">
const { data, pending, error, refresh } = await useFetch(
  "https://www.themealdb.com/api/json/v1/1/random.php",
);
</script>

<template>
  <div>
    <div v-if="pending">Loading</div>
    <div v-else-if="error">Failed: {{ error }}</div>
    <pre v-else>
      {{ data?.meals?.[0] }}
    </pre>
  </div>
</template>
