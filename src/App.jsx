import { useState, useRef, useEffect } from "react";

import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const loginContainerRef = useRef(null);

  const showLoginForm = () => {
    setLoggedIn(loggedIn ? false : true);
  };

  if (loginContainerRef.current) {
    if (loggedIn) {
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
    <div className="app-container">
      <div className="navigation-container">
        <div className="navigation-background"></div>
        <div className="logo-container">
          <p>Logo here or App name</p>
        </div>
        <div className="navigation-links">
          <ul>
            <li>Venues</li>
            <li>Promos</li>
            <li>About Us</li>
            <li>
              <button>Book Now</button>
            </li>
            <li onClick={() => showLoginForm()}>Log in</li>
          </ul>
          <div ref={loginContainerRef} className="login-container">
            <div className="login-header">
              <h3>Login</h3>
              <button onClick={() => showLoginForm()}>x</button>
            </div>
            <form className="login-form">
              <input type="email" placeholder="email address" />
              <input type="password" placeholder="passowrd" />
              <p>Forgot password?</p>
              <button type="submit">Login</button>
            </form>
            <div>
              <span>Not a member? </span>
              <a href="#" target="_self">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-container">
        <div className="navigation-background"></div>
        <div className="footer-main-container">
          <p>&gt; contact us</p>
          <p>&gt; disclaimer</p>
          <p>&gt; about us</p>
          <p>&gt; privacy & cookie statement</p>
          <p>&gt; general terms and agreement</p>
        </div>
      </div>

      <div className="instant-messaging-container">
        <div className="instant-messaging-box"></div>
        <div className="instant-messaging-tail"></div>
      </div>
    </div>
  );
}

export default App;
