import React from "react";
import "../MovieResult/MovieResult.css";

function MovieResult(props) {
  let trailer = `https://www.youtube.com/results?search_query=${props.title}+trailer`;

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
          <div className="MovieResult-footer">
            <a href={trailer} rel="noreferrer" target="_blank">watch the trailer</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieResult;
