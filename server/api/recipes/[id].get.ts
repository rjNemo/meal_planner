import { parseRecipeData } from "~/utils/recipes";
import type { Meal } from "~/types/recipe";
import { idSchema } from "~/types/id";

export default defineEventHandler(async (event) => {
  const { apiUrl } = useRuntimeConfig();
  const routeParam = getRouterParam(event, "id");

  const parsed = idSchema.safeParse(routeParam);
  if (!parsed.success) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid recipe id",
      message: parsed.error.message,
    });
  }

  const data = await $fetch<{ meals: Meal[] }>(
    new URL(`lookup.php?i=${parsed.data}`, apiUrl).toString(),
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
