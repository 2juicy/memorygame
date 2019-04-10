import React from "react";
import "./Card.css";

const Card = props => (
  <div onClick={() => props.scoreCount(props.name)} className="card">
    <div className="img-container hvr-radial-out">
      <img alt={props.name} src={`img/${props.name}.png`} />
    </div>
    <div className="content">
      <strong>{props.name}</strong>
    </div>
  </div>
);

export default Card;
