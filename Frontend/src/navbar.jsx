import React from 'react';
import "./body.css";

const VerticalNavbar = () => {
  return (
    <div className="vertical-navbar">
       <div className="user-profile">
       <div class="name-com">  METRO SYSTEM </div>
        <img src="https://legacy.reactjs.org/logo-og.png" alt="User Profile" />
        <div class="name-profile"> rew_setthanan </div>
        <div id="mail-profile"> setthanna50@gmail.com </div>

      </div>

      <a href="#" className="active">Table</a>
      <a href="#">Edit</a>
      <a href="#">Delete</a>
      <a href="#">Create</a>
      <a href="#">Sign out</a>
    </div>
  );
}

export default VerticalNavbar;
