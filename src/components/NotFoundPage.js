import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div className="container">
    <p className="info">404 - Page not found!</p>
    <p className="info">
      <Link to="/">Go home</Link>
    </p>
  </div>
);

export default NotFoundPage;
