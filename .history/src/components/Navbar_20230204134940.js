import {React, useEffect} from "react";
import logo from "../assets/logo.png";
import { FaAlignRight } from "react-icons/fa";
import Links from "../constants/links";
import { Link } from 'react-router-dom'

const Navbar = ({ toggleSidebar }) => {
  // useLayoutEffect(() => {
  //   document.getElementById("someID").scrollTo(0, 0);
  //  });
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to='/'> <img src={logo} alt="logo" /></Link>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <Links styleClass="nav-links"></Links>
      </div>
    </nav>
  );
};

export default Navbar;
