import React from "react";
import "../MovieCard/MovieCard.css";

function MovieCard(props) {
    const { image, title, genre, year } = props;
  return (
    <div className="MovieCard-body">
      <div className="MovieCard-result">
        <img src={image} alt="movie poster" width="200px" />
        <div className="MovieCard-text">
          <span className="MovieCard-header">TITLE:</span>{" "}
          <span>{title}</span>
          <br />
          <span className="MovieCard-header">GENRE(s): </span>{" "}
          <span>{genre}</span>
          <br />
          <span className="MovieCard-header">YEAR: </span>{" "}
          <span>{year}</span>
          <br />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
