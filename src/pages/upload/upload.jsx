import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./upload.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase.js";
import axios from "axios";
const UploadPage = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [video, setVideo] = useState(undefined);
  const [videoUrl, setVideoUrl] = useState("");
  const [videoper, setVideoper] = useState(0);
  const [title, setTitle] = useState(0);
  const [description, setDescription] = useState(0);

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

  const handleUpload = async () => {
    if (video) {
      console.log("Uploading video:", videoUrl);
      await axios.post("/youtube/", {
        creator: currentUser.assigned_by,
        editor: currentUser._id,
        title,
        desc: description,
        videoUrl,
      });
      // Implement upload functionality here
      //post to youtubeModels
    } else {
      console.log("No video selected");
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload Video</h2>
      <div className="upload-form">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          onChange={(e) => setDescription(e.target.description)}
        />
        {videoper > 0 ? (
          "Uploading:" + videoper
        ) : (
          <>
            <input
              type="file"
              id="files"
              accept="video/*"
              onChange={(e) => setVideo(e.target.files[0])}
            />
          </>
        )}
        <button className="upload-btn" onClick={handleUpload}>
          Upload
        </button>
      </div>
    </div>
  );
};

export default UploadPage;
