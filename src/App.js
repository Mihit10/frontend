import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PreHeader from "./PreHeader";
import Header from "./Header"; 
import Navbar from "./Navbar";
import Home from "./pages/Home"; 
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <PreHeader /> {/* PreHeader stays visible on all pages */}
      <Header />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
