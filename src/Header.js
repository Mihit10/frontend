import React from "react";

export default function Header() {
  return (
    <header className="w-full bg-[#F8F9FA] text-[#1D3557] py-6 px-8 flex items-center justify-between shadow-xl">
      
      {/* Left - Government Emblem */}
      <div className="flex items-center">
        <img 
          src="https://cybercrime.gov.in/assets/images/emblem-dark.png" 
          alt="Government Emblem" 
          className="w-12 h-auto object-contain ml-4"
        />
      </div>

      {/* Center - Title */}
      <div className="text-center flex-1">
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
          National Cyber Crime Reporting Portal
        </h1>
      </div>

      {/* Right - Cybercrime Logo */}
      <div className="flex items-center">
        <img 
          src="https://upload.wikimedia.org/wikipedia/en/8/89/Logo_of_i4c.png" 
          alt="Cybercrime Logo" 
          className="w-32 h-auto object-contain mr-4"
        />
      </div>

    </header>
  );
}
