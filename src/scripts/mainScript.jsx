import Index from "../components/index/Index";
import Error from "../components/404-error/Error";

const navPathSelector = (pageViewState) => {
  let displayView;
  if (pageViewState.pageViewValue === "/") {
    displayView = <Index />;
  } else {
    displayView = <Error pageViewState={pageViewState} />;
  }

  return displayView;
};

export default navPathSelector;
