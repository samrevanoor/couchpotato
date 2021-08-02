import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../MovieResultPage/MovieResultPage.css";
import MovieResult from "../../components/MovieResult/MovieResult";
import { search } from "../../utils/randomizer";
import saveMovies from "../../utils/saveMovies";

class MovieResultPage extends Component {
  state = {
    title: "",
    genreList: "",
    year: "",
    plot: "",
    image: "",
    tmdbId: "",
  };

  async componentDidMount() {
    const result = await search(this.props);
    const BASE_URL = "https://image.tmdb.org/t/p/w500";
    this.setState({
      title: result.title,
      genreList: result.genre_ids,
      // .map((genre) => genre.name).join(", "),
      year: result.release_date.substr(0, 4),
      plot: result.overview,
      image: `${BASE_URL}${result.poster_path}`,
      tmdbId: result.id,
    });
  }

  handleAddToFaves = async (e) => {
    try {
      await saveMovies.addMovieToFaves(this.state);
    } catch (err) {
      console.log(err);
    }
  };

  handleAddToWatchList = async (e) => {
    try {
      await saveMovies.addMovieToWatchlist(this.state);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { title, genreList, year, plot, image, tmdbId } = this.state;
    return (
      <div className="MovieResultPage-body">
        <MovieResult
          title={title}
          genre={genreList}
          year={year}
          plot={plot}
          image={image}
          tmdbId={tmdbId}
        />
        {!this.props.user ? (
          <p>
            ps: if you sign up for an account, you can save this movie to your
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
            <Link to="/watchlist" onClick={(e) => this.handleAddToWatchList(e)}>add to watch list</Link>&nbsp; | &nbsp;
            <Link to="/result">regenerate!</Link>
          </p>
        )}
      </div>
    );
  }
}

export default MovieResultPage;
