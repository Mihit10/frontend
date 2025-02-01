import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CybercrimeAwareness() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showNews, setShowNews] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=cybercrime&language=en&sortBy=publishedAt&apiKey=YOUR_NEWSAPI_KEY`
        );
        if (response.data.articles.length > 0) {
          setNews(response.data.articles.slice(0, 5)); // Show only the latest 5
          setShowNews(true);
        } else {
          setShowNews(false);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setShowNews(false);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="py-12 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Stay Safe Online: Cybercrime Awareness
        </h2>
        <p className="text-lg text-center opacity-80 mb-8">
          Learn about the latest cyber threats and how to protect yourself.
        </p>

        {/* Only show the News section if news articles are available */}
        {showNews && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4">Latest Cybercrime News</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loading ? (
                [...Array(3)].map((_, index) => (
                  <div key={index} className="bg-gray-300 animate-pulse h-48 rounded-lg"></div>
                ))
              ) : (
                news.map((article, index) => (
                  <div key={index} className="bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition">
                    <img
                      src={article.urlToImage || "https://via.placeholder.com/300"}
                      alt="News"
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-lg font-semibold">{article.title}</h3>
                    <p className="text-sm opacity-80">{article.description}</p>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-blue-600 hover:underline"
                    >
                      Read More →
                    </a>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Cyber Safety Tips Section */}
        <div className="mb-12 bg-blue-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Cyber Safety Tips</h3>
          <ul className="list-disc pl-6 text-lg opacity-80">
            <li>Use strong and unique passwords for each account.</li>
            <li>Never share personal or financial details over email or phone.</li>
            <li>Be cautious of phishing emails and suspicious links.</li>
            <li>Keep your software and antivirus up to date.</li>
            <li>Use two-factor authentication (2FA) wherever possible.</li>
            <li>Think before you click on unknown links or attachments.</li>
          </ul>
        </div>

        {/* Cybercrime Awareness Videos */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Cybersecurity Awareness</h2>
          <p className="text-lg opacity-80 mb-8">
            Learn how to stay safe online with these informative videos.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Sgs4K2eAZhg", // Cyber Crime Awareness Govt
              "EHqXMxY4_Nk", // Cyber Crime Awareness
              "FJPWnEGNdZM", // Cybersecurity Tips
            ].map((videoId, index) => (
              <div key={index} className="relative w-full h-56">
                <iframe
                  className="w-full h-full rounded-lg shadow-lg"
                  src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=${window.location.origin}`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={`Cyber Awareness Video ${index + 1}`}
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
