import React from "react";
import "./Profile.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
const Profile = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <div className="profile-main">
      <div className="user-card">
        <h2>name</h2>
        <p>Email: </p>
      </div>
      <div className="user-card">
        <h2>name</h2>
        <p>Email: </p>
      </div>
      <div className="user-card">
        <h2>name</h2>
        <p>Email: </p>
      </div>
      <div className="user-card">
        <h2>name</h2>
        <p>Email: </p>
      </div>
      <div className="user-card">
        <h2>name</h2>
        <p>Email: </p>
      </div>
    </div>
  );
};

export default Profile;
