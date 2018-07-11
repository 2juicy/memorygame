import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container hvr-radial-out">
      <img onClick={() => props.shuffleFriend(props.id)} alt={props.name} src={props.image} />
    </div>
    <div className="content">
          <strong>{props.name}</strong> 
    </div>
  </div>
);

export default FriendCard;
