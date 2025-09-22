import React from "react";
import "./SideNav.css";
import { assets } from "../../assets/assets";

const SideNav = () => {
  return (
    <div id="sidenav-container">
      <div class="menu">
        <img src={assets.menuIcon} alt="" />
        <h3>Side Nav</h3>
      </div>

      <div id="btm-container">
        <div class="menu">
          <img src={assets.settings} alt="" />
          <h3>Settings</h3>
        </div>
        <div class="menu">
          <img src={assets.help} alt="" />
          <h3>Help</h3>
        </div>
        <div class="menu">
          <img src={assets.logout} alt="" />
          <h3>Logout</h3>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
