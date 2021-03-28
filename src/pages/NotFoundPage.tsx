import React from "react";
import { RandomButton } from "../components/RandomButton";

export const NotFoundPage = ({handleClick}) => {
  return (
    <div className="container center-align">
      <div className="row">
        <h1>Wrong Way!</h1>
        <div className="col s12 offset-m3 m6">
          <div className="card hoverable">
            <div className="card-image">
              <img
                className="responsive-img"
                src="https://images.otstatic.com/prod/26153735/2/large.jpg"
                alt="404 not found"
              />
            </div>
            <div className="card-content">
              <RandomButton url="/random" handleClick={handleClick} color={null}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
