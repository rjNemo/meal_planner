export function useCategoryRecipes(category: string) {
  const { $client } = useNuxtApp();
  return $client.recipesByCategory.useQuery(category);
}
