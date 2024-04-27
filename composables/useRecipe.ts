type Recipe = {
  title: string;
  pictureUrl: string;
  videoUrl: string;
  category: string;
  origin: string;
};

export default async function () {
  const { data, error } = await useAsyncData("random", () => {
    const config = useRuntimeConfig();
    return $fetch(`${config.apiUrl}random.php`);
  });

  const tmp = data.value?.meals?.[0];
  const recipe = reactive<Recipe>({
    title: tmp?.strMeal,
    pictureUrl: tmp?.strMealThumb,
    videoUrl: tmp?.strYoutube,
    category: tmp?.strCategory,
    origin: tmp?.strArea,
  });

  return {
    recipe,
    error,
  };
}
