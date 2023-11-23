import axios from "axios";

import objectHelperModule from "../helpers/objectHelperModule";

const messagingURL = "http://localhost:3001/api/messaging/";

const getUserToken = () => objectHelperModule.getCookie("userToken");

const getMessagingHistory = (data) => {
  return axios.post(`${messagingURL}?token_id=${getUserToken()}`, data);
};

const sendMessage = (data) => {
  return axios.post(`${messagingURL}send?token_id=${getUserToken()}`, data);
};

export default { getMessagingHistory, sendMessage };
