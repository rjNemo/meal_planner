import { publicProcedure, router } from "../trpc";
import {} from "~/types/recipe";
import {
  categoriesResponseSchema,
  type CategoriesResponse,
} from "~/types/category";

const { apiUrl } = useRuntimeConfig();

export const categoryRouter = router({
  listCategories: publicProcedure.query(async () => {
    const response = await $fetch<CategoriesResponse>(
      new URL("categories.php", apiUrl).href,
    );

    const result = categoriesResponseSchema.safeParse(response);

    if (!result.success) {
      throw createError({
        statusCode: 500,
        statusMessage: "Invalid API response format",
        data: result.error,
      });
    }

    return result.data.categories.sort((a, b) => a.name.localeCompare(b.name));
  }),
});
