import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const AddProject = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [title, setTitle] = useState("");
  const [editor, setEditor] = useState("");
  useEffect(() => {
    try {
      const fetchEditor = async () => {
        const { data } = await axios.get(`users/find/${currentUser.employee}`);
        setEditor(data);
      };
      if (currentUser && currentUser.employee) {
        fetchEditor();
      }
      console.log(editor);
    } catch (err) {}
  }, [currentUser]);
  const handlePost = async (e) => {
    e.preventDefault();
    const project = {
      creator: currentUser.id,
      title,
    };
    try {
      const res = await axios.post("project/add", project);
      console.log(res.data);
    } catch (err) {}
  };
  return (
    <div className="post-main">
      <div className="post-content">
        <h1 className="title">Video</h1>
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

export default AddProject;
