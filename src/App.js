import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PreHeader from "./PreHeader";
import Header from "./Header"; 
import Home from "./pages/Home"; 

function App() {
  return (
    <Router>
      <PreHeader /> {/* PreHeader stays visible on all pages */}
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
