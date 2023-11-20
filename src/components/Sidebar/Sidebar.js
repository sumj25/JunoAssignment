import React from "react";
import logo from "../../images/logo.png";
import profile from "../../images/profile.png";
import HomePage from "../HomePage/HomePage.js";

const Sidebar = () => {
  return (
    <div className="container">
      <div className="first">
        <div className="menu">
          <img src={logo} alt="logo" />
          <ol className="navi">
            <li>Overview</li>
            <li>Onboarding</li>
            <li className="sidebar-active">HomePage</li>
            <li>Flagging</li>
            <li>Source of Income</li>
            <li>UAR</li>
          </ol>
        </div>
        <div className="prof">
          <img src={profile} alt="profile" />
          <div className="profile-details">
            <p style={{ fontWeight: "500" }}>Elon Musk</p>
            <p style={{ color: "rgba(119, 118, 118, 1)", fontSize: "14px" }}>
              elon@twitter.com
            </p>
          </div>
        </div>
      </div>
      <div className="second">
        <HomePage />
      </div>
    </div>
  );
};

export default Sidebar;
