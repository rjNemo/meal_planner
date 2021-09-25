import { Link, useRouteMatch } from "react-router-dom";

type Props = {
  strCategory: string;
  strCategoryThumb: string;
};

const CategoriesEntry = ({ strCategory, strCategoryThumb }: Props) => {
  const { url } = useRouteMatch();

  return (
    <Link to={`${url}/${strCategory}`}>
      <li>
        <div className="row">
          <div className="col s12">
            <div className="card horizontal hoverable">
              <div className="card-image valign-wrapper">
                <img src={strCategoryThumb} alt={strCategory} />
              </div>
              <div className="card-stacked">
                <div className="card-content black-text">
                  <h2 className="logo">{strCategory}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default CategoriesEntry;
