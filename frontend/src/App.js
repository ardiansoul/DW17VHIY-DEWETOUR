import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DetailTour from "./pages/DetailTour";
import Admin from "./pages/Admin";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import Login from "./components/Login";
import Register from "./components/Register";
import Dropdown from "./components/DropDown";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  function loginHandler() {
    setShowModalLogin(!showModalLogin);
    setShowModalRegister(false);
    console.log(showModalLogin);
  }

  function registerHandler() {
    setShowModalRegister(!showModalRegister);
    setShowModalLogin(false);
  }

  function handleLogin() {
    setIsLogin(true);
    setShowModalLogin(false);
    setShowModalRegister(false);
  }

  function handleDropdown() {
    setShowDropdown(true);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <NavBar
        isLogin={isLogin}
        showModalLogin={loginHandler}
        showModalRegister={registerHandler}
        showdropdown={handleDropdown}
      />
      {showModalLogin && <Login handleLogin={handleLogin} />}
      {showModalRegister && <Register handleLogin={handleLogin} />}
      {showDropdown && <Dropdown />}
      <Switch>
        <div>
          <div className="container">
            <Route path="/" exact component={Home} />
          </div>
          <div className="app">
            <div className="container">
              <Route path="/admin" component={Admin} />
              <Route path="/user" component={User} />
              <Route path="/detail/:id" component={DetailTour} />
              <Router path="*" component={NotFound} />
            </div>
          </div>
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
