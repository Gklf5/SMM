import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice"; 
import { Avatar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FolderIcon from "@mui/icons-material/Folder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import "./Menu.css";

const Menu = () => {
  const [isMinimized, setIsMinimized] = useState(true);  
  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const toggleSidebar = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className={`sidenav ${isMinimized ? "minimized" : ""}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        <MenuIcon />
      </div>
      <div className="sidenav__buttons">
        <div className="app-name">{isMinimized ? "SF" : "SocialFlow"}</div>
        <Link to="/" className="sidenav__button">
          <HomeIcon />
          <span>Home</span>
        </Link>
        <Link to="/search" className="sidenav__button">
          <SearchIcon />
          <span>Search</span>
        </Link>
        {currentUser ? (
          <>
            <Link to="/messages" className="sidenav__button">
              <ChatIcon />
              <span>Messages</span>
            </Link>
            <Link to="/notifications" className="sidenav__button">
              <NotificationsIcon />
              <span>Notifications</span>
            </Link>
            <Link to="/projects" className="sidenav__button">
              <FolderIcon />
              <span>Projects</span>
            </Link>
            <Link to="/addproject" className="sidenav__button">
              <AddCircleOutlineIcon />
              <span>Create Project</span>
            </Link>
            <Link to="/profile" className="sidenav__button">
              <AccountCircleIcon />
              <span>Profile</span>
            </Link>
            <div className="sidenav__button logout__button" onClick={handleLogout}>
              <span>Logout</span>
            </div>
          </>
        ) : (
          <>
            <Link to="/about" className="sidenav__button">
              <InfoIcon />
              <span>About</span>
            </Link>
            <Link to="/login" className="sidenav__button">
              <LockIcon />
              <span>Login</span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Menu;
