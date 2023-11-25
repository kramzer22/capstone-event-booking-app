import axios from "axios";

import objectHelperModule from "../helpers/objectHelperModule";

const venueURL = `http://localhost:3001/api/venues/`;

const getUserToken = () => objectHelperModule.getCookie("userToken");

const getVenues = () => {
  return axios.get(`${venueURL}`);
};

const getVenue = (venueId) => {
  return axios.get(`${venueURL}${venueId}`);
};

const postClientBooking = (data) => {
  return axios.post(`${venueURL}booking/?token_id=${getUserToken()}`, data);
};

export default { getVenue, getVenues, postClientBooking };
