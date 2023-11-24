import axios from "axios";

import objectHelperModule from "../helpers/objectHelperModule";

const bookingURL = "https://capstone-backend-4pv2.onrender.com/api/booking/";

const getUserToken = () => objectHelperModule.getCookie("userToken");

function getBookingTransactions() {
  return axios.get(
    `${bookingURL}${objectHelperModule.getCookie(
      "userRole"
    )}/?token_id=${getUserToken()}`
  );
}

function setBookingTransaction(bookId, instruction) {
  return axios.patch(
    `${bookingURL}${objectHelperModule.getCookie(
      "userRole"
    )}/${bookId}/${instruction}/?token_id=${getUserToken()}`
  );
}

export default { getBookingTransactions, setBookingTransaction };
