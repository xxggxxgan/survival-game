import React, { Component } from "react";
import "./css/Login.css";
import { GoogleLogin } from "react-google-login";
import { login, logout } from "./store/actions/loginActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import {ReactComponent as GoogleSvg} from "../../assets/search.svg";

var common = require("../../Common/common");
var generalFunctions = require("../../Common/error_code");
const axios = require("axios");
var _ = require("lodash");

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
    this.signIn = this.signIn.bind(this);
  }

  signInGoogle(){
    axios
      .get(common.devServer + "/login/google").then(res => {

      })
  }
  signInGithub(){
    axios
      .get(common.devServer + "/login/github").then(res => {

      })
  }
  signInFacebook(){
    axios
      .get(common.devServer + "/login/facebook").then(res => {

      })
  }
  signIn(loginToken, that) {
    console.log(loginToken);
    axios
      .post(common.devServer + "/login", {
        params: loginToken
      })
      .then(function(response) {
        if (!generalFunctions.errorCodeChecker(response.data.errorCode)) {
          alert(response.data.errorMsg);
        } else {
          var myStorage = window.localStorage;
          myStorage.setItem("is_login", true);
          that.props.login();
          that.setState({
            redirect: true
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(function() {});
  }

  responseGoogle = response => {
    this.signIn(response.tokenObj.id_token, this);
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/"}></Redirect>;
    }
    return (
      <div className="login-page">
        <div className="form">
          {/* <form class="register-form">
            <input type="text" placeholder="name" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="email address" />
            <button>create</button>
            <p className="message">
              Already registered? <a href="/">Sign In</a>
            </p>
          </form> */}
          <GoogleLogin
            clientId="225706139693-v189vf0p06va46vth6rjtlrb29ir740e.apps.googleusercontent.com"
            buttonText="Sign in with google"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            icon={true}
            cookiePolicy={"single_host_origin"}
            // redirectUri={"http://localhost:3000"}
            // uxMode="redirect"
            className="google"
          />
          <form className="login-form">
            <input type="text" placeholder="username" />
            <input type="current-password" placeholder="password" />
            <button>login</button>
            <p className="message">
              Not registered? <a href="/">Create an account</a>
            </p>
          </form>
          <GoogleSvg className= "google-Icon" onClick={this.signInGoogle}></GoogleSvg>
          <IoLogoGithub className = "github-Icon" onClick={this.signInGithub}></IoLogoGithub>
          <IoLogoFacebook className = "facebook-Icon" onClick={this.signInFacebook}></IoLogoFacebook>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLogin: state.LoginHandler.isLogin
});

export default connect(mapStateToProps, { login, logout })(Login);
