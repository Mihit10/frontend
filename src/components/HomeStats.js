import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ModiImage from "../assets/moodi.jpeg";

// Mock Cybercrime Statistics
const stats = [
  { count: 8920, title: "Total Cases Reported", detail: "Cybercrime cases registered till date across India." },
  { count: 6570, title: "Cases Solved", detail: "Number of cybercrime cases successfully closed by authorities." },
  { count: 2250, title: "Ongoing Investigations", detail: "Currently active cybercrime investigations in process." },
  { count: 340, title: "Trending Crimes", detail: "Increase in phishing and online fraud cases in the last quarter." }
];

// Number Animation Hook
const useCountAnimation = (end, duration = 2000) => {
  const [count, setCount] = useState(200);
  
  useEffect(() => {
    let startTime;
    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(updateCount);
    };
    requestAnimationFrame(updateCount);
  }, [end, duration]);

  return count;
};

// Individual Card Component
const CardItem = ({ item }) => {
  const animatedCount = useCountAnimation(item.count);
  
  return (
    <div className="mb-6 bg-white shadow-md p-6 rounded-lg transition-transform transform hover:scale-105">
      <h3 className="font-black text-4xl md:text-[50px] text-[#1D3557] mb-3">
        {animatedCount}+
      </h3>
      <h5 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h5>
      <p className="text-gray-600">{item.detail}</p>
    </div>
  );
};

CardItem.propTypes = {
  item: PropTypes.object.isRequired,
};

// Card Grid
const Cards = () => {
  const divider = Math.ceil(stats.length / 2);
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-6">
        {stats.slice(0, divider).map((item, i) => (
          <CardItem item={item} key={i} />
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-6">
        {stats.slice(divider).map((item, i) => (
          <CardItem item={item} key={i} />
        ))}
      </div>
    </>
  );
};

// Dashboard Section
const HomeStats = () => {
  return (
    <section className="py-14 md:py-24 bg-[#F8F9FA] text-[#1D3557]">
      <div className="container px-4">
        <div className="grid grid-cols-12 gap-6">
          {/* Statistics Section */}
          <div className="col-span-12 lg:col-span-6">
            <h1 className="text-3xl md:text-[45px] font-bold leading-snug mb-4">
            Cybersecurity Achievements & Progress
            </h1>
            <p className="text-lg opacity-80 mb-12">
              An overview of cybercrime trends in India. Data reflects reported and solved cases, ongoing investigations, and emerging threats.
            </p>
            <Cards />
          </div>
          
          {/* Image Section */}
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 flex justify-center items-center">
            <img
              src={ModiImage} // Using Local Image
              alt="Cybersecurity Progress"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg shadow-lg object-cover transition-transform transform hover:scale-105"
            />
          </div>    
        </div>
      </div>
    </section>
  );
};

export default HomeStats;
