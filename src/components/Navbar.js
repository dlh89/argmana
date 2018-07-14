import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const navigation = new Navigation();
  }
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <button className="navbar__toggle-button">
            <div className="navbar__burger" />
          </button>
          <ul className="navbar__list">
            <li>
              <NavLink
                to="/"
                className="navbar__link"
                activeClassName="is-active"
                exact={true}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/play"
                className="navbar__link"
                activeClassName="is-active"
              >
                Play
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="navbar__link"
                activeClassName="is-active"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="navbar__link"
                activeClassName="is-active"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
