import axios from "axios";

const baseURL = "http://localhost:3001/api/client/";
const hostURL = "http://localhost:3001/api/host/";
const tokenURL = "http://localhost:3001/api/token/register-user/";

function createClient(registrationToken) {
  return axios.post(`${baseURL}register-client/?token_id=${registrationToken}`);
}

function registerHost(registrationToken) {
  return axios.post(`${hostURL}register/?token_id=${registrationToken}`);
}

function getCreateRegistrationToken(registrationData, type) {
  return axios.post(`${tokenURL}?register=${type}`, registrationData);
}

function checkHostRegistrationTokenValidity(registrationToken) {
  return axios.get(`${hostURL}check/?token_id=${registrationToken}`);
}

export default {
  createClient,
  registerHost,
  getCreateRegistrationToken,
  checkHostRegistrationTokenValidity,
};
