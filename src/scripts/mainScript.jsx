import Index from "../components/index/Index";
import AboutUs from "../components/about-us/AboutUs";
import Error from "../components/404-error/Error";

const navPathSelector = (pageViewState) => {
  let displayView;
  if (pageViewState.pageViewValue === "/") {
    displayView = <Index />;
  } else if (pageViewState.pageViewValue === "/about") {
    displayView = <AboutUs />;
  } else {
    displayView = <Error pageViewState={pageViewState} />;
  }

  return displayView;
};

export default navPathSelector;
