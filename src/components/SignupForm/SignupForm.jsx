import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../../utils/userService";
import "./SignupForm.css";

class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConf: "",
  };

  handleChange = (e) => {
    this.props.updateMessage("");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push("/");
    } catch (err) {
      this.props.updateMessage(err.message);
    }
  };

  isFormInvalid() {
    return !(
      this.state.name &&
      this.state.email &&
      this.state.password === this.state.passwordConf
    );
  }

  render() {
    return (
      <div className="SignupForm-body">
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="SignupForm-form">
            <input
              type="text"
              placeholder="first name"
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
              maxLength="30"
            />
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
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
            />
            <input
              type="password"
              placeholder="confirm password"
              value={this.state.passwordConf}
              name="passwordConf"
              onChange={this.handleChange}
            />

            <div className="col-sm-12 text-center">
              <button
                className="btn btn-default SignupForm-button"
                disabled={this.isFormInvalid()}
              >
                sign up
              </button>
              &nbsp;&nbsp;
              <Link to="/">
                <button className="btn btn-default SignupForm-button">
                  cancel
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
