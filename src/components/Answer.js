import React from 'react';

const Answer = (props) => (
  <div className="answer">
    <div className="container">
      <form id="inputForm" onSubmit={props.checkAnswer}>
        <input className="input" placeholder="Answer here" onChange={props.handleChange}/>
        <button className="btn">Submit</button>
      </form>
      <button onClick={props.skip} className="btn">Skip</button>
      {props.result && <p className="result">{props.result}</p>}
    </div>
  </div>
);

export default Answer;