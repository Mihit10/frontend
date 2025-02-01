import React from "react";

export default function ContactHelpline() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-10">
      {/* Page Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700 dark:text-white">Contact & Helpline</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          Reach out to us for assistance and emergency support.
        </p>
      </div>

      {/* Contact Information Section */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Emergency Helplines */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-blue-700 dark:text-white mb-4">Emergency Helpline Numbers</h2>
            <ul className="space-y-3 text-lg">
              <li>📞 Cyber Crime Helpline: <span className="font-bold text-blue-600 dark:text-yellow-400">1930</span></li>
              <li>📞 National Police Helpline: <span className="font-bold text-blue-600 dark:text-yellow-400">112</span></li>
              <li>📞 Women’s Helpline: <span className="font-bold text-blue-600 dark:text-yellow-400">1091</span></li>
              <li>📞 Child Helpline: <span className="font-bold text-blue-600 dark:text-yellow-400">1098</span></li>
              <li>📞 Anti-Terror Helpline: <span className="font-bold text-blue-600 dark:text-yellow-400">1090</span></li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-blue-700 dark:text-white mb-4">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-1">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 border rounded-md bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Type your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 dark:bg-yellow-400 text-white dark:text-gray-900 py-2 rounded-md font-semibold hover:bg-blue-800 dark:hover:bg-yellow-500 transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Additional Contact Info */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-white">Address & Email</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">Ministry of Home Affairs, Govt. of India</p>
          <p className="text-lg text-gray-600 dark:text-gray-300">Email: support@cybercrime.gov.in</p>
        </div>
      </div>
    </div>
  );
}
