import { FC } from "react";
import BreakfastImage from "../../../images/breakfast.svg";
import PageLayout from "../../../layouts/PageLayout";
import { MealSummary } from "../../../types/meal";
import { SearchResult } from "./SearchResult";

type Props = {
  searchString: string;
  searchResults: MealSummary[];
};

export const SearchPage: FC<Props> = ({ searchString, searchResults }) => (
  <PageLayout title={`Results for: ${searchString}`}>
    {!searchResults ? (
      <div className="center-align">
        <p>
          No results to display, instead there is a picture of my breakfast.
        </p>
        <img src={BreakfastImage} alt="Nothing here!" width="70%" />
      </div>
    ) : (
      <div className="row">
        <ul>
          {searchResults.map((meal, i) => (
            <SearchResult key={i} meal={meal} />
          ))}
        </ul>
      </div>
    )}
  </PageLayout>
);
