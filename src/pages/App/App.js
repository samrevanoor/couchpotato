import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import LogoutPage from "../LogoutPage/LogoutPage";
import FavesPage from "../FavesPage/FavesPage";
import WatchListPage from "../WatchListPage/WatchListPage";
import HomePage from "../HomePage/HomePage";
import userService from "../../utils/userService";
import "./App.css";
import MovieResultPage from "../MovieResultPage/MovieResultPage";

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
          <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        </header>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <HomePage user={this.state.user} />}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) =>
              userService.getUser() ? (
                <Redirect to="/" />
              ) : (
                <SignupPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )
            }
          />
          <Route
            exact
            path="/login"
            render={({ history }) =>
              userService.getUser() ? (
                <Redirect to="/" />
              ) : (
                <LoginPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )
            }
          />
          <Route exact path="/logout" render={() => <LogoutPage />} />
          <Route exact path="/result" render={() => <MovieResultPage />} />
          <Route
            exact
            path="/faves"
            render={() =>
              userService.getUser() ? <FavesPage /> : <Redirect to="/login" />
            }
          />
          <Route
            exact
            path="/watchlist"
            render={() =>
              userService.getUser() ? (
                <WatchListPage />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </Switch>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
