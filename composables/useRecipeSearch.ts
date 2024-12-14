export default function useRecipeSearch(query: string) {
  const { $client } = useNuxtApp();
  return $client.recipeSearch.useQuery(query);
}
