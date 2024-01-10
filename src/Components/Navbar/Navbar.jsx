import React, { useState } from "react";
import NavbarStyle from "./Navbar.module.scss";
import { IoIosMenu } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className={NavbarStyle.Logo}>
        <Link to="/">Portfolio</Link>
      </div>
      <div className={NavbarStyle.Menu_Icon}>
        <IoIosMenu onClick={toggleMenuClick} />
      </div>
      <div
        className={`${NavbarStyle.Nav} ${
          showMenu ? NavbarStyle.NavVisible : ""
        }`}
      >
        <Link
          to="/"
          className={location.pathname === "/" ? NavbarStyle.Active : ""}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? NavbarStyle.Active : ""}
        >
          About
        </Link>
        <Link
          to="/projects"
          className={
            location.pathname === "/projects" ? NavbarStyle.Active : ""
          }
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? NavbarStyle.Active : ""}
        >
          Contact Me
        </Link>
      </div>
    </header>
  );
}
