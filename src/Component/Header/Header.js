import React from "react";
import logo from "../../../src/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav className="bg-orange-200 py-1">
        <div className="container sm:flex justify-between items-center sm:px-10">
          <img src={logo} className="mx-auto sm:mx-0" alt={logo} />
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
