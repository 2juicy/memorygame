import React from "react";
import "./Score.css";

const Score = props => (
  <React.Fragment>
    <p className="score">
      <span>Score: {props.count}</span>
      <span className="visi">|</span>
      <span>Top Score: {props.topCount}</span>
    </p>
    <p style={props.text} className="message">
      {props.message}
    </p>
  </React.Fragment>
);

export default Score;
