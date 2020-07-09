import React from "react";
import { Navbar } from "reactstrap";
import Menu from "./slideMenu";
import "./App.css";

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
    </div>
  );
}

export default App;
