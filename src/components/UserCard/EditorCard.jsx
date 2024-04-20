import React from "react";

const EditorCard = ({ editor }) => {
  // console.log(editor);
  return (
    <div className="card-main">
      <div className="main-content">
        <h1 className="name">{editor.name}</h1>
        <button>Hire</button>
      </div>
    </div>
  );
};

export default EditorCard;
