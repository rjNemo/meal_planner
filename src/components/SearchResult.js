import React from "react";
import { Link } from "react-router-dom";

const SearchResult = props => {
  const { meal } = props;
  const { idMeal, strMeal, strMealThumb } = meal;

  return (
    <Link to={`${idMeal}`}>
      <li>
        <div className="row">
          <div className="col s12 m6">
            <div className="card ">
              <div className="card-image">
                <img src={strMealThumb} alt={strMeal} />
                {/* <span className="card-title ">{strMeal}</span> */}
              </div>
              <div class="card-content">
                <h4>{strMeal}</h4>
              </div>
              {/* <div className="card-stacked">
              <div className="card-content black-text">
                <p>{strCategoryDescription}</p>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default SearchResult;
