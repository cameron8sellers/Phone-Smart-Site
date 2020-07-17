import React from "react";
import contactPage from "./components/contact";
import Menu from "./slideMenu";
import landingPage from "./components/landingPage";

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
      <Route path="/contact" component={contactPage} />

      <footer>
        <p className="copyrightDevName">© The Spare Room</p>
        <ul className="icons-list-container">
          <li className="icons-list">
            <i class="fab fa-facebook-square"></i>
          </li>
          <li className="icons-list">
            <i class="fas fa-map-marker-alt"></i>
          </li>
          <li className="icons-list">
            <i class="far fa-envelope"></i>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
