export default function useRecipeRandom() {
  const { $client } = useNuxtApp();
  return $client.recipeRandom.useQuery();
}
