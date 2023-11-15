import { useRef } from "react";

import "./RegFormAll.css";

import inputChekerModule from "../../../helpers/inputChekerModule";
import registrationServices from "../../../services/registrationServices";

function HostFormOne({
  currentFormState,
  emailState,
  reEmailState,
  passwordState,
  errorState,
}) {
  const rePasswordInput = useRef(null);
  const ERROR_DISPLAY_TIME = 4000;

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    if (!inputChekerModule.isValidEmail(emailState.email.trim())) {
      inputChekerModule.setErrorDisplay(
        errorState,
        "Invalid email address",
        ERROR_DISPLAY_TIME
      );
    } else if (emailState.email !== reEmailState.reEmail) {
      console.log("wawawee");
      inputChekerModule.setErrorDisplay(
        errorState,
        "Email mismatch",
        ERROR_DISPLAY_TIME
      );
    } else if (passwordState.password.trim().length < 6) {
      inputChekerModule.setErrorDisplay(
        errorState,
        "Password must be at least 6 character",
        ERROR_DISPLAY_TIME
      );
    } else if (passwordState.password.length < 6) {
      inputChekerModule.setErrorDisplay(
        errorState,
        "Password length must be at least 6 char",
        ERROR_DISPLAY_TIME
      );
    } else if (passwordState.password !== rePasswordInput.current.value) {
      inputChekerModule.setErrorDisplay(
        errorState,
        "Password mismatch",
        ERROR_DISPLAY_TIME
      );
    } else {
      try {
        const response = await registrationServices.checkEmail(
          emailState.email.trim()
        );
        if (response.status === 200) {
          errorState.setErrorDisplay("");
          currentFormState.setCurrentForm(2);
        }
      } catch (error) {
        const errorData = error.response.data;
        if (error.response.status === 401) {
          if (errorData.error === "invalidEmail") {
            inputChekerModule.setErrorDisplay(
              errorState,
              errorData.message,
              ERROR_DISPLAY_TIME
            );
          }
        } else {
          inputChekerModule.setErrorDisplay(
            errorState,
            "Unable to process transaction. Try again!",
            ERROR_DISPLAY_TIME
          );
        }
      }
    }
  };

  return (
    <form className="registration-form" onSubmit={formSubmitHandler}>
      <p>{errorState.errorDisplay}</p>
      <div className="registration email">
        <label className="registration-label" htmlFor="eMail">
          Email: <span>*</span>
        </label>
        <input
          type="email"
          placeholder="email address"
          onChange={(e) => emailState.setEmail(e.target.value)}
          value={emailState.email}
        />
      </div>
      <div className="registration email">
        <label className="registration-label" htmlFor="eMail">
          Re-enter Email: <span>*</span>
        </label>
        <input
          type="text"
          placeholder="re-enter email address"
          onChange={(e) => reEmailState.setReEmail(e.target.value)}
          value={reEmailState.reEmail}
        />
      </div>
      <div className="registration password">
        <label className="registration-label" htmlFor="password">
          Password: <span>*</span>
        </label>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => passwordState.setPassword(e.target.value)}
          value={passwordState.password}
        />
      </div>
      <div className="registration password">
        <label className="registration-label" htmlFor="password">
          Re-enter Password: <span>*</span>
        </label>
        <input
          ref={rePasswordInput}
          type="password"
          placeholder="re-enter password"
        />
      </div>
      <div className="registration-buttons">
        <button className="next one" type="submit">
          Next
        </button>
      </div>
    </form>
  );
}

export default HostFormOne;
