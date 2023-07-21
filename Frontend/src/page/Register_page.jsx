import React from "react";
import "./Login.css";
function Register_page() {
  return (
    <div className="form-container_auth" id="resgister-form">
      {/* <div className="form-container_auth" id="resgister-form"  style={{display : 'none'}}> */}

      <h1 id="auth_topic">Register</h1>
      <img
        id="img_auth"
        src="https://digitorystyle.com/wp-content/uploads/2023/03/warehouse-2048x1348.jpg"
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
        <label for="new_mail" id="label_auth">
          Email
        </label>
        <input
          className="input_auth"
          type="email"
          id="new-email"
          name="new-email"
          required
        ></input>
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

        <label for="password" id="label_auth">
          Password Confirm
        </label>
        <input
          className="input_auth"
          type="password"
          id="password"
          name="password"
          required
        />
        <button id="button_auth" type="submit">
          Sign
        </button>
      </form>
      <p id="auth-box-link ">
        <a id="text_auth">Already have an account? </a>
        <a href="/login" id="login-link">
          Login
        </a>
      </p>


      <a href="/" id="login-link">
        main
      </a>

    </div>
  );
}

export default Register_page;
