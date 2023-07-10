import React, { useState } from "react";
import "./Login.css";
import { useMsal } from "@azure/msal-react";

import { loginRequest } from "../authConfig";

function Login_azure() {
  const { instance } = useMsal();

  let activeAccount;

  if (instance) {
    // bool or undefine
    activeAccount = instance.getActiveAccount();
    console.log(activeAccount);
  }
  const handleLoginRedirect = () => {
    instance.loginRedirect(loginRequest).catch((error) => console.log(error));
  };

  return (
    <div class="form-container_auth " id="login-form">
      {/* <div class="form-container_auth " id="login-form" style={{display : 'none'}}> */}
      <h1 id="auth_topic">Login</h1>
      <img
        id="img_auth"
        src="https://img.freepik.com/free-vector/humanitarian-help-concept_52683-36208.jpg?t=st=1688698284~exp=1688698884~hmac=1f6b4f39f184d3c02929de9b1d1dbf3683fda819bc47fdd5d3b66016a43e51ec"
        alt="Italian Trulli"
      />

      <button id="button_auth" onClick={handleLoginRedirect}>
        Login in with Azure AD
      </button>
    </div>
  );
}
export default Login_azure;
