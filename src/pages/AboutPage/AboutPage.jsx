import React from "react";
import "../AboutPage/AboutPage.css";
import Footer from "../../components/Footer/Footer";
import potato from "./bye.gif";

function AboutPage(props) {
  return (
    <div>
      <div className="AboutPage-body">
        <img src={potato} alt="hey!" />
        <br />
        born out of many a night browsing through netflix while my pasta got cold beside me ♥
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
