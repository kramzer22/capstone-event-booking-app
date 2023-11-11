import { useRef, useState } from "react";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import contactServices from "../../services/contactServices";

import "./Contact.css";

function Contact({ loginUserState }) {
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
      <Header loginUserState={loginUserState} />
      <div className="contact-container">
        <div className="contact-form-ctr">
          <div className="contact-img-heads">
            <img
              src="https://scontent.fdvo5-1.fna.fbcdn.net/v/t39.30808-6/396843789_742788224344348_526221888827160091_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE0mNnZcYpY6hL5_V5NXD5P_tUnHxuhVFn-1ScfG6FUWb0V_wZn99g36iIvGfW4f8B0il6Utx3puYAROWx3x4T3&_nc_ohc=5Yso1WhdusUAX_Om7bg&_nc_ht=scontent.fdvo5-1.fna&oh=00_AfCczT9PHKTkumRrHX6X0q4w9LcKwK0otp34Oh3aIMwp7Q&oe=6549E73F"
              alt=""
            />
            <img
              src="https://scontent.fdvo5-1.fna.fbcdn.net/v/t1.6435-9/157021501_3792285737545318_3568598696731868493_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeGs22zSdJbLebJSDLgBUTd_nRktRD19M8GdGS1EPX0zwRUc3OxXFQ0LwGRMQazCVZskQvPqrMfHp2Gbc7ccA3Wz&_nc_ohc=Iddl_R9RcPoAX-PX6lP&_nc_ht=scontent.fdvo5-1.fna&oh=00_AfCfhof26lkdoIl6_D1X2tc0PJjEasdApwp61KV7GW9kQg&oe=656C3A2E"
              alt=""
            />
            <img
              src="https://scontent.fdvo5-1.fna.fbcdn.net/v/t39.30808-6/319357814_6588972931130659_6433058501188106892_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEvpIG0_81haXnObHSIA725VAHqSzgrwgdUAepLOCvCBypFa2mWtnYHQvf4--P7fp8k1B-Un1ilAcc1rztaijXV&_nc_ohc=MYJ6DGOsB4cAX8kh21m&_nc_ht=scontent.fdvo5-1.fna&oh=00_AfDzjzVhfO43Zau5qh3TKRz7RdJTJy9-R8xwlxPIx7-sww&oe=654A3780"
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
            <img
              src="https://dummyimage.com/555x358/000/fff.png&text=image+555x358+Google+Map+Here"
              alt=""
            />
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
