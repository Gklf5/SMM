import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Project.css";
import axios from "axios";
const Projects = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(`project/get/${currentUser.id}`);
        console.log(res.data);
        setProjects(res.data);
      } catch (err) {}
    };
    fetchProject();
  }, [currentUser]);
  return (
    <div className="profile main">
      {projects.map((project) => (
        <div className="user-card">
          <h2>{project.title}</h2>
          <p>Video</p>
          <button>upload</button>
        </div>
      ))}
    </div>
  );
};

export default Projects;
