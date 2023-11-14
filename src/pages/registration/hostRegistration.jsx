import { useState, useEffect } from "react";
import "./clientRegistration.css";

import RegFormOne from "./registration-components/RegFormOne";
import HostFormTwo from "./registration-components/HostFormTwo";
import HostFormThree from "./registration-components/HostFormThree";

import inputChekerModule from "../../helpers/inputChekerModule";
import registrationServices from "../../services/registrationServices";
import { Navigate } from "react-router-dom";

function HostRegistration({ token }) {
  const [email, setEmail] = useState("");
  const [reEmail, setReEmail] = useState("");
  const [password, setPassword] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState({ day: "", month: "", year: "" });
  const [gender, setGender] = useState("");

  const [businessName, setBusinessName] = useState("");
  const [province, setProvince] = useState({ id: "", name: "" });
  const [city, setCity] = useState({ id: "", name: "" });
  const [barangay, setBarangay] = useState({ id: "", name: "" });
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [landLine, setLandLine] = useState("");

  const [errorDisplay, setErrorDisplay] = useState("");
  const [currentForm, setCurrentForm] = useState(1);

  const ERROR_DISPLAY_TIME = 4000;

  useEffect(() => {
    if (!checkTokenValidity()) {
      Navigate("/");
    }
  }, []);

  const checkTokenValidity = async () => {
    try {
      const registrationToken = searchParams.get("token");
      if (registrationToken) {
        const tokenValidityResponse =
          await registrationServices.checkHostRegistrationTokenValidity(
            registrationToken
          );
        if (tokenValidityResponse.status !== 200) {
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  };

  const submitClientFormHandler = async () => {
    const newHost = {
      email: email,
      password: password,
      name: {
        first_name: firstName.trim().toLowerCase(),
        last_name: lastName.trim().toLowerCase(),
      },
      dob: birthdate,
      gender: gender.toLowerCase(),
      business_name: businessName.trim().toLowerCase(),
      address: {
        province: province,
        city: city,
        barangay: barangay,
        street: address,
      },
      number: { mobile: mobile, landline: landLine },
    };

    try {
      const token = await registrationServices.getCreateRegistrationToken(
        newHost,
        "host"
      );

      const registrationResult = await registrationServices.registerHost(
        token.data.token,
        registrationToken
      );

      console.log(registrationResult);
    } catch (error) {
      inputChekerModule.setErrorDisplay(
        { errorDisplay: errorDisplay, setErrorDisplay: setErrorDisplay },
        "Unable to process transaction. Try again!",
        ERROR_DISPLAY_TIME
      );
    }
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
        businessNameState={{
          businessName: businessName,
          setBusinessName: setBusinessName,
        }}
        provinceState={{ province: province, setProvince: setProvince }}
        cityState={{ city: city, setCity: setCity }}
        barangayState={{ barangay: barangay, setBarangay: setBarangay }}
        addressState={{ address: address, setAddress: setAddress }}
        mobileState={{ mobile: mobile, setMobile: setMobile }}
        landLineState={{ landLine: landLine, setLandLine: setLandLine }}
        errorState={{
          errorDisplay: errorDisplay,
          setErrorDisplay: setErrorDisplay,
        }}
        submitClientFormHandler={submitClientFormHandler}
      />
    );
  }

  return (
    <div className="registration-container">
      <div className="registration-container-form">
        <div className="registration-logo">
          LOGO HERE goes home when clicked
        </div>
        <h5>Create an account now</h5>
        {formDisplay}
        <div className="registration-details">
          <p>
            Already have an account?{" "}
            <span>
              <a href="#">Log-in</a>
            </span>
          </p>
          <p>
            By clicking "Create account" I accept the{" "}
            <a href="#">Terms of Service</a>, and the{" "}
            <a href="#">Privacy Policy.</a>
          </p>
        </div>
      </div>
      <div className="registration-container-platform">
        <div className="platform-title">
          <h4>your</h4>
          <h4>
            <span>ALL-IN-ONE</span>
          </h4>
          <h4>platform</h4>
        </div>
        <div className="platform-details-ctr">
          <div className="platform-details">
            <i className="ri-calendar-event-line"></i>
            <p>Event Organizer Registration</p>
          </div>

          <div className="platform-details">
            <i className="ri-presentation-line"></i>
            <p>Comprehensive Event Management</p>
          </div>

          <div className="platform-details">
            <i className="ri-user-heart-line"></i>
            <p>User-Friendly Experience</p>
          </div>

          <div className="platform-details">
            <i className="ri-book-2-line"></i>
            <p>Effortless Booking</p>
          </div>

          <div className="platform-details">
            <i className="ri-admin-line"></i>
            <p>Admin Support</p>
          </div>

          <div className="platform-details">
            <i className="ri-bank-line"></i>
            <p>Security Deposit</p>
          </div>
        </div>
        <div className="platform-additional-details">
          <p>Join for Free</p>
          <span>&bull;</span>
          <p>Book an Event</p>
          <span>&bull;</span>
          <p>Enjoy Services</p>
        </div>
      </div>
    </div>
  );
}

export default HostRegistration;
