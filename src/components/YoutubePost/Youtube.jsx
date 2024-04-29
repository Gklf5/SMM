import React from "react";
import "./Youtube.scss";
const Youtube = ({ post }) => {
  return (
    <div className="youtube">
      <div className="post-card">
        <span>Name{post.title}</span>
        <span>Title</span>
        <span>Discription{post.disc}</span>
      </div>
    </div>
  );
};

export default Youtube;
