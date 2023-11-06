import { useState } from "react";

import registrationServices from "../../services/registrationServices.js";
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

  const submitClientFormHandler = () => {
    const newClient = {
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
      number: mobile,
    };

    registrationServices
      .getCreateRegistrationToken()
      .then((response) => {
        const registrationToken = response.data.token;
        console.log(registrationToken);
        registrationServices
          .create(newClient, registrationToken)
          .then((response) => {
            if (response.status === 201) {
              console.log("Succesfully add client.", response.data);
            } else {
              console.log("Something went wrong.");
            }
          })
          .catch((error) => {
            console.log("Error creating contact: ", error);
          });
      })
      .catch((error) => {
        console.log("Error getting token for registration: ", error);
      });
  };

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
        submitClientFormHandler={submitClientFormHandler}
      />
    );
  }

  return <div className="registration-container">{formDisplay}</div>;
}

export default Registration;
