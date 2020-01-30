import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const CategoryEntry = props => {
  const {
    strCategory,
    strCategoryThumb
    // strCategoryDescription
  } = props.category;

  const { url } = useRouteMatch();

  return (
    // <CardEntry item={meal} />
    <Link to={`${url}/${strCategory}`}>
      <li>
        <div className="row">
          <div className="col s12">
            <div className="card horizontal hoverable">
              <div className="card-image valign-wrapper">
                <img
                  // className="responsive-img"
                  src={strCategoryThumb}
                  alt={strCategory}
                />
              </div>
              <div className="card-stacked">
                <div className="card-content black-text">
                  <h2 className="logo">{strCategory}</h2>
                  {/* <p>{strCategoryDescription}</p> */}
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
