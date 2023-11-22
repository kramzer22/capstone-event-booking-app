import axios from "axios";

import objectHelperModule from "../helpers/objectHelperModule";

const bookingURL = "http://localhost:3001/api/booking/";

const getUserToken = () => objectHelperModule.getCookie("userToken");

function getBookingTransactions() {
  return axios.get(
    `${bookingURL}${objectHelperModule.getCookie(
      "userRole"
    )}/?token_id=${getUserToken()}`
  );
}

function acceptBookingTransaction(bookId) {
  return axios.patch(
    `${bookingURL}${objectHelperModule.getCookie(
      "userRole"
    )}/${bookId}/?token_id=${getUserToken()}`
  );
}

export default { getBookingTransactions, acceptBookingTransaction };
