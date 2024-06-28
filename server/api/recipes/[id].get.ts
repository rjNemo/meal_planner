import { parseRecipeData } from "~/utils/recipes";
import type { Meal } from "~/types/recipe";

export default defineEventHandler(async (event) => {
  const { apiUrl } = useRuntimeConfig();
  const id = getRouterParam(event, "id");

  const data = await $fetch<{ meals: Meal[] }>(
    new URL(`lookup.php?i=${id}`, apiUrl).toString(),
  );
  if (!data?.meals) {
    throw createError({
      statusCode: 404,
      statusMessage: "Recipe not found",
    });
  }

  const recipes = parseRecipeData(data);
  return recipes[0];
});
