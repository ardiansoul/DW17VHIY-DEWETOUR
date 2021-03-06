import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DetailTour from "./pages/DetailTour";
import Admin from "./pages/Admin";
import User from "./pages/User";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState(false);

  // function loginHandler() {
  //   setShowModalLogin(!showModalLogin);
  //   setShowModalRegister(false);
  //   console.log(showModalLogin);
  // }

  // function registerHandler() {
  //   setShowModalRegister(!showModalRegister);
  //   setShowModalLogin(false);
  //   console.log(showModalRegister);
  // }

  return (
    <Router>
      <NavBar
        isLogin={isLogin}
        showModalLogin={showModalLogin}
        showModalRegister={showModalRegister}
      />
      <Switch>
        <div className="container">
          <Route path="/" exact component={Home} />
          <div className="app">
            <Route path="/admin" component={Admin} />
            <Route path="/user" component={User} />
            <Route path="/detailtour/:id" component={DetailTour} />
          </div>
        </div>
      </Switch>
      {/* {showModalLogin && (
        <Login showModalLogin={showModalLogin} isLogin={isLogin} />
      )} */}
      <Footer />
    </Router>
  );
}

export default App;
