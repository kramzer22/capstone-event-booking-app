import axios from "axios";

const venueURL = "http://localhost:3001/api/venues/";

const getVenues = () => {
  return axios.get(`${venueURL}`);
};

export default { getVenues };
