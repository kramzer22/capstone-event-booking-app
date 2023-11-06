import { useState } from "react";

import "./registration.css";

import RegFormOne from "./registration-components/RegFormOne";
import RegFormTwo from "./registration-components/RegFormTwo";

function Registration({}) {
  const [email, setEmail] = useState("");
  const [reEmail, setReEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [currentForm, setCurrentForm] = useState(1);

  let formDisplay;

  if (currentForm === 1) {
    formDisplay = (
      <RegFormOne
        currentFormState={{
          currentForm: currentForm,
          setCurrentForm: setCurrentForm,
        }}
        emailState={{ email: email, setEmail: setEmail }}
        reEmailState={{ reEmail: reEmail, setReEmail: setReEmail }}
        passwordState={{ password: password, setPassword: setPassword }}
      />
    );
  } else {
    formDisplay = (
      <RegFormTwo
        currentFormState={{
          currentForm: currentForm,
          setCurrentForm: setCurrentForm,
        }}
        firstNameState={{ firstName: firstName, setFirstName: setFirstName }}
        lastNameState={{ lastName: lastName, setLastName: setLastName }}
        mobileState={{ mobile: mobile, setMobile: setMobile }}
      />
    );
  }

  return <div className="registration-container">{formDisplay}</div>;
}

export default Registration;
