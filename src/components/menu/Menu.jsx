import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className="menu">
      <div className="items">
        <Link to="/" className="link">
          <p className="item">Home</p>
        </Link>
        <Link to="/login" className="link">
          <p className="item">Login</p>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
