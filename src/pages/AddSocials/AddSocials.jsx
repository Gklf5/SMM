import React from "react";
import { useState } from "react";
// import { google } from "googleapis";
import "./AddSocial.scss";
import axios from "axios";
// import { getUrl, getTokenAuth } from "./test.js";
const AddSocialForm = () => {
  ///////////////////////////////////////////
  const [media, setMedia] = useState("");
  const [client_id, setClient_id] = useState("");
  const [client_secret, setClient_secret] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!client_id || !client_secret) {
      return;
    }
    // const cred = {
    //   client_id,
    //   client_secret,
    // };
    // console.log(cred);
    try {
      const res = await axios.put("users/socials/add", { media });
      console.log(res.data);
      const res2 = await axios.get(`youtube/upload/token/${res.data}`, {
        client_id,
        client_secret,
      });
      console.log(res2.data);
    } catch (err) {
      console.log(err);
    }
    // handleAuthorize(handleCodeSubmit);
  };

  return (
    <div className="add-social-form">
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
            {/* <option value="twitter">Twitter</option> */}
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="api-field">
          <label htmlFor="client_id">Client Id</label>
          <input
            type="text"
            id="client_id"
            value={client_id}
            onChange={(e) => setClient_id(e.target.value)}
            required
          />
          <label htmlFor="client_secret">Client Secret</label>
          <input
            type="text"
            id="client_secret"
            value={client_secret}
            onChange={(e) => setClient_secret(e.target.value)}
            required
          />
          {/* <label htmlFor="code">Access code</label>
          <input
            type="text"
            id="code"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
            }}
          /> */}
        </div>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default AddSocialForm;
