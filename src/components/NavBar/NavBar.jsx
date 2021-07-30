import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar(props){
    let nav = props.user ?
        <div>
            <span className="NavBar-title">
                <Link to="/">couch potato</Link>
            </span>
            <span className="NavBar-links">
                <Link to="/logout" onClick={props.handleLogout}>log out</Link>
            </span>
        </div>
        :
        <div>
            <span className="NavBar-title">
                <Link to="/">couch potato</Link>
            </span>
            <span className="NavBar-links">
                <Link to="/signup">sign up</Link>&nbsp;
            | &nbsp;
                <Link to="/login">log in</Link>
            </span>
        </div>

    return (
        <div className="NavBar-header">
            {nav}
        </div>
    )
}

export default NavBar;