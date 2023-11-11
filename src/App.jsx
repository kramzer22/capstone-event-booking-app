import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/footer/Footer";
import InstantMessaging from "./components/instant-messaging/InstantMessaging";

// Pages
import Home from "./pages/home/Home";
import AboutUs from "./pages/about/AboutUs";
import Register from "./pages/registration/Register";
import ClientRegistration from "./pages/registration/ClientRegistration";
import Redicrecting from "./pages/redirecting/Redirecting";

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
          <Route path="/register" element={<Register />} />
          <Route path="/register/client" element={<ClientRegistration />} />
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
        </Routes>
        <InstantMessaging />
      </div>
    </Router>
  );
}

export default App;
