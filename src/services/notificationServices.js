import axios from "axios";
import React from "react";

import objectHelperModule from "../helpers/objectHelperModule";

const notificationURL = `http://localhost:3001/api/notification/`;

const getUserToken = () => objectHelperModule.getCookie("userToken");

function getNotification() {
  return axios.get(
    `${notificationURL}${objectHelperModule.getCookie(
      "userRole"
    )}/?token_id=${getUserToken()}`
  );
}

export default { getNotification };
