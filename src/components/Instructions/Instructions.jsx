import React from "react";
import "../Instructions/Instructions.css";

function Instructions(props) {
  return (
    <div className="Instructions-body">
      {!props.user ? (
        <h3>hey, are you looking for something to watch?</h3>
      ) : (
        <h3> hey {props.user.name.toLowerCase()}, are you looking for something to watch?</h3>
      )}
      <p>
        fill out the following fields and we’ll get you on the couch in no time!
      </p>
    </div>
  );
}

export default Instructions;
