import { useRef, useState } from "react";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import contactServices from "../../services/contactServices";

import "./Contact.css";

function Contact({ userCookieState }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  const firstNameInput = useRef(null);
  const lastNameInput = useRef(null);
  const contactInput = useRef(null);
  const emailInput = useRef(null);
  const noteInput = useRef(null);

  const [errorDisplay, setErrorDisplay] = useState("");

  const clearAllInput = () => {
    setEmail("");
    setContactNumber("");
    setFirstName("");
    setLastName("");
    setNote("");

    setErrorDisplay("Inquiry sent");
    errorDisplayTimer();
  };

  function isValidEmail(email) {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  }

  function isValidMobileNumber(number) {
    const mobilePattern = /^\d{11}$/;
    return mobilePattern.test(number);
  }

  const errorDisplayTimer = () => {
    setTimeout(() => {
      setErrorDisplay("");
    }, 3000);
  };

  const checkForInputErrors = () => {
    if (firstName.trim() === "") {
      firstNameInput.current.focus();
      setErrorDisplay("Enter your first name");
      errorDisplayTimer();

      return true;
    } else if (lastName.trim() === "") {
      lastNameInput.current.focus();
      setErrorDisplay("Enter your last name");
      errorDisplayTimer();

      return true;
    } else if (!isValidMobileNumber(contactNumber)) {
      contactInput.current.focus();
      setErrorDisplay("Enter a valid mobile number");
      errorDisplayTimer();

      return true;
    } else if (!isValidEmail(email)) {
      emailInput.current.focus();
      setErrorDisplay("Invalid email address");
      errorDisplayTimer();

      return true;
    } else if (note.trim() === "") {
      noteInput.current.focus();
      setErrorDisplay("Add message information for your inquiry");
      errorDisplayTimer();

      return true;
    }

    return false;
  };

  const submitClientFormHandler = async (e) => {
    e.preventDefault();

    if (!checkForInputErrors()) {
      const newInquiry = {
        first_name: firstName,
        last_name: lastName,
        number: contactNumber,
        email: email,
        note: note,
      };

      contactServices
        .getCreateInquiryToken(newInquiry)
        .then((response) => {
          console.log(response);
          if (response.status === 201) {
            contactServices
              .createInquiry(response.data.token)
              .then((response) => {
                if (response.status === 201) {
                  console.log("Inquiry successfully registered", response.data);
                  clearAllInput();
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
    }
  };

  const formInputOnChangeHandler = (e) => {
    const name = e.target.name;

    if (name === "FirstName") {
      setFirstName(e.target.value);
    } else if (name === "LastName") {
      setLastName(e.target.value);
    } else if (name === "Mobile") {
      setContactNumber(e.target.value);
    } else if (name === "Email") {
      setEmail(e.target.value);
    } else if (name === "Note") {
      setNote(e.target.value);
    }
  };

  return (
    <>
      <Header userCookieState={userCookieState} />
      <div className="contact-container">
        <div className="contact-form-ctr">
          <div className="contact-img-heads">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo3RNXnMyrqXdOCOSjsNQ7UNJ_E2sH2HX6Xg"
              alt=""
            />
            <img
              src="https://scontent.fdvo5-1.fna.fbcdn.net/v/t1.6435-9/157021501_3792285737545318_3568598696731868493_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeGs22zSdJbLebJSDLgBUTd_nRktRD19M8GdGS1EPX0zwRUc3OxXFQ0LwGRMQazCVZskQvPqrMfHp2Gbc7ccA3Wz&_nc_ohc=Iddl_R9RcPoAX-PX6lP&_nc_ht=scontent.fdvo5-1.fna&oh=00_AfCfhof26lkdoIl6_D1X2tc0PJjEasdApwp61KV7GW9kQg&oe=656C3A2E"
              alt=""
            />
            <img
              src="https://yt3.googleusercontent.com/ytc/APkrFKbVGvJNJxG8EWWdy2ODYVGdbt95dmcWIEwNYAnC=s900-c-k-c0x00ffffff-no-rj"
              alt=""
            />
          </div>

          <div className="contact-details">
            <h2>Contact Us</h2>
            <p>
              Get in touch with our team to learn more about "company name".
            </p>
          </div>

          <form
            action=""
            className="contact-form"
            onSubmit={submitClientFormHandler}
          >
            <p>{errorDisplay}</p>
            <div className="contact-name">
              <div className="contact fname">
                <label className="contact-label" htmlFor="FirstName">
                  First Name: <span>*</span>
                </label>
                <input
                  ref={firstNameInput}
                  type="text"
                  name="FirstName"
                  placeholder="First Name"
                  onChange={formInputOnChangeHandler}
                  value={firstName}
                  required
                />
              </div>
              <div className="contact lname">
                <label className="contact-label" htmlFor="LastName">
                  Last Name: <span>*</span>
                </label>
                <input
                  ref={lastNameInput}
                  type="text"
                  name="LastName"
                  placeholder="Last Name"
                  onChange={formInputOnChangeHandler}
                  value={lastName}
                  required
                />
              </div>
            </div>
            <div className="contact mobile">
              <label className="contact-label" htmlFor="Mobile">
                Mobile Number: <span>*</span>
              </label>
              <input
                ref={contactInput}
                type="text"
                name="Mobile"
                onChange={formInputOnChangeHandler}
                value={contactNumber}
                required
              />
            </div>
            <div className="contact email">
              <label className="contact-label" htmlFor="eMail">
                Email Address: <span>*</span>
              </label>
              <input
                useRef={emailInput}
                type="email"
                name="Email"
                onChange={formInputOnChangeHandler}
                value={email}
                required
              />
            </div>
            <div className="contact notes">
              <label className="contact-label" htmlFor="notes">
                Notes: <span>*</span>
              </label>
              <textarea
                ref={noteInput}
                id=""
                cols="30"
                rows="6"
                name="Note"
                onChange={formInputOnChangeHandler}
                value={note}
              ></textarea>
            </div>

            <button className="contact-submit-btn" type="submit">
              SUBMIT
            </button>
          </form>
        </div>

        <div className="map-details-container">
          <div className="google-map">
            <gmp-map
              center="41.03277587890625,-73.76931762695312"
              zoom="14"
              map-id="DEMO_MAP_ID"
            >
              <gmp-advanced-marker
                position="41.03277587890625,-73.76931762695312"
                title="My location"
              ></gmp-advanced-marker>
            </gmp-map>
          </div>
          <div className="map-details">
            <div className="map-office">
              <h4>Office Location</h4>
              <p>123 Main St,</p>
              <p>Anytown USA</p>
              <p>Zip Code Here</p>
              <p>+6391234567</p>
            </div>

            <div className="map-cti">
              <h4>Contact Information</h4>
              <p>
                Support: <a href="#">support@email.com</a>
              </p>
              <p>
                Sales: <a href="#">sales@email.com</a>
              </p>
              <p>
                General: <a href="#">info@email.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
