import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target"
          id="ftco-navbar"
          style={{ position: "fixed", zIndex: "999" }}
        >
          <div className="container">
            <div className="navbar-brand">
              <Link to="/">Binh@</Link>
            </div>
            <button
              className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
              type="button"
              data-toggle="collapse"
              data-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="oi oi-menu" /> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav nav ml-auto">
                <li className="nav-item">
                  <NavLink to="/">HOME</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    activeStyle={{
                      color: "#d19f68",
                    }}
                  >
                    ABOUT
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/lab1"
                    activeStyle={{
                      color: "#d19f68",
                    }}
                  >
                    Lab 1
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/lab2"
                    activeStyle={{
                      color: "#d19f68",
                    }}
                  >
                    Lab 2
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/lab3"
                    activeStyle={{
                      color: "#d19f68",
                    }}
                  >
                    Lab 3
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/lab4"
                    activeStyle={{
                      color: "#d19f68",
                    }}
                  >
                    Lab 4
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/result"
                    activeStyle={{
                      color: "#d19f68",
                    }}
                  >
                    Result
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      
      </div>
    );
  }
}
