import axios from "axios";

const baseURL = "https://capstone-backend-4pv2.onrender.com/api/client/";
const tokenURL =
  "https://capstone-backend-4pv2.onrender.com/api/token/register-client/";

function createClient(registrationToken) {
  return axios.post(`${baseURL}register-client/?token_id=${registrationToken}`);
}

function getCreateRegistrationToken(clientData) {
  return axios.post(tokenURL, clientData);
}

export default { createClient, getCreateRegistrationToken };
