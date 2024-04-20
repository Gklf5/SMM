import React from "react";
import { useState } from "react";
const ProjectCreatorCard = ({ project, editors }) => {
  const [editor, setEditor] = useState("select editor");
  const handleAssign = () => {};
  return (
    <div className="project-card">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <p>Budget: ${project.budget}</p>
      <p>Due Date: {project.dueDate}</p>
      <select value={editor} onChange={(e) => setEditor(e.target.value)}>
        {!editors ? (
          <option>No editors</option>
        ) : (
          editors.map((editor) => (
            <option key={editor.id} value={editor.id}>
              {editor.name}
            </option>
          ))
        )}
      </select>
      <button onClick={handleAssign}>Assign Editor</button>
    </div>
  );
};

export default ProjectCreatorCard;
