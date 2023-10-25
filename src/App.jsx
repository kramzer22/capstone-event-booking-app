import { useState, useRef, useEffect } from "react";

import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const loginContainerRef = useRef(null);
  const messagingChat = useRef(null);
  const messagingButton = useRef(null);

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

  const showMessagingPopUp = () => {
    if (messagingChat.current) {
      messagingButton.current.style.display = "none";
      messagingChat.current.style.display = "flex";
    }
  };

  const hideMessagingPopUp = () => {
    if (messagingChat.current) {
      messagingButton.current.style.display = "flex";
      messagingChat.current.style.display = "none";
    }
  };

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
        <div ref={messagingChat} className="messaging-chat-container">
          <div className="messaging-chat-header">
            <h2>Customer Support</h2>
            <button onClick={hideMessagingPopUp}>X</button>
          </div>

          <ul></ul>
          <div className="message-input-container">
            <input type="text" placeholder="message here" />
            <button>send</button>
          </div>
        </div>
        <div
          ref={messagingButton}
          className="instant-messaging-button"
          onClick={showMessagingPopUp}
        >
          <div className="instant-messaging-box">
            <p>• • •</p>
          </div>
          <div className="instant-messaging-tail"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
