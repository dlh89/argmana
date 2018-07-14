import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="container u-padding-bottom-large">
    <div className="row">
      <div className="col-1-of-2">
        <h1 className="heading">Choose a topic</h1>
        <p className="info">
          From the highest grossing films of all time to Ballon d'Or winners,
          pick a topic that interests you and challenge yourself!
        </p>
        <h1 className="heading u-margin-top-medium">Decipher anagrams</h1>
        <p className="info">Engage your brain and test your knowledge!</p>
      </div>
      <div className="col-1-of-2">
        <div className="u-absolute-center">
          <Link to="/play" className="link">
            <button className="btn btn--primary btn--large-rounded">
              Start playing
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
