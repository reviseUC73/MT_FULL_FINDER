import React, { useState } from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

const VerticalNavbar = () => {
  // const Show_nav= () => {
  //   console.log("ShowPopup");
  //   let create_popup = document.getElementsByClassName("container_form_popup")[0];
  //   // create_popup.style.display = create_popup.style.display === "none" ? "block" : "none";
  //   if (create_popup.style.display === "none") {
  //     create_popup.style.display = "block";
  //   } else {
  //     create_popup.style.display = "none";
  //   }
  // };

  const [isNavDisabled, setNavDisabled] = useState(false);
  // const Close_nav = () => {
  //   let nav = document.getElementsByClassName("vertical-navbar")[0];
  //   nav.style.display = "none";
  //   setNavDisabled(!isNavDisabled);
  // };
  // const Show_nav = () => {
  //   nav = document.getElementById("hide_menubar");
  // };

  const DisplayNav = () => {
    let main_nav = document.getElementsByClassName("vertical-navbar")[0];
    let hide_nav = document.getElementById("hide_menubar");

    if (isNavDisabled) {
      main_nav.style.display = "block";
      hide_nav.style.display = "none";
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
          <div class="name-profile"> rew_setthanan </div>
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
          to="/create"
          className={({ isActive }) => (isActive ? activeClass : undefined)}
          // onClick={Show_popup}
        >
          Create
        </NavLink>
        <NavLink
          to="/edit"
          className={({ isActive }) => (isActive ? activeClass : undefined)}
        >
          Edit
        </NavLink>
        <NavLink
          to="/delete"
          className={({ isActive }) => (isActive ? activeClass : undefined)}
        >
          Delete
        </NavLink>
        {/* <NavLink >Sign out</NavLink> */}
      </nav>
    </>
  );
};

export default VerticalNavbar;
