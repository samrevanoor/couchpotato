import React from "react";
import "../MovieCard/MovieCard.css";

function MovieCard(props) {
  const { image, title, genre, year } = props;
  return (
    <div className="MovieCard-body">
      <img src={image} alt="movie poster" height="300px" />
      <span className="MovieCard-title">{title}, {year}</span>
      <span>{genre.join(", ")}</span>
    </div>
  );
}

export default MovieCard;
