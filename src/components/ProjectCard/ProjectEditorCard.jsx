import React from "react";
import { Link } from "react-router-dom";

const ProjectEditorCard = ({ project }) => {
  console.log(project);
  const handleDownload = () => {
    window.open(project.files, "_blank");
  };

  const handleUpload = () => {
    // Handle upload logic
  };

  const handleAccept = () => {
    // Handle accept logic
  };

  const handleReject = () => {
    // Handle reject logic
  };

  return (
    <div className="project-card">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p>Budget: ${project.budget}</p>
      <p>Due Date: {project.dueDate}</p>
      <button onClick={handleDownload}>Download</button>
      <Link to="/upload">
        <button>Upload</button>
      </Link>
      <button onClick={handleAccept}>Accept</button>
      <button onClick={handleReject}>Reject</button>
    </div>
  );
};

export default ProjectEditorCard;
