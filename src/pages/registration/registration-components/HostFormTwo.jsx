import { useEffect, useState } from "react";

import inputChekerModule from "../../../helpers/inputChekerModule";
import objectHelperModule from "../../../helpers/objectHelperModule";

function HostFormTwo({
  currentFormState,
  firstNameState,
  lastNameState,
  birthdateState,
  genderState,
  errorState,
}) {
  const [days, setDays] = useState([]);
  const [months, setMonths] = useState([]);
  const [years, setYears] = useState([]);

  const ERROR_DISPLAY_TIME = 4000;

  useEffect(() => {
    setMonths(objectHelperModule.monthBuilder());
    setYears(objectHelperModule.yearBuilder());
    if (birthdateState.birthdate.month !== "") {
      setDays(
        objectHelperModule.dayBuilder(
          birthdateState.birthdate.month,
          birthdateState.birthdate.year
        )
      );
    }
  }, []);

  const dayChangeHandler = (value) => {
    if (value !== "") {
      const newBirthdate = { ...birthdateState.birthdate, day: value };
      birthdateState.setBirthdate(newBirthdate);
      console.log(newBirthdate);
    } else {
      const newBirthdate = { ...birthdateState.birthdate, day: "" };
      birthdateState.setBirthdate(newBirthdate);
    }
  };

  const monthChangeHandler = (value) => {
    if (value !== "") {
      setDays(objectHelperModule.dayBuilder(value));
      const newBirthdate = { ...birthdateState.birthdate, month: value };
      birthdateState.setBirthdate(newBirthdate);

      console.log(newBirthdate);
    } else {
      const newBirthdate = { ...birthdateState.birthdate, month: value };
      birthdateState.setBirthdate(newBirthdate);
      setDays([]);
    }
  };

  const yearChangeHandler = (value) => {
    if (value !== "") {
      setDays(
        objectHelperModule.dayBuilder(birthdateState.birthdate.month, value)
      );

      const newBirthdate = { ...birthdateState.birthdate, year: value };
      birthdateState.setBirthdate(newBirthdate);

      console.log(newBirthdate);
    } else {
      const newBirthdate = { ...birthdateState.birthdate, year: value };
      newBirthdate.year = "";
      birthdateState.setBirthdate(newBirthdate);
    }
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    if (firstNameState.firstName.trim() < 1) {
      inputChekerModule.setErrorDisplay(
        errorState,
        "Enter your first name",
        ERROR_DISPLAY_TIME
      );
    } else if (lastNameState.lastName.trim() < 1) {
      inputChekerModule.setErrorDisplay(
        errorState,
        "Enter your last name",
        ERROR_DISPLAY_TIME
      );
    } else if (
      !inputChekerModule.isValidBirthDate(
        birthdateState.birthdate.day,
        birthdateState.birthdate.month,
        birthdateState.birthdate.year
      )
    ) {
      inputChekerModule.setErrorDisplay(
        errorState,
        "Invalid birthdate",
        ERROR_DISPLAY_TIME
      );
    } else if (genderState.gender === "") {
      inputChekerModule.setErrorDisplay(
        errorState,
        "Select a gender",
        ERROR_DISPLAY_TIME
      );
    } else {
      currentFormState.setCurrentForm(3);
    }
  };

  const backClickHandler = () => {
    currentFormState.setCurrentForm(1);
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
          onChange={(e) => firstNameState.setFirstName(e.target.value)}
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
          onChange={(e) => lastNameState.setLastName(e.target.value)}
          value={lastNameState.lastName}
        />
      </div>
      <div className="registration DOB">
        <label className="registration-label" htmlFor="">
          Date of Birth: <span>*</span>
        </label>

        <div className="registration-select">
          <select
            value={birthdateState.birthdate.month}
            onChange={(e) => monthChangeHandler(e.target.value)}
          >
            <option value="">Month</option>
            {months.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
          <select
            value={birthdateState.birthdate.day}
            onChange={(e) => dayChangeHandler(e.target.value)}
          >
            <option value="">Day</option>
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>

          <select
            value={birthdateState.birthdate.year}
            onChange={(e) => yearChangeHandler(e.target.value)}
          >
            <option value="">Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
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
          <select
            value={genderState.gender}
            onChange={(e) => genderState.setGender(e.target.value)}
          >
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="registration-buttons two">
        <button className="back-btn" onClick={backClickHandler}>
          Back
        </button>
        <button className="next two" type="submit">
          Next
        </button>
      </div>
    </form>
  );
}

export default HostFormTwo;
