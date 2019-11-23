import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import "./css/SearchStyle.css";

const axios = require("axios");

export default class SearchBar extends Component {
  state = {
    searchContent: ""
  };
  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });
  onSubmit = e => {
    e.preventDefault();
    this.setState({
      searchContent: ""
    });
    axios
      .get("/search", {
        port: 3000,
        params: {
          searchContent: this.state.searchContent
        }
      })
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  };

  render() {
    return (
      <div className="searchWrapper">
        <p className="text bold">The Best Place</p>
        <p className="text">to Know Everything</p>
        <form onSubmit={this.onSubmit}>
          <Icon className="icon">search</Icon>
          <input
            className="input"
            type="value"
            name="searchContent"
            placeholder="Type and Search"
            value={this.state.searchContent}
            onChange={this.onChange}
          ></input>
        </form>
      </div>
    );
  }
}
