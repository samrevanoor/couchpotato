import React from "react";
import "../MovieResult/MovieResult.css";

function MovieResult(props) {
  return (
    <div className="MovieResult-body">
      we think you should watch ...
      <div className="MovieResult-result">
        <img src={props.image} alt="movie poster" width="200px" />
        <div className="MovieResult-text">
          <span className="MovieResult-header">title:</span>{" "}
          <span>{props.title}</span>
          <br />
          <span className="MovieResult-header">genre: </span>{" "}
          <span>{props.genre}</span>
          <br />
          <span className="MovieResult-header">year: </span>{" "}
          <span>{props.year}</span>
          <br />
          <span className="MovieResult-header">plot: </span>{" "}
          <span>{props.plot}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieResult;
