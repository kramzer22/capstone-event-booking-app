import moment from "moment/moment";

const isValidBirthDate = (day, month, year) => {
  const birthday = moment(`${year}-${month}-${day}`, "YYYY-MMM-D", true);
  return birthday.isValid();
};

const isValidEmail = (email) => {
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailPattern.test(email);
};

const setErrorDisplay = (errorState, message, t) => {
  errorState.setErrorDisplay(message);

  setTimeout(() => {
    errorState.setErrorDisplay("");
  }, t);
};

export default { isValidBirthDate, isValidEmail, setErrorDisplay };
