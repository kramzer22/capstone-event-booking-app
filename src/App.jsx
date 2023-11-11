import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/footer/Footer";
import InstantMessaging from "./components/instant-messaging/InstantMessaging";
import Header from "./components/header/Header";

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
  const [userLogin, setUserLogin] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Header
          userLoginState={{ userLogin: userLogin, setUserLogin: setUserLogin }}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/redirect" element={<Redicrecting />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/client" element={<ClientRegistration />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <InstantMessaging />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
