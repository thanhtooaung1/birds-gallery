import React from "react";
import { Link, NavLink } from "react-router-dom";
import bird_logo from "../img/bird-logo.png";

const Navbar = () => {
  return (
    <div className="">
      <div
        className="d-flex align-items-center justify-content-center nav-bg"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <Link className="navbar-brand" to="/">
          <img src={bird_logo} alt="" width={60} />
        </Link>
        <NavLink className="navlink mx-3" aria-current="page" to="/">
          Home
        </NavLink>
        <NavLink to="/birds" className="navlink">
          Birds
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
