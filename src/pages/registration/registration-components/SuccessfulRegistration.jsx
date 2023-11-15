import { Link } from "react-router-dom";

function SuccessFulRegistration({}) {
  return (
    <div className="successful-registration">
      <p>Successful Registration</p>
      <p>
        return home or{" "}
        <Link to="/login">
          <span>log in</span>
        </Link>
      </p>
    </div>
  );
}

export default SuccessFulRegistration;
