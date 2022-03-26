import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="bg-slate-900 text-white py-1">
        <p>
          All Right Reserve &copy;
          <a href="/home" className="text-orange-400 mr-2">
            RoboGen
          </a>
          2022
        </p>
      </div>
    </div>
  );
};

export default Footer;
