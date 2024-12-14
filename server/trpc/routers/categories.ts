import { publicProcedure, router } from "../trpc";

const { apiUrl } = useRuntimeConfig();

type Category = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

export const categoryRouter = router({
  listCategories: publicProcedure.query(async () => {
    const data = await $fetch<{ categories: Category[] }>(
      new URL("categories.php", apiUrl).toString(),
    );

    if (!data?.categories) {
      throw createError({
        statusCode: 500,
        statusMessage: "Failed to fetch categories",
      });
    }

    return data.categories;
  }),
});
