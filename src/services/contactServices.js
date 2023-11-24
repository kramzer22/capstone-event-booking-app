import axios from "axios";

const baseURL = "https://capstone-backend-4pv2.onrender.com/api/inquiry/";
const tokenURL =
  "https://capstone-backend-4pv2.onrender.com/api/token/contact-inquiry/";

function createInquiry(registrationToken) {
  return axios.post(
    `${baseURL}register-inquiry/?token_id=${registrationToken}`
  );
}

function getCreateInquiryToken(inquiryData) {
  return axios.post(tokenURL, inquiryData);
}

export default { getCreateInquiryToken, createInquiry };
