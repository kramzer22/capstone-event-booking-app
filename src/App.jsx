import { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
// Pages
import Home from "./pages/home/Home";
import HostHome from "./pages/user-home/host/HostHome";
import EventPlaceManager from "./pages/user-home/host/EventPlaceManager";
import Venues from "./pages/venue/Venues";
import AboutUs from "./pages/about/AboutUs";
import Register from "./pages/registration/Register";
import Login from "./pages/login/Login";
import ClientRegistration from "./pages/registration/ClientRegistration";
import HostRegistration from "./pages/registration/hostRegistration";
import Redicrecting from "./pages/redirecting/Redirecting";
import ClientDashBoard from "./pages/user-home/client/ClientDashBoard";

import Contact from "./pages/contact/Contact";
import Error from "./pages/404-error/Error";

import objectHelperModule from "./helpers/objectHelperModule";
import tokenServices from "./services/tokenServices";

import "./App.css";

function App() {
  const [userCookie, setUserCookie] = useState("");

  useEffect(() => {
    const checkUserCookie = async () => {
      try {
        const result = await tokenServices.checkUserCookieCredentials({
          userCookie: userCookie,
          setUserCookie: setUserCookie,
        });

        if (result) {
          console.log("valid cookie token");
        } else {
          console.log("no user");
        }
      } catch (error) {
        console.log(error);
      }
    };

    checkUserCookie();
  }, []);

  console.log(objectHelperModule.getCookie("userRole"));
  let homeDisplay;
  if (userCookie !== "") {
    console.log(objectHelperModule.getCookie("userToken"));
    if (objectHelperModule.getCookie("userRole") === "host") {
      homeDisplay = (
        <HostHome
          userCookieState={{
            userCookie: userCookie,
            setUserCookie: setUserCookie,
          }}
        />
      );
    } else if (objectHelperModule.getCookie("userRole") === "client") {
      homeDisplay = (
        <Venues
          userCookieState={{
            userCookie: userCookie,
            setUserCookie: setUserCookie,
          }}
        />
      );
    }
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
            path="/host/venue-manager"
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
            path="/client/dashboard"
            element={
              <ClientDashBoard
                userCookieState={{
                  userCookie: userCookie,
                  setUserCookie: setUserCookie,
                }}
              />
            }
          />
          <Route
            path="/venue"
            element={
              <Venues
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
      </div>
    </Router>
  );
}

export default App;
