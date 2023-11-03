import { useState } from "react";

function Registration({}) {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return <div className="registration-container"></div>;
}

export default Registration;
