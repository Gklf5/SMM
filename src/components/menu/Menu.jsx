import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";
const Menu = () => {
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    console.log("logout success");
  };
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <div className="menu">
      <div className="items">
        <Link to="/" className="link">
          <p className="item">Home</p>
        </Link>
        <Link to="/addproject" className="link">
          <p className="item">AddProject</p>
        </Link>
        <Link to="/profile" className="link">
          <p className="item">Profile</p>
        </Link>
        <Link to="/projects" className="link">
          <p className="item">Projects</p>
        </Link>
        {currentUser ? (
          <p className="item" onClick={handleLogout}>
            Logout
          </p>
        ) : (
          <Link to="/login" className="link">
            <p className="item">Login</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Menu;
