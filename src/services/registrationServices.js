import axios from "axios";

const baseURL = "http://localhost:3001/api/client/";
const hostURL = "http://localhost:3001/api/host/";
const tokenURL = "http://localhost:3001/api/token/";

function createClient(registrationToken) {
  return axios.post(`${baseURL}register-client/?token_id=${registrationToken}`);
}

function registerHost(clientData, registrationToken) {
  return axios.post(
    `${hostURL}register/host-invite/?token_id=${registrationToken}`,
    clientData
  );
}

function getCreateRegistrationToken(registrationData, type, inviteToken) {
  return axios.post(
    `${tokenURL}?register=${type}&invite_token=${inviteToken}`,
    registrationData
  );
}

function checkHostRegistrationTokenValidity(registrationToken) {
  return axios.get(`${tokenURL}host-invite/?token_id=${registrationToken}`);
}

export default {
  createClient,
  registerHost,
  getCreateRegistrationToken,
  checkHostRegistrationTokenValidity,
};
