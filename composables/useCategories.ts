export function useCategories() {
  const { $client } = useNuxtApp();
  return $client.listCategories.useQuery();
}
