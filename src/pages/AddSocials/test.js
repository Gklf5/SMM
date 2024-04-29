import { google } from "googleapis";
const SCOPES = ["https://www.googleapis.com/auth/youtube.upload"];
export const getUrl = (cred) => {
  const oauth2Client = new google.auth.OAuth2(
    cred.client_id,
    cred.client_secrete,
    cred.riderictURl
  );
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });
  return { oauth2Client, authUrl };
  // window.open(authorizationUrl, "_blank");
};

export const getTokenAuth = async (oauth2Client, code) => {
  try {
    const token = await oauth2Client.getToken(code);
    // Store the token or use it as needed
    console.log("Access token:", token);
    // Redirect the user to another page if necessary
  } catch (error) {
    console.error("Error while trying to retrieve access token:", error);
  }
};
