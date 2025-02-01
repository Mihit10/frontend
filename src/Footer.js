import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#162A45] text-white py-10">
      <div className="container mx-auto px-6 md:px-12 border-t border-gray-600">
        
        {/* Footer Sections - Center Aligned */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left items-start mt-8">
          
          {/* Column 1: Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/feedback" className="hover:text-gray-100 transition">Feedback</a></li>
              <li><a href="/faq" className="hover:text-gray-100 transition">FAQ</a></li>
              <li><a href="/contact-helpline" className="hover:text-gray-100 transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 2: Policies */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-3">Legal & Policies</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/policies" className="hover:text-gray-100 transition">Website Policies</a></li>
              <li><a href="/privacy-policy" className="hover:text-gray-100 transition">Privacy Policy</a></li>
              <li><a href="/disclaimer" className="hover:text-gray-100 transition">Disclaimer</a></li>
            </ul>
          </div>

          {/* Column 3: Social Media - Adjusted for Proper Alignment */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl hover:text-blue-400 transition" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl hover:text-blue-300 transition" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-blue-500 transition" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-pink-500 transition" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-2xl hover:text-red-500 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-600 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Cybercrime Portal. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
