import React from "react";
import "../HomePage/HomePage.css";
import Instructions from "../../components/Instructions/Instructions";
import GeneratorForm from "../../components/GeneratorForm/GeneratorForm";

function HomePage(props) {
  return (
    <div className="HomePage-body">
      <Instructions />
      <GeneratorForm />
      {!props.user && (
        <p>
          ps: if you sign up for an account, you can save movies to your account
          to watch later!
        </p>
      )}
    </div>
  );
}

export default HomePage;
