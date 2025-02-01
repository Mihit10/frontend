import { useState, useEffect } from "react";
import { Sun, Moon, Globe } from "lucide-react";

export default function PreHeader() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("English");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const languages = ["Hindi", "English", "Marathi"];

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
    // Clear any existing timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  };

  const handleMouseLeave = () => {
    // Set a timeout to close the dropdown after 0.5 seconds
    const id = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 500); // Changed to 500 milliseconds
    setTimeoutId(id);
  };

  const handleLanguageClick = (lang) => {
    setLanguage(lang);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    // Cleanup timeout on component unmount
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return (
    <div className={`w-full py-2 px-4 flex items-center justify-between relative ${darkMode ? "bg-[#121212] text-white" : "bg-[#1D3557] text-white"} shadow-xl`}>
      
      {/* Centered Government Text */}
      <div className="absolute left-1/2 transform -translate-x-1/2 text-center w-full flex flex-col items-center">
        <p className="text-sm md:text-base font-semibold">भारत सरकार | गृह मंत्रालय</p>
        <p className="text-xs md:text-sm">Government of India | Ministry of Home Affairs</p>
      </div>

      {/* Right Icons - Dark Mode Toggle & Language Select */}
      <div className="flex items-center gap-4 ml-auto relative">
        {/* Dark Mode Toggle */}
        {/* <button 
          onClick={() => setDarkMode(!darkMode)} 
          className="p-2 rounded-full hover:bg-white/20"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button> */}

        {/* Language Dropdown */}
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button 
            className="flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-white/20 border border-transparent focus:border-white"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
          >
            <Globe className="w-5 h-5" />
            <span>{language}</span>
          </button>

          {/* Persistent Hover-Friendly Dropdown */}
          {isDropdownOpen && (
            <div 
              className="absolute right-0 mt-2 w-36 bg-white text-black shadow-lg rounded-lg border border-gray-300 transition-opacity duration-200 opacity-100 pointer-events-auto"
              role="menu"
            >
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageClick(lang)}
                  onMouseEnter={handleMouseEnter} // Keep dropdown open on hover
                  className="block w-full px-4 py-2 text-left hover:bg-gray-200 rounded-lg" // Added rounded-lg here
                  role="menuitem"
                >
                  {lang}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}