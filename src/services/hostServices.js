import axios from "axios";

import objectHelperModule from "../helpers/objectHelperModule";

const hostURL = "http://localhost:3001/api/host/";

const getUserToken = () => objectHelperModule.getCookie("userToken");

function registerVenue(venueData) {
  return axios.post(`${hostURL}venue/?token_id=${getUserToken()}`, venueData);
}

function updateVenue(venueId, venueData) {
  return axios.patch(
    `${hostURL}venue/${venueId}?token_id=${getUserToken()}`,
    venueData
  );
}

function uploadVenueImage(venueId, formData) {
  return axios.patch(
    `${hostURL}venue/${venueId}/images/?token_id=${getUserToken()}`,
    formData
  );
}

function getVenues() {
  return axios.get(`${hostURL}venue/?token_id=${getUserToken()}`);
}

function getVenue(venueId) {
  return axios.get(`${hostURL}venue/${venueId}?token_id=${getUserToken()}`);
}

function registerPackage(venueId, packageData) {
  return axios.post(
    `${hostURL}venue/${venueId}/package?token_id=${getUserToken()}`,
    packageData
  );
}

export default {
  registerVenue,
  updateVenue,
  getVenues,
  uploadVenueImage,
  registerPackage,
};
