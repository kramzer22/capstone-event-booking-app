import "./Login.css";

function Login() {
  return (
    <div className="login-page-main">
      <div className="login-section-container">
        <div className="login-section">
          <div className="login-section-details">
            <h4>Login</h4>
            <p>
              Don't have an account yet? <a href="#">Sign Up</a>
            </p>
          </div>
          <form action="">
            <div className="login-section-email">
              <label htmlFor="">Email Address:</label>
              <input
                className="login-input"
                type="email"
                placeholder="you@example.com"
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
