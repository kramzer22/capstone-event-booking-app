function RegFormOne({
  currentFormState,
  emailState,
  reEmailState,
  passwordState,
}) {
  const formSubmitHandler = (e) => {
    e.preventDefault();

    currentFormState.setCurrentForm(2);
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
    <form onSubmit={formSubmitHandler}>
      <h2>Registration Form</h2>
      <div>
        <p>Email</p>
        <input
          type="email"
          placeholder="email address"
          name="email"
          onChange={formInputOnChangeHandler}
          value={emailState.email}
        />
      </div>
      <div>
        <p>Retype email</p>
        <input
          type="email"
          placeholder="re-email address"
          name="remail"
          onChange={formInputOnChangeHandler}
          value={reEmailState.reEmail}
        />
      </div>
      <div>
        <p>Password</p>
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={formInputOnChangeHandler}
          value={passwordState.password}
        />
      </div>
      <div>
        <p>Retype password</p>
        <input type="password" />
      </div>
      <div>
        <button type="submit">Next</button>
      </div>
    </form>
  );
}

export default RegFormOne;
