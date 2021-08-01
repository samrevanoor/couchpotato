import React, { Component } from "react";
import "../FavesPage/FavesPage.css";
import movieDisplay from "../../utils/movieDisplay";
import MovieCard from "../../components/MovieCard/MovieCard";

class FavesPage extends Component {
  state = {
    faves: [],
  };

  async componentDidMount() {
    const result = await movieDisplay.getFaves();
    this.setState({
      faves: result,
    });
  }

  render() {
    const { faves } = this.state;
    let display;
    if (!faves.length) {
      display = (
        <div className="FavesPage-nomovies">
          you don't have any favourites yet!
        </div>
      );
    } else {
      display = (
        <div className="FavesPage-body">
          {faves.map((fave, index) => {
            return (
              <div key={fave.tmdbId}>
                <MovieCard
                  title={fave.title}
                  image={fave.image}
                  genre={fave.genre}
                  year={fave.year}
                />
              </div>
            );
          })}
        </div>
      );
    }
    return <div className="FavesPage-body">{display}</div>;
  }
}

export default FavesPage;
