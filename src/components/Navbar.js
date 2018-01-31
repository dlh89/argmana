import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <ul>
        <li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
        <li><NavLink to="/quiz" activeClassName="is-active">Quiz</NavLink></li>
        <li><NavLink to="/about" activeClassName="is-active">About</NavLink></li>
        <li><NavLink to="/contact" activeClassName="is-active">Contact</NavLink></li>
      </ul>
    </div>
  </nav>
)

export default Navbar;