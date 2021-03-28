import { FC } from "react";
import { CardEntry } from "../../../components/CardEntry";
import PageLayout from "../../../layouts/PageLayout";
import { MealSummary } from "../../../types/meal";

type Props = {
  meals: { meals: MealSummary[] };
  strCategory: string;
};

export const CategoryPage: FC<Props> = ({ meals, strCategory }) => (
  <PageLayout title={`Chef's ${strCategory} Recipes`}>
    <ul>
      <div className="row">
        {meals.meals.map((meal) => (
          <CardEntry meal={meal} key={meal.idMeal} />
        ))}
      </div>
    </ul>
  </PageLayout>
);
