import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="footer u-margin-top-large">
    <div className="container">
      <div className="footer__container">
        <div className="u-margin-top-small">
          <ul className="footer__list">
            <h4 className="footer__heading">Argmana</h4>
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/play" className="link">
                Play
              </Link>
            </li>
            <li>
              <Link to="/about" className="link">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="u-margin-top-small">
          <ul className="footer__list">
            <h4 className="footer__heading">Visit</h4>
            <li>
              <a
                href="http://www.davidhide.com"
                target="_blank"
                className="link"
              >
                Web Portfolio
              </a>
            </li>
          </ul>
        </div>
        <div className="u-margin-top-small">
          <ul className="footer__list">
            <h4 className="footer__heading">Follow</h4>
            <li>
              <a
                href="https://twitter.com/undanator"
                target="_blank"
                className="link"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dlh89"
                target="_blank"
                className="link"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/david-hide-b2633b168/"
                target="_blank"
                className="link"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="u-padding-bottom-large">
        <hr className="u-hr" />
        <p className="u-margin-top-tiny">&#169;2018 David Hide</p>
      </div>
    </div>
  </div>
);

export default Header;
