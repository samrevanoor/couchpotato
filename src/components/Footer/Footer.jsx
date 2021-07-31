import React from "react";
import "./Footer.css";
import image from "./tmdb.png"

function Footer(props) {
  return (
    <div className="Footer-body">
      <span className="Footer-credits">this app is powered by <img src={image} alt="logo" width="100px"/></span><br/>
      <span className="Footer-name"> & made with ♥ by sam revanoor</span><br />
      <span className="Footer-notice">This product uses the TMDb API but is not endorsed or certified by TMDb.</span>
    </div>
  );
}

export default Footer;
