import React, { useState } from "react";
import "./Post.css";
import axios from "axios";
import { useSelector } from "react-redux";
const Post = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [title, setTitle] = useState("");
  const handlePost = async (e) => {
    e.preventDefault();
    const videoPost = {
      creator: currentUser.type ? currentUser.name : currentUser.employee,
      editor: currentUser.type ? "" : currentUser.name,
      title,
    };
    try {
      const res = await axios.post("youtube/", videoPost);
      console.log(res.data);
    } catch (err) {}
  };
  return (
    <div className="post-main">
      <div className="post-content">
        <h1 className="title">Videos</h1>
        <input
          placeholder="title"
          className="input-field"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="sign-btn" onClick={handlePost}>
          Post
        </button>
      </div>
    </div>
  );
};

export default Post;
