function RegFormTwo({
  currentFormState,
  firstNameState,
  lastNameState,
  mobileState,
  errorState,
  submitClientFormHandler,
}) {
  const errorDisplayTimer = () => {
    setTimeout(() => {
      errorState.setErrorDisplay("");
    }, 3000);
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    if (firstNameState.firstName.trim() < 1) {
      errorState.setErrorDisplay("Enter your first name");
      errorDisplayTimer();
    } else if (lastNameState.lastName.trim() < 1) {
      errorState.setErrorDisplay("Enter your last name");
      errorDisplayTimer();
    } else if (mobileState.mobile.replace(" ", "").length > 11) {
      errorState.setErrorDisplay("Enter a valid mobile number");
      errorDisplayTimer();
    } else {
      submitClientFormHandler();
    }
  };

  const backClickHandler = () => {
    currentFormState.setCurrentForm(1);
  };

  const formInputOnChangeHandler = (e) => {
    const name = e.target.name;
    if (name === "first") {
      firstNameState.setFirstName(e.target.value);
    } else if (name === "last") {
      lastNameState.setLastName(e.target.value);
    } else if (name === "mobile") {
      mobileState.setMobile(e.target.value);
    }
  };

  return (
    <form className="registration-form" onSubmit={formSubmitHandler}>
      <p>{errorState.errorDisplay}</p>
      <div className="registration fname">
        <label className="registration-label" htmlFor="fName">
          First Name: <span>*</span>
        </label>
        <input
          type="text"
          placeholder="first name"
          name="first"
          onChange={formInputOnChangeHandler}
          value={firstNameState.firstName}
        />
      </div>
      <div className="registration lname">
        <label htmlFor="lName" className="registration-label">
          Last Name: <span>*</span>
        </label>
        <input
          type="text"
          placeholder="last name"
          name="last"
          onChange={formInputOnChangeHandler}
          value={lastNameState.lastName}
        />
      </div>
      <div className="registration number">
        <label className="registration-label" htmlFor="">
          Mobile Number: <span>*</span>
        </label>
        <input
          type="text"
          placeholder="mobile number"
          name="mobile"
          onChange={formInputOnChangeHandler}
          value={mobileState.mobile}
        />
      </div>

      <div className="registration-buttons two">
        <button className="back-btn" onClick={backClickHandler}>Back</button>
        <button className="next two" type="submit">
          Next
        </button>
      </div>
    </form>
  );
}

export default RegFormTwo;
