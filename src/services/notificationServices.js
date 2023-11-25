import axios from "axios";

import objectHelperModule from "../helpers/objectHelperModule";

const notificationURL =
  "https://capstone-backend-4pv2.onrender.com/api/notification/";

const getUserToken = () => objectHelperModule.getCookie("userToken");

function getNotification() {
  return axios.get(
    `${notificationURL}${objectHelperModule.getCookie(
      "userRole"
    )}/?token_id=${getUserToken()}`
  );
}

export default { getNotification };
