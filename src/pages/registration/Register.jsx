import { useEffect } from "react";
import { redirect, useLocation, useNavigate } from "react-router-dom";

import Redirect from "../../components/redirect/Redirect";
import registrationServices from "../../services/registrationServices";

function Register() {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(useLocation().search);

  let display = <Redirect />;

  useEffect(() => {
    const redirectToProperRegistration = async () => {
      const userValue = searchParams.get("user");
      if (!userValue) {
        navigate("/register/client");
      } else {
        console.log(userValue);
        if (userValue !== "host") {
          navigate("/register/client");
        } else {
          const registrationToken = searchParams.get("token");
          if (!registrationToken) {
            navigate("/register/client");
          } else {
            try {
              const tokenValidityResponse =
                await registrationServices.checkHostRegistrationTokenValidity(
                  registrationToken
                );
              if (tokenValidityResponse.status === 200) {
                navigate(`/register/host/?token_id=${registrationToken}`);
              } else {
                throw new Error("navigate to home");
              }
            } catch (error) {
              console.log(error);
              navigate("/");
            }
          }
        }
      }
    };

    redirectToProperRegistration();
  }, []);

  return <>{display}</>;
}

export default Register;
