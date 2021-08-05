import React from "react";
import "../HomePage/HomePage.css";
import Instructions from "../../components/Instructions/Instructions";
import GeneratorForm from "../../components/GeneratorForm/GeneratorForm";
import Footer from "../../components/Footer/Footer";

function HomePage(props) {
  return (
    <>
      <div className="HomePage-body">
        <Instructions user={props.user}/>
        <GeneratorForm {...props}/>
        {!props.user && (
          <p>
            ps: if you sign up for an account, you can save movies to your
            list to watch later!
          </p>
        )}
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default HomePage;
