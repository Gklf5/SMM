import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Menu = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <div className="menu">
      <div className="items">
        <Link to="/" className="link">
          <p className="item">Home</p>
        </Link>
        {currentUser ? (
          <p className="item">Logout</p>
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
