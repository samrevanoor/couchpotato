import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
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
      genre: "",
      startYear: "",
      endYear: "",
    };
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleGeneratorFormChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleGeneratorFormSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(this.state);
      this.props.history.push("/result");
    } catch (err) {
      console.log(err);
    }
  };

  // handleNewGeneratorForm => reset state; passes to navbar, passes to "/" Links

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar
            {...this.props}
            user={this.state.user}
            handleLogout={this.handleLogout}
          />
        </header>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <HomePage
                {...props}
                user={this.state.user}
                genre={this.state.genre}
                startYear={this.state.startYear}
                endYear={this.state.endYear}
                handleGeneratorFormSubmit={this.handleGeneratorFormSubmit}
                handleGeneratorFormChange={this.handleGeneratorFormChange}
              />
            )}
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
          <Route
            exact
            path="/result"
            render={(props) =>
              this.state.genre ? (
                <MovieResultPage
                  {...props}
                  user={this.state.user}
                  genre={this.state.genre}
                  startYear={this.state.startYear}
                  endYear={this.state.endYear}
                />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            exact
            path="/faves"
            render={(props) =>
              userService.getUser() ? (
                <FavesPage {...props} user={this.state.user._id} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/watchlist"
            render={(props) =>
              userService.getUser() ? (
                <WatchListPage {...props} user={this.state.user._id} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
