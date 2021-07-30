import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage'
import HomePage from '../HomePage/HomePage'
// import userService from "../../utils/userService";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // user: userService.getUser(),
    };
  }

  handleSignupOrLogin = () => {
    // this.setState({ user: userService.getUser() });
    console.log("user")
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <NavBar />
        </header>
        <Switch>
        <Route
            exact
            path="/"
            render={() => (
              <HomePage />
            )}
          />
        <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
