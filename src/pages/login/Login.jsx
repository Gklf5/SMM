import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSucces } from "../../redux/userSlice";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("auth/signin", { name, password });
      console.log(res.data);
      dispatch(loginSucces(res.data));
    } catch (err) {
      dispatch(loginFailure());
    }
  };

  const handleSignupRedirect = () => {
    // Redirect the user to the signup page
    // You can use React Router for navigation
    // Example: history.push("/signup");
  };

  return (
    <div className="login-main">
      <div className="login-content">
        <h1 className="title">login</h1>
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
          login
        </button>
        <p>Don't have an account? <span onClick={handleSignupRedirect} className="signup-link">Create one</span></p>
      </div>
    </div>
  );
};

export default Login;