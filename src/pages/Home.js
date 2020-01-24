import React from "react";
import RandomButton from "../components/RandomButton";

const HomePage = props => {
  return (
    <div className="section">
      <div className="container center-align">
        <h1>The Chef's meal suggestions</h1>
        <RandomButton handleClick={props.handleClick} />
      </div>
    </div>
  );
};

export default HomePage;
