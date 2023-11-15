import { React } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

import "./header.css";

function Header({ userLoginState }) {
  const loginContainerRef = useRef(null);

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

  return (
    <div className="navigation-container">
      <div className="logo-container">
        <img src="/src/assets/header/iconlogo.svg" alt="" />
      </div>
      <div className="navigation-links">
        <ul>
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

          <li>
            <a className="nav-link" onClick={showLoginForm}>
              Log in
            </a>
          </li>
          <li>
            <Link
              className="nav-link"
              to="/register/?user=client"
              target="_blank"
              onClick={scrollToTop}
            >
              Register
            </Link>
          </li>
        </ul>

        <div ref={loginContainerRef} className="login-container">
          <div className="login-header">
            <h4>Login</h4>
            <button onClick={showLoginForm}>✖</button>
          </div>
          <form className="login-form">
            <input type="email" placeholder="email address" />
            <input type="password" placeholder="password" />
            <a target="_self">Forgot password?</a>
            <button type="submit">Login</button>
          </form>
          <div className="sign-up">
            <span>Not a member?</span>
            <a href="#">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
