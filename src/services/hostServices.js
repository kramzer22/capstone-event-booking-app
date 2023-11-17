import axios from "axios";

const hostURL = "http://localhost:3001/api/host/";

function registerVenue(userToken, data) {
  return axios.post(`${hostURL}venue/create/?token_id=${userToken}`, data);
}

export default { registerVenue };
