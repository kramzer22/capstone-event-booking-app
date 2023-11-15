import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import InstantMessaging from "./components/instant-messaging/InstantMessaging";

// Pages
import Home from "./pages/home/Home";
import AboutUs from "./pages/about/AboutUs";
import Register from "./pages/registration/Register";
import LoginPage from "./pages/loginpage/LoginPage";
import ClientRegistration from "./pages/registration/ClientRegistration";
import HostRegistration from "./pages/registration/hostRegistration";
import Redicrecting from "./pages/redirecting/Redirecting";

import EventPlacemanager from "./pages/host/EventPlaceManager";

import Contact from "./pages/contact/Contact";
import Error from "./pages/404-error/Error";

import "./App.css";

function App() {
  const [loginUser, setLoginUser] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                loginUserState={{
                  loginUser: loginUser,
                  setLoginUser: setLoginUser,
                }}
              />
            }
          />
          <Route
            path="/about"
            element={
              <AboutUs
                loginUserState={{
                  loginUser: loginUser,
                  setLoginUser: setLoginUser,
                }}
              />
            }
          />
          <Route path="/redirect" element={<Redicrecting />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/client" element={<ClientRegistration />} />
          <Route path="/register/host" element={<HostRegistration />} />
          <Route
            path="/contact"
            element={
              <Contact
                loginUserState={{
                  loginUser: loginUser,
                  setLoginUser: setLoginUser,
                }}
              />
            }
          />
          <Route
            path="*"
            element={
              <Error
                loginUserState={{
                  loginUser: loginUser,
                  setLoginUser: setLoginUser,
                }}
              />
            }
          />

          <Route path="/host/event-place" element={<EventPlacemanager />} />
        </Routes>
        <InstantMessaging />
      </div>
    </Router>
  );
}

export default App;
