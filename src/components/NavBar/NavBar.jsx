import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar(props){
    return (
        <div className="NavBar-header">
            <span className="NavBar-title">
                <Link to="/">couch potato</Link>
            </span>
            <span className="NavBar-links">
                <Link to="/signup">sign up</Link>&nbsp;
            | log in
            </span>
        </div>
    )
}

export default NavBar;