import React from "react";
import "./Profile.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CreatorCard from "../../components/UserCard/CreatorCard";
import EditorCard from "../../components/UserCard/EditorCard";
import ProjectCratorCard from "../../components/ProjectCard/ProjectCratorCard";
import ProjectEditorCard from "../../components/ProjectCard/ProjectEditorCard";
import SocialMediaCard from "../../components/socialsCard/SocialMediaCard";
import axios from "axios";
function Profile() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [editors, setEditors] = useState([]);
  const [socials, setSocials] = useState([]);
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
    const fetchUsers = async () => {
      // console.log(currentUser);
      const res = await axios.get(
        `users/find/${currentUser.role === "editor" ? "assigned" : "editors"}/${
          currentUser._id
        }`
      );
      setUsers(res.data);
      // console.log(res);
    };
    fetchUsers();
    const fetchSocials = async () => {
      const res = await axios.get(`users/find/socials/${currentUser._id}`);
      // console.log(res);
      setSocials(res);
    };
    if (currentUser.role === "creator") {
      fetchSocials();
    }
  }, [currentUser]);
  return (
    <div className="profile">
      <div className="header">
        <span className="title">Profile</span>
        <span>{currentUser.role}</span>
      </div>
      <div className="basic">
        <span>{currentUser.name}</span>
        <span>{currentUser.email}</span>
      </div>
      <div className="employee">
        {!users.length ? (
          <>
            <span>No Users</span>
          </>
        ) : (
          ""
        )}
        <div className="card">
          {users &&
            users.map((user) => {
              // console.log(user);
              return currentUser.role === "creator" ? (
                <EditorCard editor={user} />
              ) : (
                <CreatorCard creator={user} />
              );
            })}
        </div>
      </div>
      <div className="projects">
        <div className="project-card">
          <div className="profile">
            {projects &&
              projects.map((project) =>
                currentUser.role === "creator" ? (
                  <ProjectCratorCard data={{ project, editors }} />
                ) : (
                  <ProjectEditorCard project={project} />
                )
              )}
          </div>
        </div>
      </div>
      <div className="socials">
        {/* {socials && } */}
        <SocialMediaCard />
      </div>
    </div>
  );
}

export default Profile;
