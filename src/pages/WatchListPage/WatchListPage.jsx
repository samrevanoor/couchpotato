import React, { Component } from "react";
import "../WatchListPage/WatchListPage.css";
import movieDisplay from "../../utils/movieDisplay";
import movieUpdate from "../../utils/movieUpdate";
import MovieCard from "../../components/MovieCard/MovieCard";

class WatchListPage extends Component {
  state = {
    watchlist: [],
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
    this.props.history.push("/faves")
  };

  handleFilterGenre = async (e) => {
    if (e.target.value !== "emptyGenre"){
      await movieDisplay.filterWatchlist(this.props.user, e.target.value);
    } else {
      const result = await movieDisplay.getWatchlist(this.props.user);
      this.setState({
        watchlist: result,
      });
    }
  }

  render() {
    const { watchlist } = this.state;
    let display;
    if (!watchlist.length) {
      display = (
        <div className="WatchListPage-nomovies">
          you don't have any movies in your watch list yet!
        </div>
      );
    } else {
      display = (
        <div className="WatchListPage-body">
          <div>
            <label>filter by genre</label>
            <select
                name="genre"
                onChange={(e) => this.handleFilterGenre(e)}
              >
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
      );
    }
    return <div className="WatchListPage-body">{display}</div>;
  }
}

export default WatchListPage;
