import React, { useState } from "react";
import "./Login.css";
function Login() {
  const [login, setLogin] = useState(true);

  // const onClick_auth = () => {
  //   let login_element = document.getElementById('login-form');
  //   let register_element = document.getElementById('register-form');

  //   if (login) {
  //     console.log(login);
  //     register_element.style.display = 'block';
  //     login_element.style.display = 'none';
  //     setLogin(false);
  //   } else {
  //     register_element.style.display = 'none';
  //     login_element.style.display = 'block';
  //     setLogin(true);
  //   }
  // };
  return (
    <div class="form-container_auth " id="login-form">
      {/* <div class="form-container_auth " id="login-form" style={{display : 'none'}}> */}
      <h1 id="auth_topic">Login</h1>
      <img
        id="img_auth"
        src="https://img.freepik.com/free-vector/humanitarian-help-concept_52683-36208.jpg?t=st=1688698284~exp=1688698884~hmac=1f6b4f39f184d3c02929de9b1d1dbf3683fda819bc47fdd5d3b66016a43e51ec"
        alt="Italian Trulli"
      />
      <form id="form_auth">
        <label for="username" id="label_auth">
          Username
        </label>
        <input
          className="input_auth"
          type="text"
          id="username"
          name="username"
          required
        />
        <label for="password" id="label_auth">
          Password
        </label>
        <input
          className="input_auth"
          type="password"
          id="password"
          name="password"
          required
        />
        <button id="button_auth" type="submit">
          Login
        </button>
      </form>
      <p id="auth-box-link ">
        <a id="text_auth">Don't have an account? </a>
        <a href="/register" id="signup-link">
          Sign up
        </a>
      </p>{" "}
      <a href="/" id="login-link">
        main
      </a>
    </div>
  );
}
export default Login;
