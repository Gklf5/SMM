import axios from "axios";
import React from "react";
import { useState } from "react";
const ProjectCreatorCard = ({ data }) => {
  const { project, editors } = data;
  const [editor, setEditor] = useState("");
  const handleAssign = async () => {
    try {
      // console.log(editor);
      if (!editor) return;
      console.log(project._id);
      const res = await axios.put(`/project/update/editor/${project._id}`, {
        editor,
      });
      console.log(res);
    } catch (error) {}
  };
  return (
    <div className="project-card">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p>Budget: ${project.budget}</p>
      <p>Due Date: {project.dueDate}</p>
      <select
        value={editor}
        onChange={(e) => {
          console.log("triggered");
          setEditor(e.target.value);
        }}
      >
        <option key={"null"} value={""}>
          select editor
        </option>
        {editors.map((editor) => (
          <option key={editor.id} value={editor._id}>
            {editor.name}
          </option>
        ))}
      </select>
      <button onClick={handleAssign}>Assign Editor</button>
    </div>
  );
};

export default ProjectCreatorCard;
