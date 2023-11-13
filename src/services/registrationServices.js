import axios from "axios";

const baseURL = "http://localhost:3001/api/client/";
const hostURL = "http://localhost:3001/api/host/";
const tokenURL = "http://localhost:3001/api/token/register-client/";

function createClient(registrationToken) {
  return axios.post(`${baseURL}register-client/?token_id=${registrationToken}`);
}

function getCreateRegistrationToken(clientData) {
  return axios.post(tokenURL, clientData);
}

function checkHostRegistrationTokenValidity(registrationToken) {
  return axios.get(`${hostURL}check?token_id=${registrationToken}`);
}

export default {
  createClient,
  getCreateRegistrationToken,
  checkHostRegistrationTokenValidity,
};
