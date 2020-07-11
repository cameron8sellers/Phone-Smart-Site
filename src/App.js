import React from "react";
import { Navbar } from "reactstrap";
import Menu from "./slideMenu";
import landingPage from "./components/landingPage";
import "./App.css";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <div className="logoContainer">
          <img
            alt=""
            src="https://res.cloudinary.com/drcgo7zqn/image/upload/v1594321677/Phone%20Smart/imageedit_5_3793295319_eu3y6r.png"
            className="logo-mobile"
          />
        </div>
        <Menu />
      </nav>
      <Route exact path="/" component={landingPage} />
    </div>
  );
}

export default App;
