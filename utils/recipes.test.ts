import { describe, expect, it } from "vitest";
import type { Recipe } from "~/types/recipe";
import { parseRecipeData } from "~/utils/recipes";

const sampleApiResponse = {
  meals: [
    {
      idMeal: "52915",
      strMeal: "French Omelette",
      strDrinkAlternate: null,
      strCategory: "Miscellaneous",
      strArea: "French",
      strInstructions:
        "Get everything ready. Warm a 20cm (measured across the top) non-stick frying pan on a medium heat. Crack the eggs into a bowl and beat them with a fork so they break up and mix, but not as completely as you would for scrambled egg. With the heat on medium-hot, drop one knob of butter into the pan. It should bubble and sizzle, but not brown. Season the eggs with the Parmesan and a little salt and pepper, and pour into the pan.\r\nLet the eggs bubble slightly for a couple of seconds, then take a wooden fork or spatula and gently draw the mixture in from the sides of the pan a few times, so it gathers in folds in the centre. Leave for a few seconds, then stir again to lightly combine uncooked egg with cooked. Leave briefly again, and when partly cooked, stir a bit faster, stopping while there’s some barely cooked egg left. With the pan flat on the heat, shake it back and forth a few times to settle the mixture. It should slide easily in the pan and look soft and moist on top. A quick burst of heat will brown the underside.\r\nGrip the handle underneath. Tilt the pan down away from you and let the omelette fall to the edge. Fold the side nearest to you over by a third with your fork, and keep it rolling over, so the omelette tips onto a plate – or fold it in half, if that’s easier. For a neat finish, cover the omelette with a piece of kitchen paper and plump it up a bit with your fingers. Rub the other knob of butter over to glaze. Serve immediately.",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/yvpuuy1511797244.jpg",
      strTags: "Egg",
      strYoutube: "https://www.youtube.com/watch?v=qXPhVYpQLPA",
      strIngredient1: "Eggs",
      strIngredient2: "Butter",
      strIngredient3: "Parmesan",
      strIngredient4: "Tarragon",
      strIngredient5: "Parsley",
      strIngredient6: "Chives",
      strIngredient7: "Gruyère",
      strIngredient8: "",
      strIngredient9: "",
      strIngredient10: "",
      strIngredient11: "",
      strIngredient12: "",
      strIngredient13: "",
      strIngredient14: "",
      strIngredient15: "",
      strIngredient16: "",
      strIngredient17: "",
      strIngredient18: "",
      strIngredient19: "",
      strIngredient20: "",
      strMeasure1: "3",
      strMeasure2: "2 knobs",
      strMeasure3: "1 tsp",
      strMeasure4: "3 chopped",
      strMeasure5: "1 tbs chopped",
      strMeasure6: "1 tbs chopped",
      strMeasure7: "4 tbs",
      strMeasure8: "",
      strMeasure9: "",
      strMeasure10: "",
      strMeasure11: "",
      strMeasure12: "",
      strMeasure13: "",
      strMeasure14: "",
      strMeasure15: "",
      strMeasure16: "",
      strMeasure17: "",
      strMeasure18: "",
      strMeasure19: "",
      strMeasure20: "",
      strSource:
        "https://www.bbcgoodfood.com/recipes/1669/ultimate-french-omelette",
      strImageSource: null,
      strCreativeCommonsConfirmed: null,
      dateModified: null,
    },
  ],
};

describe("parseRecipeData", () => {
  it("should parse the API response into the Recipe type", () => {
    const expectedResult: Recipe[] = [
      {
        title: "French Omelette",
        pictureUrl:
          "https://www.themealdb.com/images/media/meals/yvpuuy1511797244.jpg",
        videoUrl: "https://www.youtube.com/watch?v=qXPhVYpQLPA",
        category: "Miscellaneous",
        origin: "French",
        ingredients: [
          { name: "Eggs", quantity: "3" },
          { name: "Butter", quantity: "2 knobs" },
          { name: "Parmesan", quantity: "1 tsp" },
          { name: "Tarragon", quantity: "3 chopped" },
          { name: "Parsley", quantity: "1 tbs chopped" },
          { name: "Chives", quantity: "1 tbs chopped" },
          { name: "Gruyère", quantity: "4 tbs" },
        ],
        instructions:
          "Get everything ready. Warm a 20cm (measured across the top) non-stick frying pan on a medium heat. Crack the eggs into a bowl and beat them with a fork so they break up and mix, but not as completely as you would for scrambled egg. With the heat on medium-hot, drop one knob of butter into the pan. It should bubble and sizzle, but not brown. Season the eggs with the Parmesan and a little salt and pepper, and pour into the pan.\r\nLet the eggs bubble slightly for a couple of seconds, then take a wooden fork or spatula and gently draw the mixture in from the sides of the pan a few times, so it gathers in folds in the centre. Leave for a few seconds, then stir again to lightly combine uncooked egg with cooked. Leave briefly again, and when partly cooked, stir a bit faster, stopping while there’s some barely cooked egg left. With the pan flat on the heat, shake it back and forth a few times to settle the mixture. It should slide easily in the pan and look soft and moist on top. A quick burst of heat will brown the underside.\r\nGrip the handle underneath. Tilt the pan down away from you and let the omelette fall to the edge. Fold the side nearest to you over by a third with your fork, and keep it rolling over, so the omelette tips onto a plate – or fold it in half, if that’s easier. For a neat finish, cover the omelette with a piece of kitchen paper and plump it up a bit with your fingers. Rub the other knob of butter over to glaze. Serve immediately.",
      },
    ];

    const result = parseRecipeData(sampleApiResponse);
    expect(result).toEqual(expectedResult);
  });
});
