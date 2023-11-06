import axios from "axios";

const baseURL = "http://localhost:3001/api/client/";
const tokenURL = "http://localhost:3001/api/key/register/";

function create(newObject, registrationToken) {
  return axios.post(`${baseURL}?key_id=${registrationToken}`, newObject);
}

function getCreateRegistrationToken() {
  return axios.get(tokenURL);
}

export default { create, getCreateRegistrationToken };
