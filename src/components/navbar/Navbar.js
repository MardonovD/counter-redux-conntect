import React from "react";
import { SiDatabricks } from "react-icons/si";
import "./NavbarStyle.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <SiDatabricks classNameicon />
          <h1>Secured</h1>
        </div>

        <ul className="nav-menu">
          <li>Home</li>
          <li>Recovery</li>
          <li>Cloud </li>
          <li>Contact</li>
          <button>Sign in</button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
