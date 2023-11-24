import axios from "axios";

import objectHelperModule from "../helpers/objectHelperModule";

const messagingURL =
  "https://capstone-backend-4pv2.onrender.com/api/messaging/";

const getUserToken = () => objectHelperModule.getCookie("userToken");
const getUserRole = () => objectHelperModule.getCookie("userRole");

const getMessagingHistory = (data) => {
  return axios.post(`${messagingURL}?token_id=${getUserToken()}`, data);
};

const sendMessage = (data) => {
  return axios.post(`${messagingURL}send?token_id=${getUserToken()}`, data);
};

const getAllMessage = () => {
  return axios.get(
    `${messagingURL}${getUserRole()}/?token_id=${getUserToken()}`
  );
};

export default { getMessagingHistory, sendMessage, getAllMessage };
