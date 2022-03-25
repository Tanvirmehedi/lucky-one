import React from "react";
import logo from "../../../src/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav className="bg-orange-200">
        <div className="container flex justify-between items-center sm:px-10">
          <img src={logo} alt={logo} />
          <ul className="flex items-center justify-around">
            <li>Home</li>
            <li>Robots</li>
            <li>About</li>
            <li>Data</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
