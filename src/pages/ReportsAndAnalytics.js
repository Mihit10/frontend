import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import "chart.js/auto";
import ReactMarkdown from "react-markdown";

export default function ReportsAndAnalytics() {
  return (
    <div className="py-12 bg-gray-100 text-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Cybercrime Reports & Analytics
        </h2>
        <p className="text-lg text-center opacity-80 mb-8">
          Showcasing India's success in tackling cybercrimes with proactive measures.
        </p>

        {/* Grid Layout for Charts */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Cases Resolved vs Reported (Bar Chart) */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Cases Resolved vs Reported (2021-2024)</h3>
            <Bar
              data={{
                labels: ["2021", "2022", "2023", "2024"],
                datasets: [
                  {
                    label: "Cases Reported",
                    data: [35000, 45000, 60000, 75000],
                    backgroundColor: "#FF6B6B",
                  },
                  {
                    label: "Cases Resolved",
                    data: [25000, 40000, 55000, 70000],
                    backgroundColor: "#1E90FF",
                  },
                ],
              }}
              options={{ responsive: true }}
            />
          </div>

          {/* Cybercrime Trends (Line Chart) */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Cybercrime Trends Over Time</h3>
            <Line
              data={{
                labels: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
                datasets: [
                  {
                    label: "Financial Fraud",
                    data: [5000, 7000, 12000, 15000, 20000, 25000, 30000],
                    borderColor: "#FF6B6B",
                    fill: false,
                  },
                  {
                    label: "Phishing Attacks",
                    data: [4000, 6000, 8000, 13000, 18000, 23000, 28000],
                    borderColor: "#1E90FF",
                    fill: false,
                  },
                  {
                    label: "Identity Theft",
                    data: [3000, 5000, 7000, 11000, 15000, 20000, 25000],
                    borderColor: "#28A745",
                    fill: false,
                  },
                ],
              }}
              options={{ responsive: true }}
            />
          </div>

          {/* Success Rate of Cybercrime Cases (Pie Chart) */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Success Rate of Cybercrime Cases</h3>
            <Pie
              data={{
                labels: ["Resolved", "Pending"],
                datasets: [
                  {
                    data: [80, 20],
                    backgroundColor: ["#1E90FF", "#FF6B6B"],
                  },
                ],
              }}
              options={{ responsive: true }}
            />
          </div>

          {/* Citizen Awareness Impact (Bar Chart) */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Cyber Awareness Impact (2019-2024)</h3>
            <Bar
              data={{
                labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
                datasets: [
                  {
                    label: "People Reached (in millions)",
                    data: [5, 10, 15, 25, 40, 55],
                    backgroundColor: "#28A745",
                  },
                ],
              }}
              options={{ responsive: true }}
            />
          </div>
        </div>

        {/* Government Initiatives & Impact Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Government Initiatives & Impact</h3>
          <div className="text-lg opacity-80 mb-6">
            <ReactMarkdown>
              {`The Indian Government has actively implemented cybersecurity measures, 
              leading to a **remarkable 80% case resolution rate** and increased awareness campaigns, 
              significantly reducing cyber threats nationwide.

              With advanced AI-driven investigation tools, dedicated cyber cells, and public awareness programs, 
              India is at the forefront of the battle against cybercrimes.`}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
