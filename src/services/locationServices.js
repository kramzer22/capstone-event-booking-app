import axios from "axios";

const philippinesLocationApiUrl = "https://psgc.gitlab.io/api/";

function getProvinces() {
  return axios.get(`${philippinesLocationApiUrl}provinces`);
}

function getCities() {
  return axios.get(`${philippinesLocationApiUrl}cities`);
}

function getBarangays() {
  return axios.get(`${philippinesLocationApiUrl}barangays`);
}

export default { getProvinces, getCities, getBarangays };
