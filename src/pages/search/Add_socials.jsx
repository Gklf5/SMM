import React from "react";
import { useState } from "react";
const AddSocialForm = () => {
  const handleSubmit = (e) => {};
  const [media, setMedia] = useState("");
  const [apiKey, setApiKey] = useState("");
  return (
    <form onSubmit={handleSubmit}>
      <div className="main-form">
        <label htmlFor="media">Select Media:</label>
        <select
          id="media"
          value={media}
          onChange={(e) => setMedia(e.target.value)}
          required
        >
          <option value="">Select Media</option>
          <option value="youtube">YouTube</option>
          <option value="twitter">Twitter</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div>
        <label htmlFor="apiField">API Field:</label>
        <input
          type="text"
          id="apiField"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          required
        />
      </div>
      <button type="submit">Continue</button>
    </form>
  );
};

export default AddSocialForm;
