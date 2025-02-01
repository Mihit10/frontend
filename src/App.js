import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PreHeader from "./PreHeader";
import Header from "./Header"; 
import Navbar from "./Navbar";
import Home from "./pages/Home"; 
import Footer from "./Footer";
import FileComplaint from "./pages/FileComplaint";
import CybercrimeAwareness from "./pages/CybercrimeAwareness";
import ReportsAndAnalytics from "./pages/ReportsAndAnalytics";
import ContactHelpline from "./pages/ContactHelpline";


function App() {
  return (
    <Router>
      <PreHeader /> {/* PreHeader stays visible on all pages */}
      <Header />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/file-complaint" element={<FileComplaint />} />
        <Route path="/cybercrime-awareness" element={<CybercrimeAwareness />} />
        <Route path="/reports" element={<ReportsAndAnalytics />} />
        <Route path="/contact-helpline" element={<ContactHelpline />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
