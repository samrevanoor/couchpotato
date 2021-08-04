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
