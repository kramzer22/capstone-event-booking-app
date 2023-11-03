import { useState } from "react";

function Registration({}) {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  let formDisplay;

  return;
  <div className="registration-container">{formDisplay}</div>;
}

export default Registration;
