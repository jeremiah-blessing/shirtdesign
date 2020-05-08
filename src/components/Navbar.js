import React, { Component } from "react";
import "../stylesheets/Navbar.css";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { navOpen: false };
  }
  closeNav = () => {
    this.setState({ navOpen: false });
  };
  render() {
    return (
      <>
        <div
          className={
            this.state.navOpen ? "hamburger active" : "hamburger nactive"
          }
          onClick={() => this.setState({ navOpen: !this.state.navOpen })}
        >
          <div className="hamburger-in">
            <div className="hamburger-sticks"></div>
            <div className="hamburger-sticks"></div>
            <div className="hamburger-sticks"></div>
          </div>
        </div>

        {this.state.navOpen ? (
          <div className="navbar">
            <ul className="nav">
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  onClick={this.closeNav}
                  className="nav-links"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  onClick={this.closeNav}
                  className="nav-links"
                  to="/shirt-designer"
                >
                  Shirt Designer
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  onClick={this.closeNav}
                  className="nav-links"
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  onClick={this.closeNav}
                  className="nav-links"
                  to="/cart"
                >
                  Cart
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  onClick={this.closeNav}
                  className="nav-links"
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  onClick={this.closeNav}
                  className="nav-links"
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}
