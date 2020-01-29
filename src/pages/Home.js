import React from "react";
import { RandomButton } from "../components/RandomButton";

export const HomePage = props => {
  return (
    <div className="section ">
      <div className="container ">
        <div className="row">
          <div className="col s12 m6">
            <h1>The Chef's Meal Suggestions</h1>
            <RandomButton url={props.buttonUrl} size="large" />
          </div>
          <div className="col s12 m6">
            <img
              src={require("../images/healthy_options.svg")}
              alt="hero_image"
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
