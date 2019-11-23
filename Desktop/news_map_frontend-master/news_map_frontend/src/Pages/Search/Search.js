import React, { Component } from "react";
import SearchBar from "./SearchBar";
import searchImg from "../../assets/search.png";

export default class Search extends Component {
  render() {
    return (
      <div className="Wrapper">
        <SearchBar></SearchBar>
        <img className="image" src={searchImg} alt="fireSpot" />
      </div>
    );
  }
}
