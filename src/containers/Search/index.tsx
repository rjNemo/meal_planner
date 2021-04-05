import { FC } from "react";
import { useMeal } from "../../store/meal";
import { SearchPage } from "./components/SearchPage";

export const Search: FC = () => {
  const { state } = useMeal();
  return (
    <SearchPage
      searchString={state.searchString}
      searchResults={state.search}
    />
  );
};
