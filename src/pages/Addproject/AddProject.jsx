import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./AddProject.css";

const AddProject = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();
    const project = {
      creator: currentUser.id,
      projectName,
      projectDescription,
      budget,
      dueDate,
    };
    try {
      const res = await axios.post("project/add", project);
      console.log(res.data);
    } catch (err) {
      console.error("Error posting project:", err);
    }
  };

  const handleAddFiles = (e) => {
    const files = e.target.files;
    // Handle uploading files here
    console.log("Files selected:", files);
  };

  return (
    <div className="add-project-main">
      <div className="add-project-content">
        <h1 className="add-project-title">Add Project</h1>
        <div className="input-group">
          <label className="input-label">Project Name</label>
          <input
            type="text"
            className="add-project-input-field"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="input-label">Project Description</label>
          <input
            type="text"
            className="add-project-input-field"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="input-label">Budget</label>
          <input
            type="text"
            className="add-project-input-field"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="input-label">Due Date</label>
          <input
            type="date"
            className="add-project-input-field"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            placeholder=""
          />
        </div>
        <input
          type="file"
          id="files"
          style={{ display: "none" }}
          onChange={handleAddFiles}
        />
        <label htmlFor="files" className="add-files-btn">
          Add Files
        </label>
        <button className="add-project-btn" onClick={handlePost}>
          Post
        </button>
      </div>
    </div>
  );
};

export default AddProject;
