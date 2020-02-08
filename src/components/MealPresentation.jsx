import React from "react";
import { Link } from "react-router-dom";

export const MealPresentation = props => {
  const {
    mealName,
    imgAddress,
    videoAddress,
    mealCategory,
    mealArea
  } = props.meal;
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
                  <a href={videoAddress} target="blank">
                    <i className="close material-icons">video_library</i>
                  </a>
                </div>
                {/* </li>

              <li> */}
                <div className="chip">
                  <b>Category: </b> {mealCategory}
                  <Link to={`/categories/${mealCategory}`}>
                    <i className="close material-icons">call_made</i>
                  </Link>
                </div>
                {/* </li>
              <li> */}
                <div className="chip">
                  <b>Origin:</b> {mealArea}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
