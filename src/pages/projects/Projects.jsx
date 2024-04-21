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
        // console.log(res.data);
        setProjects(res.data);
        // console.log(currentUser.id);
      } catch (err) {}
    };
    const fetchEditors = async () => {
      const res = await axios.get(`users/find/editors/${currentUser._id}`);
      // console.log(res);
      setEditors(res.data);
    };
    fetchProject();
    fetchEditors();
  }, [currentUser]);
  return (
    <div className="profile">
      {projects.map((project) => (
        <ProjectCratorCard data={{ project, editors }} />
      ))}
    </div>
  );
};

export default Projects;
