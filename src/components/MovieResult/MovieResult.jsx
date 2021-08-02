import React from "react";
import "../MovieResult/MovieResult.css";

function MovieResult(props) {
  let trailer = `https://www.youtube.com/results?search_query=${props.title}+${props.year}+trailer`;

  return (
    <div className="MovieResult-body">
      we think you should watch ...
      <div className="MovieResult-result">
        <img src={props.image} alt="movie poster" width="200px" />
        <div className="MovieResult-text">
          <span className="MovieResult-header">TITLE:</span>{" "}
          <span>{props.title}</span>
          <br />
          <span className="MovieResult-header">GENRE(s): </span>{" "}
          <span>{props.genre}</span>
          <br />
          <span className="MovieResult-header">YEAR: </span>{" "}
          <span>{props.year}</span>
          <br />
          <span className="MovieResult-header">PLOT: </span>{" "}
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
