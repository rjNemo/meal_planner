import React from "react";
import RandomButton from "../components/RandomButton";

const HomePage = props => {
  return (
    <div className="section background">
      <div className="container center-align">
        <h1>The Chef's Meal Suggestions</h1>
        <RandomButton handleClick={props.handleClick} url={props.buttonUrl} />
      </div>
    </div>
  );
};

export default HomePage;
