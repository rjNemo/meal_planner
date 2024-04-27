<script setup lang="ts">
defineProps<{
  ingredients: { name: string; quantity: number }[];
}>();
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table table-s table-pin-rows table-pin-cols">
      <thead>
        <tr>
          <th></th>
          <td>Ingredient</td>
          <td>Quantity</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(ingredient, i) in ingredients">
          <th>{{ i + 1 }}</th>
          <td>{{ ingredient.name }}</td>
          <td>{{ ingredient.quantity }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
