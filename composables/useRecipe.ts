type Recipe = {
  title: string;
  pictureUrl: string;
  videoUrl: string;
  category: string;
  origin: string;
  ingredients: { name: string; quantitiy: number };
  instructions: string;
};

type Keyword = "random" | "filter" | "lookup" | "search";
export default async function (keyword: Keyword, param?: string) {
  const { data, pending, error } = await useAsyncData(
    keyword,
    async () => {
      const config = useRuntimeConfig();

      let url = "";

      switch (keyword) {
        case "random":
          url = `${config.apiUrl}random.php`;
          break;
        case "filter":
          url = "";
          break;
        case "lookup":
          url = `${config.apiUrl}${keyword}.php?i=${param}`;
          break;
        case "search":
          url = "";
          break;
        default:
          throw Error("unexpected URI parameters");
      }
      return await $fetch(url);
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
    instructions: tmp.value.strInstructions,
  });

  return {
    recipe,
    pending,
    error,
  };
}