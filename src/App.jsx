import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import InstantMessaging from "./components/instant-messaging/InstantMessaging";

// Pages
import Home from "./pages/home/Home";
import HostHome from "./pages/user-home/host/HostHome";
import EventPlaceManager from "./pages/user-home/host/EventPlaceManager";
import AboutUs from "./pages/about/AboutUs";
import Register from "./pages/registration/Register";
import Login from "./pages/login/Login";
import ClientRegistration from "./pages/registration/ClientRegistration";
import HostRegistration from "./pages/registration/hostRegistration";
import Redicrecting from "./pages/redirecting/Redirecting";

import Contact from "./pages/contact/Contact";
import Error from "./pages/404-error/Error";

import tokenServices from "./services/tokenServices";

import "./App.css";

function App() {
  const [userCookie, setUserCookie] = useState("");

  useEffect(() => {
    tokenServices.checkUserCookieCredentials({
      userCookie: userCookie,
      setUserCookie: setUserCookie,
    });
  }, []);

  console.log(userCookie);
  let homeDisplay;
  if (userCookie !== "") {
    homeDisplay = (
      <HostHome
        userCookieState={{
          userCookie: userCookie,
          setUserCookie: setUserCookie,
        }}
      />
    );
  } else {
    homeDisplay = (
      <Home
        userCookieState={{
          userCookie: userCookie,
          setUserCookie: setUserCookie,
        }}
      />
    );
  }

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={homeDisplay} />
          <Route
            path="host/event-manager"
            element={
              <EventPlaceManager
                userCookieState={{
                  userCookie: userCookie,
                  setUserCookie: setUserCookie,
                }}
              />
            }
          />
          <Route
            path="/about"
            element={
              <AboutUs
                userCookieState={{
                  userCookie: userCookie,
                  setUserCookie: setUserCookie,
                }}
              />
            }
          />
          <Route path="/redirect" element={<Redicrecting />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/client" element={<ClientRegistration />} />
          <Route path="/register/host" element={<HostRegistration />} />
          <Route
            path="/contact"
            element={
              <Contact
                userCookieState={{
                  userCookie: userCookie,
                  setUserCookie: setUserCookie,
                }}
              />
            }
          />
          <Route
            path="*"
            element={
              <Error
                userCookieState={{
                  userCookie: userCookie,
                  setUserCookie: setUserCookie,
                }}
              />
            }
          />
        </Routes>
        <InstantMessaging />
      </div>
    </Router>
  );
}

export default App;
