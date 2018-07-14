import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="container">
    <h1 className="heading">Choose a topic</h1>
    <p>
      From the highest grossing films of all time to Ballon d'Or winners, pick a
      topic that interests you and challenge yourself!
    </p>
    <h1 className="heading">Decipher anagrams</h1>
    <p>Engage your brain and test your knowledge!</p>
    <button className="btn">
      <Link to="/play" className="link">
        Start playing
      </Link>
    </button>
  </div>
);

export default HomePage;
