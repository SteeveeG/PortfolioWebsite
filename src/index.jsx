import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/home/Home.jsx";
import PrivatePolicy from "./Pages/privacyPolicy/privacyPolicy.jsx";
import "./Components/I18n/i18n.js";
import Footer from "./Components/Footer/Footer";

const NotFoundRedirect = () => <Navigate to="/" replace />;

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivatePolicy />} />
          <Route path="*" element={<NotFoundRedirect />} />
        </Routes>
      </Router>
      <Footer />
    </React.StrictMode>
);
