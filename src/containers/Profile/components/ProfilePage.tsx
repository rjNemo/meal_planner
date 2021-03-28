import { FC } from "react";
import { CardEntry } from "../../../components/CardEntry";
import { MealSummary } from "../../../types/meal";

type Props = {
  user: any;
  meals: MealSummary[];
};

export const ProfilePage: FC<Props> = ({ user, meals }) => {
  return (
    <div className="container">
      <div className="row valign-wrapper">
        <img
          className="left circle responsive-img"
          src={user.picture}
          alt="Avatar"
          width="15%"
        />
        <h2 className="col s9">{user.name}</h2>
      </div>
      <div className="row">
        <b>Email: </b>
        {user.email}
        <h3>Favourites meals</h3>
        <ul>
          {meals?.map((meal) => (
            <CardEntry key={meal.idMeal} meal={meal} />
          ))}
        </ul>
      </div>
    </div>
  );
};
