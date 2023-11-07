import axios from "axios";

const baseURL = "http://localhost:3001/api/client/";
const tokenURL = "http://localhost:3001/api/token/register-client/";

function createClient(registrationToken) {
  return axios.post(`${baseURL}register-client/?token_id=${registrationToken}`);
}

function getCreateRegistrationToken(clientData) {
  return axios.post(tokenURL, clientData);
}

export default { createClient, getCreateRegistrationToken };
