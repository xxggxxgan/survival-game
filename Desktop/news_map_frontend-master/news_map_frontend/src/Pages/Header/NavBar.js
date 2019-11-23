import React, { Component } from "react";
import { connect } from "react-redux";
import { login, logout } from "../Login/store/actions/loginActions";
import "./css/HeaderStyle.css";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      first_name: "",
      isLogin: false
    };
  }
  componentDidMount() {
    var myStorage = window.localStorage;
    var first_name = myStorage.getItem("first_name");
    var user_id = myStorage.getItem("google_id");
    !user_id ? this.props.logout() : this.props.login();
    this.setState({
      first_name,
      isLogin: this.props.isLogin
    });
  }
  onMouseEnter = e => {
    var mouseEnter = document.getElementById(`${e.target.id}`);
    mouseEnter.style.borderBottom =
      "2px solid" + (e.target.id === "login" ? " #FAB803" : " #333");
  };

  onMouseLeave = e => {
    var mouseEnter = document.getElementById(`${e.target.id}`);
    mouseEnter.style.borderBottom = "2px solid transparent";
  };

  isLogin = isLogin => {
    if (isLogin) {
      return <div></div>;
    } else {
      return (
        <div
          id="signup"
          className="nav-item"
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          Signup
        </div>
      );
    }
  };

  isLoginUserName = isLogin => {
    if (isLogin) {
      return (
        <Link
          id="login"
          className="nav-item login"
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          to="/user"
        >
          {this.state.first_name}
        </Link>
      );
    } else {
      return (
        <Link
          id="login"
          className="nav-item login"
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          to="/login"
        >
          Login
        </Link>
      );
    }
  };

  render() {
    return (
      <div className="header-wrapper">
        <div className="nav">
          <a href="/" className="nav-item logo">
            Beacon
          </a>

          {this.isLoginUserName(this.props.isLogin)}
          {this.isLogin(this.props.isLogin)}

          <a
            href="/"
            id="aboutus"
            className="nav-item"
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          >
            About Us
          </a>
          <a
            href="/"
            id="home"
            className="nav-item"
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          >
            Home
          </a>
        </div>
      </div>
    );
  }
}

NavBar.propTypes = {
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isLogin: state.LoginHandler.isLogin
});

export default connect(mapStateToProps, { login, logout })(NavBar);
