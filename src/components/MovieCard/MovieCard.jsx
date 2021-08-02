import React, { Component } from "react";
import "../MovieCard/MovieCard.css";

class MovieCard extends Component {
  state = {
    showPlot: false,
  };

  shortenTitles(title) {
    if (title.length > 40) {
      return `${title.substr(0, 40)} ...`;
    } else {
      return title;
    }
  }

  shortenGenres(genre) {
    if (genre.length > 3) {
      const shortGenreList = [`${genre[0]}, ${genre[1]}, ${genre[2]} +`];
      return shortGenreList;
    } else {
      return genre;
    }
  }

  shortenPlot(plot) {
    if (plot.length > 430) {
      return `${plot.substr(0, 430)} ...`;
    } else {
      return plot;
    }
  }

  handleShowPlot = () => {
    const { showPlot } = this.state;
    this.setState({ showPlot: !showPlot });
  };

  render() {
    const { image, title, genre, year, plot, imdb } = this.props;
    const { showPlot } = this.state;
    let imdbLink = `https://www.imdb.com/title/${imdb}/?ref_=fn_al_tt_1`;
    let display;
    if (showPlot) {
      display = (
        <div className="MovieCard-body">
          <span className="MovieCard-title">
            {this.shortenTitles(title)}, {year}
          </span>
          <span className="MovieCard-genre">
            {this.shortenGenres(genre).join(", ")}
          </span>
          {plot}
          <br/>
          <a href={imdbLink} rel="noreferrer" target="_blank">imdb</a>
          <button onClick={this.handleShowPlot}>see less</button>
        </div>
      );
    } else {
      display = (
        <div className="MovieCard-body">
          <img src={image} alt="movie poster" height="280px" /> <br />
          <button onClick={this.handleShowPlot}>see more</button>
        </div>
      );
    }
    return <div>{display}</div>;
  }
}

export default MovieCard;
