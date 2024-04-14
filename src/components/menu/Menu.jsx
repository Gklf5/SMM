import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FolderIcon from "@mui/icons-material/Folder"; // New icon for projects
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // New icon
import "./Menu.css"; // Import CSS styles

const Menu = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

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
        <Link to="/projects" className="sidenav__button"> {/* New link for projects */}
          <FolderIcon /> {/* Icon for projects */}
          <span>Projects</span>
        </Link>
        <Link to="/Addproject" className="sidenav__button">
          <AddCircleOutlineIcon />
          <span>Create Project</span>
        </Link>
        {currentUser ? (
          <div className="sidenav__button">
            <Avatar>{currentUser.username.charAt(0).toUpperCase()}</Avatar>
            <span>{currentUser.username}</span>
          </div>
        ) : (
          <Link to="/profile" className="sidenav__button"> {/* Changed from "login" to "profile" */}
            <AccountCircleIcon /> {/* Icon changed to AccountCircleIcon */}
            <span>Profile</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Menu;
