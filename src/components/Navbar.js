import React from "react";
import { Link, NavLink } from "react-router-dom";
import bird_logo from "../img/bird-logo.png";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg fixed-top bg-white">
        <div className="container-fluid container">
          <a className="navbar-brand" href="#">
            <img src={bird_logo} alt="" width={60} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/birds" className="nav-link">
                  Birds
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
