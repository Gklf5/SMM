import React from "react";
import Menu from "./components/menu/Menu";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Post from "./pages/post/Post";
import Profile from "./pages/profile/Profile";
import Projects from "./pages/projects/Projects";
const App = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <Menu />
        <div className="content">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/post" element={<Post />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/projects" element={<Projects />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
