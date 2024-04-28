import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSucces } from "../../redux/userSlice";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("creator");
  const dispatch = useDispatch();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("auth/signup", {
        name,
        email,
        password,
        role,
      });
      console.log(res.data);
    } catch (err) {}
  };

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

  return (
    <div className="login-main">
      <div className="form-container">
        {isLogin ? (
          <div className="login-form">
            <h1 className="title">Sign in</h1>
            <input placeholder="username" className="input-field" onChange={(e) => setName(e.target.value)} />
            <input type="password" placeholder="password" className="input-field" onChange={(e) => setPassword(e.target.value)} />
            <button className="sign-btn" onClick={handleLogin}>Sign in</button>
            <p className="toggle" onClick={() => setIsLogin(false)}>Need an account? Sign up</p>
          </div>
        ) : (
          <div className="signup-form">
            <h1 className="title">Sign up</h1>
            <input placeholder="username" className="input-field" onChange={(e) => setName(e.target.value)} />
            <input placeholder="email" className="input-field" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="password" className="input-field" onChange={(e) => setPassword(e.target.value)} />
            <select className="input-field" onChange={(e) => setRole(e.target.value)}>
              <option value="creator">Creator</option>
              <option value="editor">Editor</option>
            </select>
            <button className="sign-btn" onClick={handleSignup}>Sign up</button>
            <p className="toggle" onClick={() => setIsLogin(true)}>Already have an account? Sign in</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
