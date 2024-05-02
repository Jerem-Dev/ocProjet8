import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./main.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Housingsheet from "./pages/HousingSheet/Housingsheet";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing/:id" element={<Housingsheet />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
