import React from "react";

const Answer = props => (
  <div className="answer">
    <div className="container">
      <form id="inputForm" onSubmit={props.checkAnswer}>
        <input
          className="input"
          placeholder="Answer"
          onChange={props.handleChange}
        />
        <button className="btn btn--answer">Answer</button>
      </form>
      <button onClick={props.skip} className="btn btn--skip">
        Skip
      </button>
      {props.result && (
        <p className="result u-margin-top-tiny">{props.result}</p>
      )}
    </div>
  </div>
);

export default Answer;
