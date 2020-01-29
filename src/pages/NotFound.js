import React from "react";
import { RandomButton } from "../components/RandomButton";

export const NotFoundPage = props => {
  return (
    <div className="section">
      <div className="container center-align">
        <h1>Wrong Way!</h1>
        <img
          src="https://images.otstatic.com/prod/26153735/2/large.jpg"
          alt="404 not found"
        />
        <div className="row">
          <RandomButton handleClick={props.handleClick} />
        </div>
      </div>
    </div>
  );
};
