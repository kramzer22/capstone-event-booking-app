import { useState } from "react";
import "./clientRegistration.css";

import HostFormOne from "./registration-components/HostFormOne";
import HostFormTwo from "./registration-components/HostFormTwo";
import HostFormThree from "./registration-components/HostFormThree";

function HostRegistration({ token }) {
  const [email, setEmail] = useState("");
  const [reEmail, setReEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");

  const [errorDisplay, setErrorDisplay] = useState("");
  const [currentForm, setCurrentForm] = useState(1);

  let formDisplay;

  if (currentForm === 1) {
    formDisplay = (
      <HostFormOne
        currentFormState={{
          currentForm: currentForm,
          setCurrentForm: setCurrentForm,
        }}
        emailState={{ email: email, setEmail: setEmail }}
        reEmailState={{ reEmail: reEmail, setReEmail: setReEmail }}
        passwordState={{ password: password, setPassword: setPassword }}
        errorState={{
          errorDisplay: errorDisplay,
          setErrorDisplay: setErrorDisplay,
        }}
      />
    );
  } else if (currentForm === 2) {
    formDisplay = (
      <HostFormTwo
        currentFormState={{
          currentForm: currentForm,
          setCurrentForm: setCurrentForm,
        }}
        firstNameState={{ firstName: firstName, setFirstName: setFirstName }}
        lastNameState={{ lastName: lastName, setLastName: setLastName }}
        birthdateState={{ birthdate: birthdate, setBirthdate: setBirthdate }}
        genderState={{ gender: gender, setGender: setGender }}
        errorState={{
          errorDisplay: errorDisplay,
          setErrorDisplay: setErrorDisplay,
        }}
      />
    );
  } else if (currentForm === 3) {
    formDisplay = (
      <HostFormThree
        currentFormState={{
          currentForm: currentForm,
          setCurrentForm: setCurrentForm,
        }}
        errorState={{
          errorDisplay: errorDisplay,
          setErrorDisplay: setErrorDisplay,
        }}
      />
    );
  }

  return (
    <div className="registration-container">
      <div className="registration-container-form">{formDisplay}</div>
    </div>
  );
}

export default HostRegistration;
