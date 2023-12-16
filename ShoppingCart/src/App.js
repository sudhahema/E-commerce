import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Timeline from "./component/Timeline";
import Product from "./component/product";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </Router>
  );
};
export default App;
