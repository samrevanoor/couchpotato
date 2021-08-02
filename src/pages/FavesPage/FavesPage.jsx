import React, { Component } from "react";
import "../FavesPage/FavesPage.css";
import movieDisplay from "../../utils/movieDisplay";
import MovieCard from "../../components/MovieCard/MovieCard";
import movieUpdate from "../../utils/movieUpdate";

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

  handleDeleteButtonClick = async (id) => {
    const result = await movieUpdate.deleteMovieFromFaves(id);
    this.setState({
      faves: result[0],
    });
  };

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
                  genre={fave.genreList}
                  year={fave.year}
                  plot={fave.plot}
                  tmdbId={fave.tmdbId}
                  imdb={fave.imdb}
                  id={fave._id}
                  handleDeleteButtonClick={this.handleDeleteButtonClick}
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
