import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("auth/signin", { name, password });
      console.log(res.data);
    } catch (err) {}
  };
  return (
    <div className="login-main">
      <div className="login-content">
        <h1 className="title">Sign in</h1>
        <input
          placeholder="username"
          className="input-field"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="input-field"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="sign-btn" onClick={handleLogin}>
          Signin
        </button>
        <h1 className="title">Sign up</h1>
        <input
          placeholder="username"
          className="input-field"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="email"
          className="input-field"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="input-field"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="sign-btn">Signup</button>
      </div>
    </div>
  );
};

export default Login;
