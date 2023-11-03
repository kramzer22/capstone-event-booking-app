import { useState, useRef, useEffect } from "react";

import "./App.css";

import Footer from "./components/footer/Footer";
import InstantMessaging from "./components/instant-messaging/InstantMessaging";
import Header from "./components/header/Header";

import Display from "./components/display/DIsplay";

function App() {
  const currentPath = window.location.pathname;
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedPageView, setSelectedPageView] = useState(currentPath);

  window.history.pushState({}, "", selectedPageView);

  return (
    <div className="app-container">
      <Header
        logInState={{ login_value: loggedIn, login_function: setLoggedIn }}
        selectedPageViewState={{
          selectedPageView: selectedPageView,
          setSelectedPageView: setSelectedPageView,
        }}
      />
      <Display
        selectedPageViewState={{
          selectedPageView: selectedPageView,
          setSelectedPageView: setSelectedPageView,
        }}
      />
      <InstantMessaging />
      <Footer
        selectedPageViewState={{
          selectedPageView: selectedPageView,
          setSelectedPageView: setSelectedPageView,
        }}
      />
    </div>
  );
}

export default App;
