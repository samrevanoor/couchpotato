import React, { Component } from "react";
import "../WatchListPage/WatchListPage.css";
import movieDisplay from "../../utils/movieDisplay";
import MovieCard from "../../components/MovieCard/MovieCard";

class WatchListPage extends Component {
  state = {
    watchlist: [],
  };

  async componentDidMount() {
    const result = await movieDisplay.getWatchlist();
    this.setState({
      watchlist: result,
    });
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
          {watchlist.map((watch, index) => {
            return (
              <div key={watch.tmdbId}>
                <MovieCard
                  title={watch.title}
                  image={watch.image}
                  genre={watch.genreList}
                  year={watch.year}
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
