import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import userService from "../../utils/userService";
import image from "../SignupPage/couchimage.png";

class LoginPage extends Component {
  state = {
    email: "",
    pw: "",
    message: "",
  };

  updateMessage = (msg) => {
    this.setState({ message: msg });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push("/");
    } catch (err) {
      this.updateMessage("Invalid credentials!");
    }
  };

  render() {
    return (
      <div className="LoginPage">
        <div className="LoginPage-body">
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <div className="LoginPage-form">
              <input
                type="email"
                placeholder="email"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
              />
              <input
                type="password"
                placeholder="password"
                value={this.state.pw}
                name="pw"
                onChange={this.handleChange}
              />
              <button className="btn btn-default LoginPage-button">log in</button>
              &nbsp;&nbsp;&nbsp;
              <Link to="/">
                <button className="btn btn-default LoginPage-button">cancel</button>
              </Link>
            </div>
          </form>
          <p>{this.state.message}</p>
        </div>
        <img src={image} alt="couch" width="400px" />
      </div>
    );
  }
}

export default LoginPage;
