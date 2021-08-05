import React from "react";
import "../LogoutPage/LogoutPage.css";
import Footer from "../../components/Footer/Footer";
import potato from "./potato.gif";

function LogoutPage(props) {
  return (
    <div>
      <div className="LogoutPage-body">
        <img src={potato} alt="bye!" />
        <br />
        thanks for using our app! come back any time ♥
      </div>
      <Footer />
    </div>
  );
}

export default LogoutPage;
