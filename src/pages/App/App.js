import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import LogoutPage from "../LogoutPage/LogoutPage";
import FavesPage from "../FavesPage/FavesPage";
import WatchListPage from "../WatchListPage/WatchListPage";
import HomePage from "../HomePage/HomePage";
import userService from "../../utils/userService";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
    };
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar user={this.state.user} handleLogout={this.handleLogout}/>
        </header>
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
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
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/logout"
            render={() => (
              <LogoutPage
              />
            )}
          />
          <Route
            exact
            path="/faves"
            render={() => (
              <FavesPage
              />
            )}
          />
          <Route
            exact
            path="/watchlist"
            render={() => (
              <WatchListPage
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
