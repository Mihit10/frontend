import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Menu, X } from "lucide-react";

// Crime Scene Tape Border Image
const crimeTapeURL = "src/assets/crime_tape-removebg-preview.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation Links
  const navLinks = [
    { name: "Home", path: "/", icon: <Home className="w-5 h-5" /> },
    { name: "File a Complaint", path: "/file-complaint" },
    { name: "Cybercrime Awareness", path: "/cybercrime-awareness" },
    { name: "Resources & Laws", path: "/resources" },
    { name: "Contact & Helpline", path: "/contact" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Reports & Analytics", path: "/reports" },
  ];

  return (
    <nav className="relative w-full bg-[#1D3557] shadow-lg z-50">
      {/* Navbar Background with Slanted Right Side */}
      <div
        className="relative h-16 w-full bg-[#1D3557] text-white flex items-center px-6"
        style={{
          clipPath: "polygon(0% 0%, 100% 10%, 100% 100%, 0% 100%)",
        }}
      >
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 flex-1">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`relative flex items-center gap-2 text-white text-sm font-medium transition-all
                ${location.pathname === link.path ? "spotlight-button" : "hover-effect"}`}
            >
              {link.icon || null}
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Crime Scene Tape Border */}
      <div className="absolute bottom-0 w-full h-6 bg-cover" style={{ backgroundImage: `url(${crimeTapeURL})` }}></div>

      {/* Mobile Vertical Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#1D3557] shadow-lg">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="block px-6 py-3 text-white text-sm border-b border-gray-600 transition-all hover-effect"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
