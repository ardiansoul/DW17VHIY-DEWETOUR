import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./navbar.css";
import profile from "../../images/profile.png";
import { Link } from "react-router-dom";

const NavBar = ({
  isLogin,
  showModalLogin,
  showModalRegister,
  // showDropdown,
}) => {
  const location = useLocation().pathname;

  return (
    <div
      style={{ height: location === "/" ? "547px" : "100px" }}
      className="navbar d-flex align-items-start"
    >
      <div className="container d-flex align-items-center">
        <div className="col-lg-9">
          <Link to="/">
            {" "}
            <img className="brand" src={logo} alt="brand" />
          </Link>
        </div>
        {isLogin ? (
          <div className="profile">
            <img
              src={profile}
              alt="profile"
              onClick={() => console.log(true)}
            />
          </div>
        ) : (
          <div className="col-lg-3 login-register">
            <button className="btn light" onClick={() => showModalLogin(true)}>
              Login
            </button>
            <button
              className="btn yellow"
              onClick={() => showModalRegister(true)}
            >
              Register
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
