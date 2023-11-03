import Home from "../../pages/home/Home";
import AboutUs from "../../pages/about/AboutUs";
import Error from "../../pages/404-error/Error";
import Contact from "../../pages/contact/Contact";
import Disclaimer from "../../pages/disclaimer/Disclaimer";
import Registration from "../../pages/registration/Registration";

function Display({ selectedPageViewState }) {
  let displayView;
  console.log(selectedPageViewState);
  if (selectedPageViewState.selectedPageView === "/") {
    displayView = <Home />;
  } else if (selectedPageViewState.selectedPageView === "/about") {
    displayView = <AboutUs />;
  } else if (selectedPageViewState.selectedPageView === "/contact") {
    displayView = <Contact />;
  } else if (selectedPageViewState.selectedPageView === "/disclaimer") {
    displayView = <Disclaimer />;
  } else if (selectedPageViewState.selectedPageView === "/sign-up") {
    displayView = <Registration />;
  } else {
    displayView = <Error selectedPageViewState={selectedPageViewState} />;
  }

  return displayView;
}

export default Display;
