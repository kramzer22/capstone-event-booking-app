import { useState, useRef, useEffect } from "react";

import "./App.css";

import Footer from "./components/footer/Footer";
import InstantMessaging from "./components/instant-messaging/InstantMessaging";
import Header from "./components/header/Header";

import navPathSelector from "./scripts/mainDisplay";

function App() {
  const currentPath = window.location.pathname;
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedPageView, setSelectedPageView] = useState(currentPath);

  const displayContent = navPathSelector({
    pageViewValue: currentPath,
    pageViewFunction: setSelectedPageView,
  });
  console.log(selectedPageView.replace("#", ""));
  window.history.pushState({}, "", selectedPageView.replace("#", ""));

  return (
    <div className="app-container">
      <Header
        logInState={{ login_value: loggedIn, login_function: setLoggedIn }}
        selectedPageState={{
          selectedpage_value: selectedPageView,
          selectedpage_function: setSelectedPageView,
        }}
      />
      {displayContent}
      <InstantMessaging />
      <Footer
        selectedPageState={{
          selectedpage_value: selectedPageView,
          selectedpage_function: setSelectedPageView,
        }}
      />
    </div>
  );
}

export default App;
