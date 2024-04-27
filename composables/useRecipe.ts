type Recipe = {
  title: string;
  pictureUrl: string;
  videoUrl: string;
  category: string;
  origin: string;
  ingredients: { name: string; quantitiy: number };
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

  let names = [];
  let quantities = [];
  let i = 0;
  for (const [k, v] of Object.entries(tmp.value)) {
    if (k.startsWith("strIngredient") && !!v) {
      names.push(v);
    } else if (k.startsWith("strMeasure") && !!v) {
      quantities.push(v);
    }
    i++;
  }

  const recipe = reactive<Recipe>({
    title: tmp.value.strMeal,
    pictureUrl: tmp.value.strMealThumb,
    videoUrl: tmp.value.strYoutube,
    category: tmp.value.strCategory,
    origin: tmp.value.strArea,
    ingredients: names.map((name, i) => ({ name, quantity: quantities[i] })),
  });

  return {
    recipe,
    pending,
    error,
  };
}
