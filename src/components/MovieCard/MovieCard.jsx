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

  render() {
    const { image, title, genre, year } = this.props;
    return (
      <div className="MovieCard-body">
        <img src={image} alt="movie poster" height="300px" />
        <span className="MovieCard-title">
          {this.shortenTitles(title)}, {year}
        </span>
        <span>{genre.join(", ")}</span>
      </div>
    );
  }
} 

export default MovieCard;
