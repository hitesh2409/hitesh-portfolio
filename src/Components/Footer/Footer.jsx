import React from "react";
import "./Footer.css"

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer>
        <div
          className="footer"
          style={{
            color: "#FFF",
            display: "flex",
            justifyContent: "center",
            padding:"6px"
          }}
        >
          <p>
            Copyright &copy; {currentYear} by Hitesh Chaudhary | All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
