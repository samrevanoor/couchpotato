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
    console.log(this.state);
  }

  render() {
    const { watchlist } = this.state;
    return (
      <div className="WatchListPage-body">
        {watchlist.map((watch, index) => {
          return (
            <div key={index}>
              <MovieCard
                title={watch.title}
                image={watch.image}
                genre={watch.genre}
                year={watch.year}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default WatchListPage;
