import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";
import { current } from "@reduxjs/toolkit";
import { Avatar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FolderIcon from "@mui/icons-material/Folder"; // New icon for projects
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // New icon
import LockIcon from "@mui/icons-material/Lock"; // Icon for login
import "./Menu.css"; // Import CSS styles

const Menu = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    console.log("log out success");
  };

  return (
    <div className="sidenav">
      <div className="sidenav__buttons">
        <div className="app-name">SocialFlow</div> {/* Added app name here */}
        <Link to="/" className="sidenav__button">
          <HomeIcon />
          <span>Home</span>
        </Link>
        <Link to="/search" className="sidenav__button">
          <SearchIcon />
          <span>Search</span>
        </Link>
        <Link to="/messages" className="sidenav__button">
          <ChatIcon />
          <span>Messages</span>
        </Link>
        <Link to="/notifications" className="sidenav__button">
          <NotificationsIcon />
          <span>Notifications</span>
        </Link>
        <Link to="/projects" className="sidenav__button">
          {" "}
          {/* New link for projects */}
          <FolderIcon /> {/* Icon for projects */}
          <span>Projects</span>
        </Link>
        <Link to="/Addproject" className="sidenav__button">
          <AddCircleOutlineIcon />
          <span>Create Project</span>
        </Link>
        {currentUser ? (
          <div className="sidenav__button">
            <Avatar>{currentUser.name.charAt(0).toUpperCase()}</Avatar>
            <span>{currentUser.name}</span>
          </div>
        ) : (
          <Link to="/login" className="sidenav__button">
            {" "}
            {/* Link to the login page */}
            <LockIcon />
            <span>Login</span>
          </Link>
        )}
        <Link to="/profile" className="sidenav__button">
          {" "}
          {/* Link to the profile page */}
          <AccountCircleIcon />
          <span>Profile</span>
        </Link>
        {currentUser ? (
          <div className="sidenav__button">
            <span onClick={handleLogout}>LogOut</span>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Menu;
