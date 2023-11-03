import { useRef } from "react";

import "./header.css";

function Header({ logInState, selectedPageState }) {
  const loginContainerRef = useRef(null);

  const showLoginForm = () => {
    logInState.login_function(logInState.login_value ? false : true);
  };

  if (loginContainerRef.current) {
    if (logInState.login_value) {
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
  }

  return (
    <div className="navigation-container">
      <div
        className="logo-container"
        onClick={() => selectedPageState.selectedpage_function("/")}
      >
        <p>Logo here or App name</p>
      </div>
      <div className="navigation-links">
        <ul>
          <li>Venues</li>
          <li>Promos</li>
          <li onClick={() => selectedPageState.selectedpage_function("/about")}>
            About Us
          </li>
          <li>
            <button>Book Now</button>
          </li>
          <li onClick={showLoginForm}>Log in</li>
        </ul>
        <div ref={loginContainerRef} className="login-container">
          <div className="login-header">
            <h4>Login</h4>
            <button onClick={showLoginForm}>✖</button>
          </div>
          <form className="login-form">
            <input type="email" placeholder="email address" />
            <input type="password" placeholder="passowrd" />
            <a href="#" target="_self">
              Forgot password?
            </a>
            <button type="submit">Login</button>
          </form>
          <div className="sign-up">
            <span>Not a member?</span>
            <a href="#" target="_self">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
