import React, { Component } from "react";
import "../MovieCard/MovieCard.css";

class MovieCard extends Component {
  
  shortenTitles(title) {
    if (title.length > 40) {
      return `${title.substr(0, 40)} ...`;
    } else {
      return title
    }
  }

  shortenGenres(genre) {
    if (genre.length > 3) {
      const shortGenreList = [`${genre[0]}, ${genre[1]}, ${genre[2]} +`]
      return shortGenreList;
    } else {
      return genre
    }
  }

  render() {
    const { image, title, genre, year } = this.props;
    return (
      <div className="MovieCard-body">
        <img src={image} alt="movie poster" height="300px" />
        <span className="MovieCard-title">
          {this.shortenTitles(title)}, {year}
        </span>
        <span>{this.shortenGenres(genre).join(", ")}</span>
      </div>
    );
  }
} 

export default MovieCard;
