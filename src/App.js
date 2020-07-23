import React from "react";
import contactPage from "./components/contact";
import Menu from "./slideMenu";
import landingPage from "./components/landingPage";
import mobilePlansPage from "./components/mobilePlans";
import { Nav, NavItem, NavLink } from "reactstrap";
import "./App.css";
import { Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
function App() {
  const isMobile = useMediaQuery({ query: "(max-width:426px)" });
  return (
    <div className="App">
      <Nav className="nav">
        <div className="logoContainer">
          <a href="/">
            <img
              alt=""
              src="https://res.cloudinary.com/drcgo7zqn/image/upload/v1594321677/Phone%20Smart/imageedit_5_3793295319_eu3y6r.png"
              className="logo-mobile"
            />
          </a>
        </div>
        {isMobile ? (
          <Menu />
        ) : (
          <div className="desktop-nav-container">
            <NavItem>
              <NavLink href="/" className="navLink">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact" className="navLink">
                Contact
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="plans" className="navLink" id="mobile-plans-link">
                Mobile Plans
              </NavLink>
            </NavItem>
          </div>
        )}
      </Nav>

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
