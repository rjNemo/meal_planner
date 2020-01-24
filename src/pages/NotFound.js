import React, { Component } from "react";

export default class NotFoundPage extends Component {
  constructor(props) {
    super(props);
    this.initState = {};
    this.state = this.initState;
  }
  render() {
    return (
      <div>
        <p>404 Not Found</p>
      </div>
    );
  }
}
