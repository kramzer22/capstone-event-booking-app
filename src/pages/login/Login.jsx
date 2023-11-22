import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Login.css";

import registrationServices from "../../services/registrationServices";
import inputChekerModule from "../../helpers/inputChekerModule.js";
import objectHelperModule from "../../helpers/objectHelperModule.js";

function Login({}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorDisplay, setErrorDisplay] = useState("");

  const navigate = useNavigate();

  const ERROR_DISPLAY_TIME = 5000;

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

  return (
    <div className="login-page-main">
      <div className="login-section-container">
        <div className="login-section">
          <div className="login-section-details">
            <h4>Login</h4>
            <p>
              Don't have an account yet?{" "}
              <Link to="/register">
                <a>Sign Up</a>
              </Link>
            </p>
          </div>
          <form action="" onSubmit={loginHandler}>
            <p>{errorDisplay}</p>
            <div className="login-section-email">
              <label htmlFor="">Email Address:</label>
              <input
                className="login-input"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="login-section-password">
              <label htmlFor="">Password:</label>
              <a href="#">Forgot Password?</a>
            </div>
            <input
              className="login-input"
              type="password"
              placeholder="enter 6 characters or more"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <div className="remember-me">
              <input type="checkbox" name="" id="" />
              <p>Remember me</p>
            </div>

            <button>Sign-in</button>
          </form>
        </div>
        <img
          className="login-section-img"
          src="/src/assets/login/login-img.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Login;
