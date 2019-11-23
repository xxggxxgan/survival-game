import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/" exact component={Home}></Route>
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
