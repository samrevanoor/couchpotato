import React from "react";
import "../Instructions/Instructions.css";

function Instructions(props) {
  return (
    <div className="Instructions-body">
      {!props.user ? (
        <h4>hey, are you looking for something to watch?</h4>
      ) : (
        <h4> hey {props.user.name}, are you looking for something to watch?</h4>
      )}
      <p>
        fill out the following fields and we’ll get you on the couch in no time!
      </p>
    </div>
  );
}

export default Instructions;
