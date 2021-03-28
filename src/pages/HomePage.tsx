import React from "react";
import { RandomButton } from "../components/RandomButton";

export const HomePage = ({ buttonUrl }) => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col s12 m6">
          <h1 className="logo">Chef's Online Cookbook</h1>
          <RandomButton url={buttonUrl} size="large" color="orange darken-2" handleClick={()=>{}}/>
        </div>
        <div className="col s12 m6">
          <img
            src={require("../images/chef.svg")}
            alt="hero_image"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};
