import React from "react";

const footerStyle = {
  background: "rgba(0, 0, 0, 0.33)",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "5px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "100px",
  width: "100%",
  pointerEvents: "none"
};

const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "100px",
  width: "100%"
};

function Footer({ children }) {
  return (
    <div>
      <div style={phantomStyle} />
      <div style={footerStyle}>{children}</div>
    </div>
  );
}

export default Footer;
