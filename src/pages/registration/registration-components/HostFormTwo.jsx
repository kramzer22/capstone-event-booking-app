import { useState } from "react";

function HostFormTwo({
  currentFormState,
  firstNameState,
  lastNameState,
  birthdateState,
  genderState,
  errorState,
}) {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = Array.from(
    { length: 120 },
    (_, i) => new Date().getFullYear() - i
  );

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
    }

    currentFormState.setCurrentForm(3);
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
      <div className="registration DOB">
        <label className="registration-label" htmlFor="">
          Date of Birth: <span>*</span>
        </label>

        <div className="registration-select">
          <select value={day} onChange={(e) => setDay(e.target.value)}>
            <option value="">Day</option>
            {daysInMonth.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          <select value={month} onChange={(e) => setMonth(e.target.value)}>
            <option value="">Month</option>
            {months.map((m, index) => (
              <option key={index} value={index + 1}>
                {m}
              </option>
            ))}
          </select>
          <select value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="">Year</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="registration gender">
        <label className="registration-label" htmlFor="">
          Gender: <span>*</span>
        </label>
        <div>
          <select value={day} onChange={(e) => setDay(e.target.value)}>
            <option value="">Male</option>
            <option value="">Female</option>
            <option value="">Other</option>
          </select>
        </div>
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

export default HostFormTwo;
