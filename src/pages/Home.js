import React from "react";
import RandomButton from "../components/RandomButton";

const HomePage = props => {
  return (
    <div className="section background">
      <div
        className="container center-align"
        // styles={{
        //   backgroundImage: `url(require("../images/parallax1.jpg"))`
        // }}
      >
        {/* <img src={require("../images/parallax1.jpg")} alt="" /> */}
        <h1>The Chef's meal suggestions</h1>
        <RandomButton handleClick={props.handleClick} />
      </div>
    </div>
  );
};

export default HomePage;
