import { Link } from "react-router-dom";
import "./error.css";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function Error({ userCookieState }) {
  return (
    <>
      <Header userCookieState={userCookieState} />
      <div className="error-container">
        <div>
          <h1>404</h1>
          <h2>Page not found</h2>
          <p>The page you are looking for doesn't exist or has been removed.</p>
          <Link to="/" className="no-underline">
            <button>Return to home page</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Error;
