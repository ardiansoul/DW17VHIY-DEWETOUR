import React from "react";

import logo from "../../images/logo.svg";
import "./navbar.css";
// import Login from "../Login";
// import Register from "../Register";

const NavBar = ({ isLogin, showModalLogin, showModalRegister }) => {
  return (
    <div className="navbar d-flex align-items-start">
      <div className="container d-flex align-items-center">
        <div className="col-lg-9">
          <img className="brand" src={logo} alt="brand" />
        </div>
        {isLogin ? (
          <div className="">
            <h4>login</h4>
            {/* <img src={} alt="" /> */}
          </div>
        ) : (
          <div className="col-lg-3 login-register">
            <button
              className="btn light"
              onClick={console.log(true) /*() => loginHandler()*/}
            >
              Login
            </button>
            <button
              className="btn yellow"
              onClick={/*() => registerHandler()*/ console.log(true)}
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
