import React, { Component } from "react";
import "../WatchListPage/WatchListPage.css";
import movieDisplay from "../../utils/movieDisplay";
import movieUpdate from "../../utils/movieUpdate";
import MovieCard from "../../components/MovieCard/MovieCard";

class WatchListPage extends Component {
  state = {
    watchlist: [],
    message: "",
  };

  async componentDidMount() {
    const result = await movieDisplay.getWatchlist(this.props.user);
    this.setState({
      watchlist: result,
    });
  }

  handleDeleteButtonClick = async (id) => {
    const result = await movieUpdate.deleteMovieFromWatchlist(id);
    this.setState({
      watchlist: result[0],
    });
  };

  handleMoveButtonClick = async (id) => {
    const result = await movieUpdate.moveFromWatchlistFromFaves(id);
    this.setState({
      watchlist: result,
    });
    this.props.history.push("/faves");
  };

  handleFilterGenre = async (e) => {
    if (e.target.value !== "emptyGenre") {
      const result = await movieDisplay.filterWatchlist(
        this.props.user,
        e.target.value
      );
      if (result.length >= 1) {
        this.setState({
          watchlist: result,
          message: "",
        });
      } else {
        this.setState({
          message:
            "you don't have any movies in your watchlist under this genre. try another!",
        });
      }
    } else {
      const result = await movieDisplay.getWatchlist(this.props.user);
      this.setState({
        watchlist: result,
      });
    }
  };

  render() {
    const { watchlist } = this.state;
    let display;
    if (!watchlist.length) {
      display = (
        <div className="WatchlistPage-body">
          <div className="WatchlistPage-nomovies">
            you don't have any movies in your watch list yet!
          </div>
        </div>
      );
    } else if (this.state.message) {
      display = (
        <div className="WatchlistPage-body">
          <div className="WatchlistPage-filter">
            <label>filter by genre</label>
            <select name="genre" onChange={(e) => this.handleFilterGenre(e)}>
              <option value="emptyGenre"></option>
              <option value="28">action</option>
              <option value="12">adventure</option>
              <option value="16">animation</option>
              <option value="35">comedy</option>
              <option value="80">crime</option>
              <option value="99">documentary</option>
              <option value="18">drama</option>
              <option value="10751">family</option>
              <option value="14">fantasy</option>
              <option value="36">history</option>
              <option value="27">horror</option>
              <option value="10402">music</option>
              <option value="9648">mystery</option>
              <option value="10749">romance</option>
              <option value="878">science fiction</option>
              <option value="53">thriller</option>
              <option value="10770">tv movie</option>
              <option value="10752">war</option>
              <option value="37">western</option>
            </select>
          </div>
          <div className="WatchlistPage-nomovies">{this.state.message}</div>
        </div>
      );
    } else {
      display = (
        <div>
          <div className="WatchlistPage-filter">
            <label>filter by genre</label>
            <select name="genre" onChange={(e) => this.handleFilterGenre(e)}>
              <option value="emptyGenre"></option>
              <option value="28">action</option>
              <option value="12">adventure</option>
              <option value="16">animation</option>
              <option value="35">comedy</option>
              <option value="80">crime</option>
              <option value="99">documentary</option>
              <option value="18">drama</option>
              <option value="10751">family</option>
              <option value="14">fantasy</option>
              <option value="36">history</option>
              <option value="27">horror</option>
              <option value="10402">music</option>
              <option value="9648">mystery</option>
              <option value="10749">romance</option>
              <option value="878">science fiction</option>
              <option value="53">thriller</option>
              <option value="10770">tv movie</option>
              <option value="10752">war</option>
              <option value="37">western</option>
            </select>
          </div>
          <div className="WatchlistPage-body">
            {watchlist.map((watch, index) => {
              return (
                <div key={watch.tmdbId}>
                  <MovieCard
                    {...this.props}
                    title={watch.title}
                    image={watch.image}
                    genre={watch.genreList}
                    year={watch.year}
                    plot={watch.plot}
                    tmdbId={watch.tmdbId}
                    imdb={watch.imdb}
                    id={watch._id}
                    handleDeleteButtonClick={this.handleDeleteButtonClick}
                    handleMoveButtonClick={this.handleMoveButtonClick}
                  />
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    return <div>{display}</div>;
  }
}

export default WatchListPage;
