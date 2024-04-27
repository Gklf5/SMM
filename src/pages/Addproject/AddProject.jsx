import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./AddProject.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase.js";
const AddProject = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [video, setVideo] = useState(undefined);
  const [videoUrl, setVideoUrl] = useState("");
  const [videoper, setVideoper] = useState(0);

  useEffect(() => {
    const uploadVideo = () => {
      const storage = getStorage(app);
      const videoName = new Date().getTime() + video.name;
      const storageRef = ref(storage, videoName);
      const uploadTask = uploadBytesResumable(storageRef, video);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setVideoper(Math.round(progress));
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {},
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setVideoUrl(downloadURL);
          });
        }
      );
    };
    video && uploadVideo();
  }, [video]);

  const handlePost = async (e) => {
    e.preventDefault();
    const project = {
      creator: currentUser.id,
      title: projectName,
      desc: projectDescription,
      files: videoUrl,
      budget,
      dueDate,
    };
    try {
      const res = await axios.post("project/add", project);
      console.log(res.data);
      setProjectName("");
      setProjectDescription("");
      setBudget("");
      setDueDate("");
      setVideo(null);
    } catch (err) {
      console.error("Error posting project:", err);
    }
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
        {videoper > 0 ? (
          "Uploading:" + videoper
        ) : (
          <>
            <input
              type="file"
              id="files"
              accept="video/*"
              style={{ display: "none" }}
              onChange={(e) => setVideo(e.target.files[0])}
            />
            <label htmlFor="files" className="add-files-btn">
              Add Files
            </label>
          </>
        )}
        <button className="add-project-btn" onClick={handlePost}>
          Post
        </button>
      </div>
    </div>
  );
};

export default AddProject;
