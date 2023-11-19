import axios from "axios";

import objectHelperModule from "../helpers/objectHelperModule";

const userURL = "http://localhost:3001/api/user/";

function checkLoginCredentials(userToken) {
  return axios.get(`${userURL}token/user-cookie/?token_id=${userToken}`);
}

const checkUserCookieCredentials = async (userCookieState) => {
  const userToken = objectHelperModule.getCookie("userToken");
  if (userToken && userToken !== "") {
    try {
      const response = await checkLoginCredentials(userToken);

      if (response.status === 200) {
        userCookieState.setUserCookie(userToken);
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        userCookieState.setUserCookie("");
        objectHelperModule.createCookie({ name: "userToken", value: "" });
      }
    }
  }
};

export default { checkLoginCredentials, checkUserCookieCredentials };
