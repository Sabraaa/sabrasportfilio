import React from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";
import RSM from "../../assets/sabracodes.pdf"

function Header() {
  return (
    <div>
      <div className="main-header-container">
        <div className="header-container">
          <h1> Sabra</h1>
          <div className="header-container-right">
            <div className="header-container-right-title">
        
              <header>
      <nav className="header-container-right-title">
        
          <Link  className="header-link" to="/">Home </Link>
          <Link  className="header-link" to="/about">About </Link>
          <Link  className="header-link" to="/projects">Projects </Link>
          <Link className="header-link" to="/resume" onClick={() => window.open(`${RSM}`, "_blank")}>Resume</Link>

      </nav>
    </header>
            </div>
            <button className="btn">
              <FontAwesomeIcon icon={faSun} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
