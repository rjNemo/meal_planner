import React, { Component } from "react";
import RandomButton from "../components/RandomButton";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.initState = {};
    this.state = this.initState;
  }
  render() {
    return (
      <div>
        <h1>Get a daily suggestion from the Chef</h1>
        <RandomButton />
      </div>
    );
  }
}
