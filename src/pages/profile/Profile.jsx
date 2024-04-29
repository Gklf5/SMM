import React from "react";
import "./Profile.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CreatorCard from "../../components/UserCard/CreatorCard";
import EditorCard from "../../components/UserCard/EditorCard";
import ProjectCratorCard from "../../components/ProjectCard/ProjectCratorCard";
import ProjectEditorCard from "../../components/ProjectCard/ProjectEditorCard";
import SocialMediaCard from "../../components/socialsCard/SocialMediaCard";
import axios from "axios";
import Youtube from "../../components/YoutubePost/Youtube";
function Profile() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [editors, setEditors] = useState([]);
  const [socials, setSocials] = useState([]);
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        // console.log("triggered");
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
    const fetchUsers = async () => {
      console.log("triggered userfetch");
      // console.log(currentUser);
      try {
        const res = await axios.get(
          `users/find/${
            currentUser.role === "editor" ? "assigned" : "editors"
          }/${currentUser._id}`
        );
        setUsers(res.data);
        // console.log(res);
      } catch (err) {
        console.log(err);
      }
      // if (!users) console.log("empty user");
      // console.log(users);
    };
    const fetchSocials = async () => {
      const res = await axios.get(`users/find/socials/${currentUser._id}`);
      // console.log(res);
      setSocials(res.data);
    };
    const fetchYoutube = async () => {
      const res = await axios.get(`youtube/get/${currentUser._id}`);
      setPost(res.data);
    };
    fetchProject();
    fetchEditors();
    fetchUsers();
    if (currentUser.role === "creator") {
      fetchSocials();
      fetchYoutube();
      // console.log(socials);
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
        <div className="head">
          <span>Projects</span>
          {currentUser.role === "creator" ? (
            <>
              <Link to="/addproject">
                <button>Add Project</button>
              </Link>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="content">
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
      <div className="socials">
        <div className="head">
          <span>Socials</span>
          <Link to="/users/addsocials">
            <button>Add Socials</button>
          </Link>
        </div>
        <div className="content">
          {socials &&
            socials.map((social) => {
              <SocialMediaCard social={social} />;
            })}
        </div>
        <div className="content">
          {posts &&
            socials.map((post) => {
              <Youtube social={post} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Profile;
