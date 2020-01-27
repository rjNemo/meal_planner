import React from "react";
import RandomButton from "../components/RandomButton";

const HomePage = props => {
  return (
    <div className="section ">
      <div className="container ">
        <div className="row">
          <div className="col s12 m6">
            <h1>The Chef's Meal Suggestions</h1>
            <RandomButton
              handleClick={props.handleClick}
              url={props.buttonUrl}
            />
          </div>
          <div className="col s12 m6">
            <img
              // src={require("../images/breakfast.svg")}
              // src={require("../images/Chef.svg")}
              src={require("../images/healthy_options.svg")}
              // src={require("../images/special_event.svg")}
              alt="hero_image"
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
