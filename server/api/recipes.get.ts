import { parseRecipeData } from "~/utils/recipes";

export default defineEventHandler(async (_event) => {
  const { apiUrl } = useRuntimeConfig();

  const data = await $fetch<{ meals: unknown }>(
    new URL("random.php", apiUrl).toString(),
  );

  const recipes = parseRecipeData(data);
  return recipes[0];
});
