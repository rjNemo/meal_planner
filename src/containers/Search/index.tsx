import { useMeal } from "../../store/meal";
import { SearchPage } from "./components/SearchPage";

export const Search = () => {
  const {
    state: { searchString, search },
  } = useMeal();
  return <SearchPage searchString={searchString} searchResults={search} />;
};
