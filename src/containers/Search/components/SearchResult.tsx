import { CardEntry } from "../../../components/CardEntry";
import { MealSummary } from "../../../types/meal";

type Props = { meal: MealSummary };

export const SearchResult = ({ meal }: Props) => <CardEntry meal={meal} />;
