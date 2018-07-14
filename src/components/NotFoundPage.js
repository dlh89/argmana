import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="container">
    <p>404 - Page not found!</p>
    <Link to="/quiz">Go home</Link>
  </div>
);

export default NotFoundPage;