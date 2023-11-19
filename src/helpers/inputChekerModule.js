import moment from "moment/moment";

const isValidBirthDate = (day, month, year) => {
  const birthday = moment(`${year}-${month}-${day}`, "YYYY-MMM-D", true);
  return birthday.isValid();
};

const isValidEmail = (email) => {
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailPattern.test(email);
};

function isValidMobile(number) {
  const regex = /^\d{11}$/;
  return regex.test(number);
}

const setErrorDisplay = (errorState, message, t) => {
  errorState.setErrorDisplay(message);

  setTimeout(() => {
    errorState.setErrorDisplay("");
  }, t);
};

const isValidImageType = (file) => {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
  return allowedTypes.includes(file.type);
};

export default {
  isValidBirthDate,
  isValidEmail,
  isValidMobile,
  isValidImageType,
  setErrorDisplay,
};
