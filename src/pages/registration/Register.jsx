import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(useLocation().search);

  useEffect(() => {
    const userValue = searchParams.get("user");
    if (!userValue) {
      navigate("/register/client");
    } else {
      console.log(userValue);
      if (userValue !== "host") {
        navigate("/register/client");
      } else {
      }
    }
  }, []);

  return <div></div>;
}

export default Register;
