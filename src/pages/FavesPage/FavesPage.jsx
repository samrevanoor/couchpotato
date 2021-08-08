import React, { Component } from "react";
import "../FavesPage/FavesPage.css";
import movieDisplay from "../../utils/movieDisplay";
import MovieCard from "../../components/MovieCard/MovieCard";
import movieUpdate from "../../utils/movieUpdate";

class FavesPage extends Component {
  state = {
    faves: [],
    message: "",
  };

  async componentDidMount() {
    const result = await movieDisplay.getFaves(this.props.user);
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

  handleFilterGenre = async (e) => {
    if (e.target.value !== "emptyGenre") {
      const result = await movieDisplay.filterFaves(
        this.props.user,
        e.target.value
      );
      if (result.length >= 1) {
        this.setState({
          faves: result,
          message: "",
        });
      } else {
        this.setState({
          message:
            "you don't have any movies in your faves under this genre. try another!",
        });
      }
    } else {
      const result = await movieDisplay.getFaves(this.props.user);
      this.setState({
        faves: result,
      });
    }
  };

  render() {
    const { faves } = this.state;
    let display;
    if (!faves.length) {
      display = (
        <div className="FavesPage-body">
          <div className="FavesPage-nomovies">
            you don't have any favourites yet!
          </div>
        </div>
      );
    } else if (this.state.message) {
      display = (
        <div className="FavesPage-body">
          <div className="FavesPage-filter">
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
          <div className="FavesPage-nomovies">{this.state.message}</div>
        </div>
      );
    } else {
      display = (
        <div>
          <div className="FavesPage-filter">
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
          <div className="FavesPage-body">
            {faves.map((fave, index) => {
              return (
                <div key={fave.tmdbId}>
                  <MovieCard
                    {...this.props}
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
        </div>
      );
    }
    return <div>{display}</div>;
  }
}

export default FavesPage;
