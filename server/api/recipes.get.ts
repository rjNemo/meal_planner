import { parseRecipeData } from "~/utils/recipes";
import type { Meal } from "~/types/recipe";

export default defineEventHandler(async (_event) => {
  const { apiUrl } = useRuntimeConfig();

  const data = await $fetch<{ meals: Meal[] }>(
    new URL("random.php", apiUrl).toString(),
  );

  const recipes = parseRecipeData(data);
  return recipes[0];
});
