import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../MovieResultPage/MovieResultPage.css";
import MovieResult from "../../components/MovieResult/MovieResult";
import { search } from "../../utils/movieRandomizer";
// import getGenreName from "../../utils/getGenre"
import movieSave from "../../utils/movieSave";
import loading from "./loading.gif"

class MovieResultPage extends Component {
  state = {
    title: "",
    genreList: "",
    year: "",
    plot: "",
    image: "",
    tmdbId: "",
    imdb: "",
    movie: false,
  };

  async componentDidMount() {
    const result = await search(this.props);
    if (result) {
      const BASE_URL = "https://image.tmdb.org/t/p/w500";
      this.setState({
        title: result.title,
        genreList: result.genres.map((genre) => genre.name).join(", "),
        year: result.release_date.substr(0, 4),
        plot: result.overview,
        image: `${BASE_URL}${result.poster_path}`,
        tmdbId: result.id,
        imdb: result.imdb_id,
        movie: true,
      });
    } else {
      console.log("no movie");
    }
  }

  handleAddToFaves = async (e) => {
    try {
      await movieSave.addMovieToFaves(this.state);
    } catch (err) {
      console.log(err);
    }
  };

  handleAddToWatchList = async (e) => {
    try {
      await movieSave.addMovieToWatchlist(this.state);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { title, genreList, year, plot, image, tmdbId, imdb, movie } = this.state;
    let display;
    if (!movie) {
      display = <div className="MovieResultPage-body">
        <img src={loading} alt="loading ..."/>
      </div>;
    } else {
      display = (
        <div className="MovieResultPage-body">
          <MovieResult
            title={title}
            genre={genreList}
            year={year}
            plot={plot}
            image={image}
            tmdbId={tmdbId}
            imdb={imdb}
          />
          {!this.props.user ? (
            <p>
            ps: if you sign up for an account, you can save movies to your
            account to watch later!
            </p>
          ) : (
            <p>
              {/* TO DO */}
              <Link to="/">back</Link>&nbsp; | &nbsp;
              <Link to="/faves" onClick={(e) => this.handleAddToFaves(e)}>
                add to faves
              </Link>
              &nbsp; | &nbsp;
              <Link
                to="/watchlist"
                onClick={(e) => this.handleAddToWatchList(e)}
              >
                add to watch list
              </Link>
              &nbsp; | &nbsp;
              <Link to="/result">regenerate!</Link>
            </p>
          )}
        </div>
      );
    }
    return <div>{ display }</div>;
  }
}

export default MovieResultPage;
