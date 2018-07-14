import React from "react";

const Question = props => (
  <div className="question">
    <div className="container">
      <p>
        Topic: <strong>{props.topic}</strong>
      </p>
      <h3 className="subtitle">Decipher this anagram:</h3>
      <hr className="hr" />
      {props.anagram && <h1 className="anagram">{props.anagram}</h1>}
      <hr className="hr" />
    </div>
  </div>
);

export default Question;
