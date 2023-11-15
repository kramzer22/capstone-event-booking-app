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
            <label htmlFor="">Email Address:</label>
            <input type="email" placeholder="enter email" />

            <div>
              <label htmlFor="">Password:</label>
              <a href="#">Forgot Password?</a>
            </div>
            <input type="password" placeholder="enter 6 characters or more" />

            <div className="remember-me">
              <input type="checkbox" name="" id="" />
              <p>Remember me</p>
            </div>

            <button>Sign-in</button>
          </form>
        </div>
        <div className="login-image-section">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
