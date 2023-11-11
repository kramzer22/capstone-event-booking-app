import { useState } from "react";

import registrationServices from "../../services/registrationServices.js";
import "./clientRegistration.css";

import Header from "../../components/header/Header.jsx";
import RegFormOne from "./registration-components/RegFormOne.jsx";
import RegFormTwo from "./registration-components/RegFormTwo.jsx";
import SuccessFulRegistration from "./registration-components/SuccessfulRegistration.jsx";

function ClientRegistration({}) {
  const [email, setEmail] = useState("");
  const [reEmail, setReEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [errorDisplay, setErrorDisplay] = useState("");

  const [currentForm, setCurrentForm] = useState(1);

  const clearAllInput = () => {
    setEmail("");
    setReEmail("");
    setPassword("");
    setMobile("");
    setFirstName("");
    setLastName("");
    setErrorDisplay("");
  };

  const submitClientFormHandler = () => {
    const newClient = {
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
      number: mobile,
    };

    registrationServices
      .getCreateRegistrationToken(newClient)
      .then((response) => {
        if (response.status === 201) {
          registrationServices
            .createClient(response.data.token)
            .then((response) => {
              if (response.status === 201) {
                console.log("Client successfully registered", response.data);
                clearAllInput();

                setCurrentForm(3);
              }
            })
            .catch((error) => {
              const errorData = error.response;
              if (errorData) {
                if (errorData.status === 400) {
                  console.log("Bad request", errorData.data);
                } else if (errorData.status === 403) {
                  console.log("Request denied", errorData.data);
                }
              } else {
                console.log("Network problem.");
              }
            });
        }
      })
      .catch((error) => {
        const errorData = error.response;
        if (errorData) {
          if (errorData.status === 400) {
            console.log("Bad request", errorData.data);
          } else if (errorData.status === 403) {
            console.log("Request denied", errorData.data);
          }
        } else {
          console.log("Network problem.");
        }
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
        errorState={{
          errorDisplay: errorDisplay,
          setErrorDisplay: setErrorDisplay,
        }}
      />
    );
  } else if (currentForm === 2) {
    formDisplay = (
      <RegFormTwo
        currentFormState={{
          currentForm: currentForm,
          setCurrentForm: setCurrentForm,
        }}
        firstNameState={{ firstName: firstName, setFirstName: setFirstName }}
        lastNameState={{ lastName: lastName, setLastName: setLastName }}
        mobileState={{ mobile: mobile, setMobile: setMobile }}
        errorState={{
          errorDisplay: errorDisplay,
          setErrorDisplay: setErrorDisplay,
        }}
        submitClientFormHandler={submitClientFormHandler}
      />
    );
  } else {
    <SuccessFulRegistration />;
  }

  return (
    <>
      <Header />
      <div className="registration-container">{formDisplay}</div>
    </>
  );
}

export default ClientRegistration;
