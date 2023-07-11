import React, { useState } from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
const VerticalNavbar = () => {
  const { instance } = useMsal();

  let activeAccount = "error login";

  if (instance) {
    // bool or undefine
    activeAccount = instance.getActiveAccount();
    console.log(activeAccount);
  }

  const handleLogoutRedirect = () => {
    instance.logoutRedirect().catch((error) => console.log(error));
  };

  const [isNavDisabled, setNavDisabled] = useState(false);

  const DisplayNav = () => {
    let main_nav = document.getElementsByClassName("vertical-navbar")[0];
    let hide_nav = document.getElementById("hide_menubar");
    let content = document.getElementsByClassName("content")[0];
    if (isNavDisabled) {
      main_nav.style.display = "block";
      hide_nav.style.display = "none";
      // contained.style["flex-basis"] =
      content.style.marginLeft = '18rem';


    } else {
      main_nav.style.display = "none";
      hide_nav.style.display = "block";
      content.style.marginLeft = '0rem';

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
            src="data:image/png;base64,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"
            alt="User Profile"
          />
          <AuthenticatedTemplate>
            <div className="name-profile">
              {" "}
              {activeAccount ? activeAccount.name : "none"}{" "}
            </div>
            <div id="mail-profile">
              {" "}
              {activeAccount ? activeAccount.username : "none"}
            </div>
          </AuthenticatedTemplate>
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
        {/* <a href="/login" id="logout_button">
          Log out
        </a> */}
        <a onClick={handleLogoutRedirect} id="logout_button">
          Log out
        </a>
      </nav>
    </>
  );
};

export default VerticalNavbar;
