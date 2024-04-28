import React from "react";
import Menu from "./components/menu/Menu";
import "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Post from "./pages/post/Post";
import Profile from "./pages/profile/Profile";
import Projects from "./pages/projects/Projects";
import AddProject from "./pages/Addproject/AddProject";
import Users from "./pages/Users/Users.jsx";
import UploadPage from "./pages/upload/upload.jsx";
import AddSocialForm from "./pages/search/Add_socials.jsx";
import UserPage from "./pages/userPage/UserPage.jsx";
import Search from "./pages/search/Search.jsx";
const App = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <div className="menu">
          <Menu />
        </div>
        <div className="content">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/post" element={<Post />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/upload" element={<UploadPage />} />
              <Route path="/addproject" element={<AddProject />} />
              <Route path="/search" element={<Search />} />
              <Route path="/users" element={<Users />} />
              <Route path="/test/addsocials" element={<AddSocialForm />} />
              <Route path="/test/user" element={<UserPage />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
