import { useRef } from "react";

function HostFormOne({
  currentFormState,
  emailState,
  reEmailState,
  passwordState,
  errorState,
}) {
  const rePasswordInput = useRef(null);

  function isValidEmail(email) {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  }

  const errorDisplayTimer = () => {
    setTimeout(() => {
      errorState.setErrorDisplay("");
    }, 3000);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!isValidEmail(emailState.email.trim())) {
      errorState.setErrorDisplay("Invalid email address");
      errorDisplayTimer();
    } else if (emailState.email !== reEmailState.reEmail) {
      errorState.setErrorDisplay("Email mismatch");
      errorDisplayTimer();
    } else if (passwordState.password.trim().length < 6) {
      errorState.setErrorDisplay("Password must be at least 6 character");
      errorDisplayTimer();
    } else if (
      passwordState.password.trim() !== rePasswordInput.current.value.trim()
    ) {
      errorState.setErrorDisplay("Password mismatch");
      errorDisplayTimer();
    } else {
      errorState.setErrorDisplay("");
      currentFormState.setCurrentForm(2);
    }
  };

  const formInputOnChangeHandler = (e) => {
    const name = e.target.name;
    if (name === "email") {
      emailState.setEmail(e.target.value);
    } else if (name === "remail") {
      reEmailState.setReEmail(e.target.value);
    } else if (name === "password") {
      passwordState.setPassword(e.target.value);
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
          name="email"
          onChange={formInputOnChangeHandler}
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
          name="remail"
          onChange={formInputOnChangeHandler}
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
          name="password"
          onChange={formInputOnChangeHandler}
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
