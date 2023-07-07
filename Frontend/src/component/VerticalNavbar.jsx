import React, { useState } from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

const VerticalNavbar = () => {
  const [isNavDisabled, setNavDisabled] = useState(false);

  const DisplayNav = () => {
    let main_nav = document.getElementsByClassName("vertical-navbar")[0];
    let hide_nav = document.getElementById("hide_menubar");

    if (isNavDisabled) {
      main_nav.style.display = "block";
      hide_nav.style.display = "none";
      // contained.style["flex-basis"] =
    } else {
      main_nav.style.display = "none";
      hide_nav.style.display = "block";
    }
    setNavDisabled(!isNavDisabled);
  };
  let activeClass = "vertical-navbar-active";
  return (
    <>
      <div id="hide_menubar">
        <IconButton onClick={DisplayNav}>
          <MenuIcon color="primary" fontSize="large" id="menu-icon" />
        </IconButton>
      </div>
      <nav className="vertical-navbar">
        <div className="user-profile">
          <div id="top-nav-bar">
            <IconButton onClick={DisplayNav}>
              <MenuIcon
                color="action"
                fontSize="large"
                name="detail"
                id="menu-icon"
              />
            </IconButton>
            <div id="name-com"> METRO SYSTEMS </div>
          </div>
          <img
            src="https://legacy.reactjs.org/logo-og.png"
            alt="User Profile"
          />
          <div className="name-profile"> rew_setthanan </div>
          <div id="mail-profile">setthanna50@gmail.com </div>
        </div>
        <NavLink
          end
          to="/"
          className={({ isActive }) => (isActive ? activeClass : undefined)}
        >
          {" "}
          Table{" "}
        </NavLink>

        <NavLink
          to="/edit"
          className={({ isActive }) => (isActive ? activeClass : undefined)}
        >
          Edit
        </NavLink>

        {/* <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? activeClass : undefined)}
        >
          Login
        </NavLink> */}
        <a href="/login" id="logout_button" >
          Log out
        </a>
      </nav>
    </>
  );
};

export default VerticalNavbar;
