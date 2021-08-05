import React from "react";
import "../AboutPage/AboutPage.css";
import potato from "./potato.gif";

function AboutPage(props) {
  return (
    <div>
      <div className="AboutPage-body">
        <img src={potato} alt="hey!" />
        <br />
        born out of many a night browsing through netflix while my pasta got cold beside me ♥
      </div>
    </div>
  );
}

export default AboutPage;
