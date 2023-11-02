import Home from "../../pages/Home";
import AboutUs from "../../pages/about/AboutUs";
import Error from "../../pages/404-error/Error";

const navPathSelector = (pageViewState) => {
  let displayView;
  if (pageViewState.pageViewValue === "/") {
    displayView = <Home />;
  } else if (pageViewState.pageViewValue === "/about") {
    displayView = <AboutUs />;
  } else {
    displayView = <Error pageViewState={pageViewState} />;
  }

  return displayView;
};

export default navPathSelector;
