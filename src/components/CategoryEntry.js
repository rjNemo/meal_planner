import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const CategoryEntry = props => {
  const {
    strCategory,
    strCategoryThumb,
    strCategoryDescription
  } = props.category;

  const { url } = useRouteMatch();

  return (
    // <CardEntry item={meal} />
    <Link to={`${url}${strCategory}`}>
      <li>
        <div className="row">
          <div className="col s12">
            <div className="card horizontal">
              <div className="card-image">
                <img src={strCategoryThumb} alt={strCategory} />
                {/* <span className="card-title red-text">{strCategory}</span> */}
              </div>
              <div className="card-stacked">
                <div className="card-content black-text">
                  <h4>{strCategory}</h4>
                  <p>{strCategoryDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default CategoryEntry;
