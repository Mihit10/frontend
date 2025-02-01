import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="w-full bg-blue-700 dark:bg-gray-800 py-4 text-white text-center">
        <h1 className="text-xl font-semibold">Cybercrime Portal</h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        <h2 className="text-2xl font-bold">Welcome to the Cybercrime Portal</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          This is the home page. Customize it as per your requirements.
        </p>

        {/* Add sections, cards, or features here */}
      </main>

      {/* Footer */}
      <footer className="w-full bg-blue-700 dark:bg-gray-800 py-4 text-white text-center mt-10">
        <p>© {new Date().getFullYear()} Cybercrime Portal. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
