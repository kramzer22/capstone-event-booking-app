import { useState, useRef, useEffect } from "react";

import "./App.css";

import Footer from "./components/footer/Footer";
import InstantMessaging from "./components/instant-messaging/InstantMessaging";
import Header from "./components/header/Header";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="app-container">
      <Header
        logInState={{ login_value: loggedIn, login_function: setLoggedIn }}
      />

      <InstantMessaging />
      <Footer />
    </div>
  );
}

export default App;
