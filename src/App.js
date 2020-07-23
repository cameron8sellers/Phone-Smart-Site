import React from "react";
import contactPage from "./components/contact";
import Menu from "./slideMenu";
import landingPage from "./components/landingPage";
import mobilePlansPage from "./components/mobilePlans";

import "./App.css";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <div className="logoContainer">
          <a href="/">
            <img
              alt=""
              src="https://res.cloudinary.com/drcgo7zqn/image/upload/v1594321677/Phone%20Smart/imageedit_5_3793295319_eu3y6r.png"
              className="logo-mobile"
            />
          </a>
        </div>
        <Menu />
      </nav>

      <Route exact path="/" component={landingPage} />
      <Route path="/contact" component={contactPage} />
      <Route path="/plans" component={mobilePlansPage} />

      <footer>
        <p className="copyrightDevName">© The Spare Room</p>
      </footer>
    </div>
  );
}

export default App;
