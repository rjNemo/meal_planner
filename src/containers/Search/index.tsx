import { FC } from "react";
import { MealSummary } from "../../types/meal";
import { SearchPage } from "./components/SearchPage";

type Props = {
  searchString: string;
  searchResults: { meals: MealSummary[] };
};

export const Search: FC<Props> = ({ searchString, searchResults }) => (
  <SearchPage searchString={searchString} searchResults={searchResults} />
);
