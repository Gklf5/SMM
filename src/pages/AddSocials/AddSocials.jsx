import React from "react";
import { useState } from "react";
// import { google } from "googleapis";
import "./AddSocial.scss";
import axios from "axios";
// import { getUrl, getTokenAuth } from "./test.js";
const AddSocialForm = () => {
  ///////////////////////////////////////////
  const [authorizationUrl, setAuthorizationUrl] = useState("");
  const [code, setCode] = useState("");
  const [token, setToken] = useState("");
  const [credential, setCredential] = useState({});
  const [media, setMedia] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [client_id, setClient_id] = useState("");
  const [client_secrete, setClient_secrete] = useState("");

  // const handleAuthorize = (callback) => {
  //   const cred = {
  //     client_id,
  //     client_secrete,
  //     redirectUrl: "http://localhost:5555",
  //   };
  //   setCredential(cred);
  //   const { oauth2Client, authUrl } = getUrl(credential);
  //   setAuthorizationUrl(authUrl);
  //   window.open(authorizationUrl, "_blank");
  //   const userCode = prompt("Enter code:");
  //   callback(oauth2Client, userCode);
  // };

  // const handleCodeSubmit = async (oauth2Client, code) => {
  //   const res = getTokenAuth(oauth2Client, code);
  //   setToken(res);
  //   try {
  //     const res = await axios.put("users/socials/add", {
  //       media,
  //       credential,
  //       token,
  //     });
  //     console.log(res);
  //   } catch (error) {
  //     console.log("error", error.message);
  //   }
  // };

  // const handleTokenExchange = async () => {
  //   try {
  //     const token = await oauth2Client.getToken("AUTHORIZATION_CODE");
  //     // Store the token or use it as needed
  //     console.log("Access token:", token);
  //     // Redirect the user to another page if necessary
  //   } catch (error) {
  //     console.error("Error while trying to retrieve access token:", error);
  //   }
  // };
  //////////////////////////////////////////
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!client_id || !client_secrete) {
      return;
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
          <label htmlFor="client_secrete">Client Secret</label>
          <input
            type="text"
            id="client_secrete"
            value={client_secrete}
            onChange={(e) => setClient_secrete(e.target.value)}
            required
          />
          <label htmlFor="client_id">Client Id</label>
          <input
            type="text"
            id="client_id"
            value={client_id}
            onChange={(e) => setClient_id(e.target.value)}
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
