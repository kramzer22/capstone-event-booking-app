function RegFormTwo({
  currentFormState,
  firstNameState,
  lastNameState,
  mobileState,
  submitClientFormHandler,
}) {
  const formSubmitHandler = (e) => {
    e.preventDefault();

    submitClientFormHandler();
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
    <form onSubmit={formSubmitHandler}>
      <h2>Registration Form</h2>
      <div>
        <p>First name</p>
        <input
          type="text"
          placeholder="first name"
          name="first"
          onChange={formInputOnChangeHandler}
          value={firstNameState.firstName}
        />
      </div>
      <div>
        <p>last name</p>
        <input
          type="text"
          placeholder="last name"
          name="last"
          onChange={formInputOnChangeHandler}
          value={lastNameState.lastName}
        />
      </div>
      <div>
        <p>Mobile number</p>
        <input
          type="text"
          placeholder="mobile number"
          name="mobile"
          onChange={formInputOnChangeHandler}
          value={mobileState.mobile}
        />
      </div>

      <div>
        <button onClick={backClickHandler}>Back</button>
        <button type="submit">Next</button>
      </div>
    </form>
  );
}

export default RegFormTwo;
