import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import DSULogo from "../../Images/DSU-Logo.svg";
import Bars from "./Bars";
import Times from "./Times";



const Nav = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={DSULogo} alt="" className="logo" />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/team"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Team
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Projects
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                exact
                to="/clients"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Clients
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/join"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Join
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            { click ? <Bars/> : <Times />}
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;