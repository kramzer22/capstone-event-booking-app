import axios from "axios";

const baseURL = "http://localhost:3001/api/inquiry/";
const tokenURL = "http://localhost:3001/api/token/contact-inquiry/";

function createInquiry(registrationToken) {
  return axios.post(
    `${baseURL}register-inquiry/?token_id=${registrationToken}`
  );
}

function getCreateInquiryToken(inquiryData) {
  return axios.post(tokenURL, inquiryData);
}

export default { getCreateInquiryToken, createInquiry };
