import PageLayout from "../../../layouts/PageLayout";
import CategoriesEntry from "./CategoriesEntry";

type Props = {
  categories: { strCategory: string; strCategoryThumb: string }[];
};

export const CategoriesPage = ({ categories }: Props) => (
  <PageLayout title="Chef's Categories">
    <ul>
      {categories.map(({ strCategory, strCategoryThumb }, i) => (
        <CategoriesEntry key={i} strCategory={strCategory} strCategoryThumb={strCategoryThumb} />
      ))}
    </ul>
  </PageLayout>
);
