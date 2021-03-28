import { FC } from "react";
import { CardEntry } from "../../../components/CardEntry";
import { MealSummary } from "../../../types/meal";

type Props = {
  meal: MealSummary;
};

export const SearchResult: FC<Props> = ({ meal }) => <CardEntry meal={meal} />;
