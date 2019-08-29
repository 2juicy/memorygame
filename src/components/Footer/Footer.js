import React from "react";
import "./Footer.css";

const Footer = props => (
  <React.Fragment>
    <div className="phantom" />
    <div className="footer">{props.children}</div>
  </React.Fragment>
);

export default Footer;
