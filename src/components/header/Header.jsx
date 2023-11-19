import { React } from "react";
import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./header.css";

import registrationServices from "../../services/registrationServices";
import objectHelperModule from "../../helpers/objectHelperModule";

function Header({ userCookieState }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorDisplay, setErrorDisplay] = useState("");

  const navigate = useNavigate();

  const profileDropDownRef = useRef(null);
  const loginContainerRef = useRef(null);

  const ERROR_DISPLAY_TIME = 5000;

  useEffect(() => {
    //profileDropDownRef.current.style.display = "none";
  }, []);

  const loginHandler = async (e) => {
    e.preventDefault();

    const userData = { email: email, password: password };

    try {
      const response = await registrationServices.checkLoginCredentials(
        userData
      );
      if (response.status === 201) {
        objectHelperModule.createCookie({
          name: "userToken",
          value: response.data.token,
        });
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      const errorData = error.response.data;
      if (error.response.status === 401) {
        if (
          errorData.error === "invalidUser" ||
          errorData.error === "invalidCredentials"
        ) {
          inputChekerModule.setErrorDisplay(
            { errorDisplay: errorDisplay, setErrorDisplay: setErrorDisplay },
            errorData.message,
            ERROR_DISPLAY_TIME
          );
        } else {
          inputChekerModule.setErrorDisplay(
            { errorDisplay: errorDisplay, setErrorDisplay: setErrorDisplay },
            "Unable to process transaction. Try again!",
            ERROR_DISPLAY_TIME
          );
        }
      } else {
        inputChekerModule.setErrorDisplay(
          { errorDisplay: errorDisplay, setErrorDisplay: setErrorDisplay },
          "Unable to process transaction. Try again!",
          ERROR_DISPLAY_TIME
        );
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const showLoginForm = () => {
    if (loginContainerRef.current.style.display === "none") {
      loginContainerRef.current.style.display = "flex";
      setTimeout(() => {
        loginContainerRef.current.style.right = "20px";
      }, 10);
    } else {
      loginContainerRef.current.style.right = "-410px";
      setTimeout(() => {
        loginContainerRef.current.style.display = "none";
      }, 300);
    }
  };

  const showProfileDropDown = () => {
    if (profileDropDownRef.current.style.display === "none") {
      profileDropDownRef.current.style.display = "flex";
    } else {
      profileDropDownRef.current.style.display = "none";
    }
  };

  const logoutHandler = () => {
    objectHelperModule.createCookie({
      name: "userToken",
      value: "",
    });
    userCookieState.setUserCookie("");
    navigate("/");
    window.location.reload();
  };

  let loginLink = (
    <>
      <li className="profile-nav-container">
        <a className="nav-link profile-nav" onClick={showProfileDropDown}>
          User Name
        </a>
        <div ref={profileDropDownRef} className="profile-manager-container">
          <ul>
            <li>
              <a className="nav-link">Profile</a>
            </li>
            <li>
              <a className="nav-link">Booking Manager</a>
            </li>
            <li>
              <Link to="host/event-manager">
                <a className="nav-link">Event Manager</a>
              </Link>
            </li>
            <li>
              <a className="nav-link" onClick={logoutHandler}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
  if (userCookieState.userCookie === "") {
    loginLink = (
      <>
        <li>
          <a className="nav-link" onClick={showLoginForm}>
            Log in
          </a>
        </li>
        <li>
          <Link className="nav-link" to="/register" target="_blank">
            Register
          </Link>
        </li>
      </>
    );
  }

  return (
    <div className="navigation-container">
      <div className="logo-container">
        <img src="/src/assets/header/iconlogo.svg" alt="" />
      </div>
      <div className="navigation-links">
        <ul className="navigation-links-container">
          <li>
            <Link className="nav-link" to="/" onClick={scrollToTop}>
              Home
            </Link>
          </li>

          <li>
            <a className="nav-link" tabIndex="0">
              Venues
            </a>
          </li>

          <li>
            <a className="nav-link" tabIndex="0">
              Promos
            </a>
          </li>

          <li>
            <Link className="nav-link" to="/about" onClick={scrollToTop}>
              About Us
            </Link>
            <a tabindex="0"></a>
          </li>

          <li>
            <a className="nav-link book-btn" tabIndex="0">
              Book Now
            </a>
          </li>
          {loginLink}
        </ul>

        <div
          ref={loginContainerRef}
          className="login-container"
          onSubmit={loginHandler}
        >
          <div className="login-header">
            <h4>Login</h4>
            <button onClick={showLoginForm}>✖</button>
          </div>
          <form className="login-form">
            <input
              type="email"
              placeholder="email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <a target="_self">Forgot password?</a>
            <button type="submit">Login</button>
          </form>
          <div className="sign-up">
            <span>Not a member?</span>
            <Link to="/register" target="_blank">
              <a>Sign Up</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
