import { Link } from "react-router-dom";
import { Meal } from "../../../types/meal";

type Props = {
  meal: Meal;
  handleFavChange: () => void;
};

export const MealPresentation = ({
  meal: { mealName, imgAddress, videoAddress, mealCategory, mealArea, isFav },
  handleFavChange,
}: Props) => {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card orange lighten-1">
          <div className="card-content black-text">
            <span className="card-title">{mealName}</span>
            <img className="responsive-img" src={imgAddress} alt={mealName} />
            <ul>
              <li>
                <div className="chip">
                  <b>Video:</b>
                  <a href={videoAddress} target="blank" rel="noopener">
                    <i className="close material-icons">video_library</i>
                  </a>
                </div>

                <div className="chip">
                  <b>Category: </b> {mealCategory}
                  <Link to={`/categories/${mealCategory}`}>
                    <i className="close material-icons">call_made</i>
                  </Link>
                </div>

                <div className="chip">
                  <b>Origin:</b> {mealArea}
                </div>

                <div className="chip">
                  <b>{isFav ? "Remove from favourites" : "Add to favourites"}:</b>

                  <Link to="#">
                    {"  "}
                    <i className="material-icons tiny" onClick={handleFavChange}>
                      {isFav ? "favorite" : "favorite_border"}
                    </i>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
