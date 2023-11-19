import axios from "axios";

import objectHelperModule from "../helpers/objectHelperModule";

const hostURL = "http://localhost:3001/api/host/";

const getUserToken = () => objectHelperModule.getCookie("userToken");

function registerVenue(venueData) {
  return axios.post(`${hostURL}venue/?token_id=${getUserToken()}`, venueData);
}

function updateVenue(venueData) {
  return axios.patch(`${hostURL}venue/?token_id=${getUserToken()}`, venueData);
}

function uploadVenueImage(formData) {
  return axios.patch(
    `${hostURL}venue/images/?token_id=${getUserToken()}`,
    formData
  );
}

function getVenues() {
  return axios.get(`${hostURL}venue/?token_id=${getUserToken()}`);
}

function getVenue(venueId) {
  return axios.get(`${hostURL}venue/${venueId}?token_id=${getUserToken()}`);
}

export default { registerVenue, updateVenue, getVenues, uploadVenueImage };
