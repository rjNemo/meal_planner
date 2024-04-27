type Recipe = {
  title: string;
  pictureUrl: string;
  videoUrl: string;
  category: string;
  origin: string;
};

export default async function () {
  const { data, pending, error } = await useAsyncData(
    "random",
    () => {
      const config = useRuntimeConfig();
      return $fetch(`${config.apiUrl}random.php`);
    },
    { lazy: true },
  );

  const tmp = computed(() => data.value?.meals?.[0]);

  const recipe = reactive<Recipe>({
    title: tmp.value.strMeal,
    pictureUrl: tmp.value.strMealThumb,
    videoUrl: tmp.value.strYoutube,
    category: tmp.value.strCategory,
    origin: tmp.value.strArea,
  });

  return {
    recipe,
    pending,
    error,
  };
}
