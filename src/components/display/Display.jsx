import React from "react";
import { Router, Route, Routes } from "react-router-dom";

import Home from "../../pages/home/Home";
import AboutUs from "../../pages/about/AboutUs";
import Error from "../../pages/404-error/Error";
import Redicrecting from "../../pages/redirecting/Redirecting";

const Display = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Display;
