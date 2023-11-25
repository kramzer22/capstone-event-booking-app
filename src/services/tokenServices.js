import axios from "axios";

import objectHelperModule from "../helpers/objectHelperModule";

const userURL = "https://capstone-backend-4pv2.onrender.com/api/user/";

function checkLoginCredentials(userToken) {
  return axios.get(`${userURL}token/user-cookie/?token_id=${userToken}`);
}

const checkUserCookieCredentials = async (userCookieState) => {
  const userToken = objectHelperModule.getCookie("userToken");
  if (userToken && userToken !== "") {
    try {
      const response = await checkLoginCredentials(userToken);
      if (response.status === 200) {
        objectHelperModule.createCookie({
          name: "userRole",
          value: response.data.user_role,
        });
        userCookieState.setUserCookie(userToken);
        return response.data;
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        userCookieState.setUserCookie("");
        objectHelperModule.createCookie({ name: "userToken", value: "" });
      }
      throw error;
    }
  } else {
    return null;
  }
};

export default { checkLoginCredentials, checkUserCookieCredentials };
