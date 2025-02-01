import React, { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown"; // 🔹 Import Markdown Renderer

const API_KEY = "AIzaSyDWZbJmy5ral2viflRAzxaYs96E9JQ-Ya8"; // 🔴 ADD YOUR GOOGLE GENERATIVE AI API KEY HERE

const genAI = new GoogleGenerativeAI(API_KEY);

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I am your Cybercrime Assistant. How can I assist you?",
      typing: false,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Dummy Bot Profile (Replace Later)
  const botProfile = "https://cdn-icons-png.flaticon.com/128/4270/4270226.png"; 

  // Function to send user message and get AI response
  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages([...messages, { sender: "user", text: input, typing: false }]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "Thinking...", typing: true },
      ]);
    }, 500);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      // **🔹 Custom Prompt Context**
      const context = `You are an AI chatbot designed to assist users with cybercrime-related queries. Provide 
      legal guidance, cyber safety tips, and step-by-step help on filing complaints. Format responses with Markdown 
      when useful, such as **bold** for emphasis, \`code\` for commands, and bullet lists for steps.`;

      const result = await model.generateContent([context, input]);
      const response = await result.response.text();

      // Update Bot Response
      setMessages((prevMessages) =>
        prevMessages.map((msg, i) =>
          i === prevMessages.length - 1
            ? { ...msg, text: response, typing: false }
            : msg
        )
      );
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((prevMessages) =>
        prevMessages.map((msg, i) =>
          i === prevMessages.length - 1
            ? { ...msg, text: "Sorry, I couldn't process your request.", typing: false }
            : msg
        )
      );
    }

    setLoading(false);
  };

  return (
    <div className="w-full bg-gray-100 p-6 shadow-md">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Cybercrime Chat Assistant</h2>
        <p className="text-gray-600 mb-4">Ask me about cybercrime laws, safety tips, and how to report cases.</p>

        {/* Chat Window */}
        <div className="h-80 overflow-y-auto p-4 border rounded-md bg-gray-50">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-start mb-3 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              {msg.sender === "bot" && <img src={botProfile} alt="Bot" className="w-8 h-8 rounded-full mr-2" />}
              <div
                className={`px-4 py-2 max-w-[75%] rounded-lg ${
                  msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.typing ? (
                  <Skeleton count={1} width={100} />
                ) : msg.sender === "bot" ? (
                  <ReactMarkdown>{msg.text}</ReactMarkdown> // ✅ Markdown Support Added
                ) : (
                  msg.text
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="mt-4 flex">
          <input
            type="text"
            className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 bg-white placeholder-gray-500"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition"
            onClick={sendMessage}
            disabled={loading}
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
