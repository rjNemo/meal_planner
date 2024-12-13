export default function useRecipeById(id: number) {
  const { $client } = useNuxtApp();
  return $client.recipeGet.useQuery(id);
}
