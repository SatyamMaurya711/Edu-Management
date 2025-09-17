import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div id="navbar">
        <div className="logo">
          <h2>EduManage</h2>
        </div>
        <div className="menu-items">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Login</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
