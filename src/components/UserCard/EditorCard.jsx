import axios from "axios";
import React from "react";
import "./UserCard.scss";
const EditorCard = ({ editor }) => {
  // console.log(editor);.[]
  const handleHire = async () => {
    try {
      const res = await axios.put(`users/assign/${editor._id}`);
      console.log(res);
    } catch (err) {}
  };
  return (
    <div className="card-main">
      <div className="main-content">
        <h1 className="name">{editor.name}</h1>
        <button onClick={handleHire}>Hire</button>
      </div>
    </div>
  );
};

export default EditorCard;
