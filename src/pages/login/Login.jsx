import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="login-main">
      <div className="login-content">
        <h1 className="title">Sign in</h1>
        <input placeholder="username" className="input-field" />
        <input type="password" placeholder="password" className="input-field" />
        <button className="sign-btn">Signin</button>
        <h1 className="title">Sign up</h1>
        <input placeholder="username" className="input-field" />
        <input placeholder="email" className="input-field" />
        <input type="password" placeholder="password" className="input-field" />
        <button className="sign-btn">Signup</button>
      </div>
    </div>
  );
};

export default Login;
