import React, { Component } from "react";
import SearchResultList from "../components/SearchResultList";

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.initState = {};
    this.state = this.initState;
  }
  render() {
    return (
      <div>
        <h1>Search Results</h1>
        <SearchResultList />
      </div>
    );
  }
}
