import React from "react";

import Menu from "./slideMenu";
import landingPage from "./components/landingPage";
import services from "./components/servicesPage";
import "./App.css";
import { Route } from "react-router-dom";

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
      <Route path="/services" component={services} />
    </div>
  );
}

export default App;
