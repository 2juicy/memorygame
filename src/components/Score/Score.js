import React from "react";
import "./Score.css";

const Score = props => (
    <div className="container">
        <p className='score'>
            <span>Score: {props.count}</span>
            <span>|</span>
            <span>Top Score: {props.topCount}</span>
        </p>
        <p className='message'>{props.message}</p>
    </div>
);

export default Score;
