import React from "react";
import { RandomButton } from "../../components/RandomButton";
import HeroImage from "../../images/chef.svg";

export const Home = () => {
  const buttonUrl = "/random";
  return (
    <section className="container ">
      <div className="row">
        <div className="col s12 m6">
          <h1 className="logo">Chef's Online Cookbook</h1>
          <RandomButton
            url={buttonUrl}
            size="large"
            color="orange darken-2"
            handleClick={() => {}}
          />
        </div>
        <picture className="col s12 m6">
          <img src={HeroImage} alt="hero_image" width="100%" />
        </picture>
      </div>
    </section>
  );
};
