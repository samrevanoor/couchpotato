import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import gif from "./couch3.gif";
import gif2 from "./couch.gif";

function NavBar(props) {
  function style(page) {
    if (props.location.pathname === page) {
      return {
        backgroundColor: "rgba(255, 174, 0, 0.911)",
        padding: "8px 10px",
        borderRadius: "5px"
      };
    }
  }
  let nav = props.user ? (
    <div className="NavBar-header">
      <span className="NavBar-title">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/">
          <img src={gif} alt="" width="100px" />
        </a>
        <br />
        &nbsp;<Link to="/">couch potato</Link>
      </span>
      <span className="NavBar-links">
        <a href="/" className="NavBar-image">
          <img src={gif2} alt="" width="100px" />
        </a>
        <br />
        <Link to="/faves" style={style("/faves")}>
          my faves
        </Link>
        &nbsp; | &nbsp;
        <Link to="/watchlist" style={style("/watchlist")}>
          my watch list
        </Link>
        &nbsp; | &nbsp;
        <Link to="/" style={style("/")}>generator</Link>&nbsp; | &nbsp;
        <Link to="/logout" onClick={props.handleLogout}>
          log out
        </Link>
      </span>
    </div>
  ) : (
    <div>
      <span className="NavBar-title">
        &nbsp;&nbsp;
        <a href="/">
          <img src={gif} alt="" width="100px" />
        </a>
        <br />
        <Link to="/">couch potato</Link>
      </span>
      <span className="NavBar-links">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/">
          <img src={gif2} alt="" width="100px" />
        </a>
        <br />
        <Link to="/signup" style={style("/signup")}>sign up</Link>&nbsp; | &nbsp;
        <Link to="/login" style={style("/login")}>log in</Link>
      </span>
    </div>
  );

  return <div className="NavBar-header">{nav}</div>;
}

export default NavBar;
