import React, { Component } from "react";
import NavBar from "../Header/NavBar";
import Search from "../Search/Search";

export default class Home extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Search></Search>
      </div>
    );
  }
}
