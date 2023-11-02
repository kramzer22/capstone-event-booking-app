import Home from "../../pages/home/Home";
import AboutUs from "../../pages/about/AboutUs";
import Error from "../../pages/404-error/Error";
import Contact from "../../pages/contact/Contact";
import Disclaimer from "../../pages/disclaimer/Disclaimer";

const Display = (pageViewState) => {
  let displayView;
  if (pageViewState.pageViewValue === "/") {
    displayView = <Home />;
  } else if (pageViewState.pageViewValue === "/about") {
    displayView = <AboutUs />;
  } else if (pageViewState.pageViewValue === "/contact") {
    displayView = <Contact />;
  } else if (pageViewState.pageViewValue === "/disclaimer") {
    displayView = <Disclaimer />;
  } else {
    displayView = <Error pageViewState={pageViewState} />;
  }

  return displayView;
};

export default Display;
