import { React, useEffect } from "react";
import logo from "../assets/logo.png";
import logo_white from "../assets/logo_white.png";
import { FaAlignRight } from "react-icons/fa";
import Links from "../constants/links";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ toggleSidebar }) => {
  // useLayoutEffect(() => {
  //   document.getElementById("someID").scrollTo(0, 0);
  //  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img className="logo-white" src={logo_white} alt="logo" />
            <img className="logo-simple" src={logo} alt="logo" />
          </Link>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", justifyContent: "end", width: "100%" }}>
          <Links styleClass="nav-links"></Links>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <ThemeToggle />
            <button
              type="button"
              className="toggle-btn"
              onClick={toggleSidebar}
            >
              <FaAlignRight></FaAlignRight>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
