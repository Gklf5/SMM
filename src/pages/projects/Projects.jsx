import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Project.css";
import axios from "axios";
import ProjectCratorCard from "../../components/ProjectCard/ProjectCratorCard";
const Projects = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [projects, setProjects] = useState([]);
  const [editors, setEditors] = useState([]);
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(`project/get/${currentUser.id}`);
        console.log(res.data);
        setProjects(res.data);
        currentUser.role === "creator" && setEditors(currentUser.editors);
      } catch (err) {}
    };
    fetchProject();
  }, [currentUser]);
  return (
    <div className="profile">
      {projects.map((project) => (
        <ProjectCratorCard project={{ project, editors }} />
      ))}
    </div>
  );
};

export default Projects;
