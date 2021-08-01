import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../MovieResultPage/MovieResultPage.css";
import MovieResult from "../../components/MovieResult/MovieResult";
import { search } from "../../utils/randomizer";
import saveMovies from "../../utils/saveMovies";

class MovieResultPage extends Component {
  state = {
    title: "",
    genre: "",
    year: "",
    plot: "",
    image: "",
    tmdbId: "",
  };

  async componentDidMount() {
    const result = await search();
    const BASE_URL = "https://image.tmdb.org/t/p/w500";
    this.setState({
      title: result.title,
      genre: result.genres.map((genre) => genre.name).join(", "),
      year: result.release_date.substr(0, 4),
      plot: result.overview,
      image: `${BASE_URL}${result.poster_path}`,
      tmdbId: result.id,
    });
    console.log(this.state);
  }

  handleAddToFaves = async (e) => {
    e.preventDefault();
    try {
      await saveMovies.addMovie(this.state);
      this.props.match.params.push("/faves");
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { title, genre, year, plot, image } = this.state;
    return (
      <div className="MovieResultPage-body">
        <MovieResult
          title={title}
          genre={genre}
          year={year}
          plot={plot}
          image={image}
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
            <Link to="/faves" onClick={(e)=>this.handleAddToFaves(e)}>add to faves</Link>&nbsp; | &nbsp;
            <Link to="/watchlist">add to watch list</Link>&nbsp; | &nbsp;
            <Link to="/result">regenerate!</Link>
          </p>
        )}
      </div>
    );
  }
}

export default MovieResultPage;
