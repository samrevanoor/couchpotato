import React from "react";
import "../MovieResult/MovieResult.css";

function MovieResult(props) {
  return (
    <div className="MovieResult-body">
      we think you should watch ...
      <div className="MovieResult-result">
          <span>title: </span><br />
          <span>genre: </span><br />
          <span>year: </span><br />
          <span>plot: </span><br />
      </div>
    </div>
  );
}

export default MovieResult;
