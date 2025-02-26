import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/home/Home.jsx";
import Privatepolicy from "./Pages/privacyPolicy/privacyPolicy.jsx"
import './Components/I18n/i18n.js'
import Footer from "./Components/Footer/Footer";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<Privatepolicy />} /> 
    </Routes>
  </Router>
    <Footer />
</React.StrictMode>
);
