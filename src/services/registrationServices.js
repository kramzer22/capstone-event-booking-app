import axios from "axios";

const clientURL = "https://capstone-backend-4pv2.onrender.com/api/client/";
const userURL = "https://capstone-backend-4pv2.onrender.com/api/user/";
const hostURL = "https://capstone-backend-4pv2.onrender.com/api/host/";
const tokenURL = "https://capstone-backend-4pv2.onrender.com/api/token/";

function registerClient(registrationToken) {
  return axios.post(`${clientURL}register/?token_id=${registrationToken}`);
}

function registerHost(hostData, registrationToken) {
  return axios.post(
    `${hostURL}register/?token_id=${registrationToken}`,
    hostData
  );
}

function checkEmail(email) {
  return axios.get(`${userURL}check/${email}`);
}

function createUserRegistrationToken(registrationData) {
  return axios.post(
    `${tokenURL}register/client-registration`,
    registrationData
  );
}

function checkHostRegistrationTokenValidity(registrationToken) {
  return axios.get(`${tokenURL}host-invite/?token_id=${registrationToken}`);
}

function checkLoginCredentials(userData) {
  return axios.post(`${userURL}login`, userData);
}

export default {
  registerClient,
  registerHost,
  createUserRegistrationToken,
  checkHostRegistrationTokenValidity,
  checkEmail,
  checkLoginCredentials,
};
