import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

// RouteSwitch not really necessary
const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default RouteSwitch;
