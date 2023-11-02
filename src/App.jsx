import { useState, useRef, useEffect } from "react";

import "./App.css";

import Footer from "./components/footer/Footer";
import InstantMessaging from "./components/instant-messaging/InstantMessaging";
import Header from "./components/header/Header";

import display from "./components/display/Display";

function App() {
  const currentPath = window.location.pathname;
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedPageView, setSelectedPageView] = useState(currentPath);

  const viewDisplay = display({
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
      {viewDisplay}
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
