import { useState } from "react";
import { CheckCircle, Clock } from "lucide-react";

export default function ProductManagementExam() {
  const [selectedOption, setSelectedOption] = useState(1);

  const options = [
    {
      id: 1,
      text: "Vision → Roadmap → Research → Agile → Metrics → Collaboration",
    },
    {
      id: 2,
      text: "Research → Vision → Roadmap → Collaboration → Agile → Metrics",
    },
    {
      id: 3,
      text: "Vision → Research → Roadmap → Collaboration → Metrics → Agile",
    },
    {
      id: 4,
      text: "Vision → Research → Agile → Roadmap → Collaboration → Metrics",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Product Management Exam
        </h2>
        <div className="flex items-center text-red-500 font-bold text-lg">
          <Clock className="w-5 h-5 mr-1" />
          Timer: 01:14 mins
        </div>
      </div>

      {/* Question */}
      <div>
        <h3 className="text-lg sm:text-xl font-semibold mb-2">Question 10/10</h3>
        <p className="text-gray-700 mb-4 text-sm sm:text-base">
          A product manager is tasked with launching a new mobile app aimed at
          improving personal finance management. The manager first defines a
          product vision, conducts market research, and prioritizes features.
          The development follows Agile methodology, with success tracked
          through KPIs such as user engagement and revenue.
        </p>
        <p className="font-semibold text-base sm:text-lg mb-2">
          Which of the following represents the correct sequence of steps the
          product manager should follow?
        </p>
      </div>

      {/* Answer Options */}
      <div className="space-y-3">
        {options.map((option) => (
          <div
            key={option.id}
            className={`p-4 flex items-center border rounded-lg cursor-pointer transition-all duration-200 ${
              selectedOption === option.id
                ? "bg-green-100 border-green-500 scale-105"
                : "bg-gray-100 border-gray-300 hover:scale-105"
            }`}
            onClick={() => setSelectedOption(option.id)}
          >
            <div
              className={`w-6 h-6 flex items-center justify-center border rounded-full mr-3 ${
                selectedOption === option.id
                  ? "bg-green-500 text-white border-green-500"
                  : "border-gray-400"
              }`}
            >
              {selectedOption === option.id && <CheckCircle size={18} />}
            </div>
            <span className="text-gray-800 text-sm sm:text-base">
              {option.text}
            </span>
          </div>
        ))}
      </div>

      {/* Finish Button */}
      <button className="mt-5 w-full bg-green-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition">
        Finish
      </button>
    </div>
  );
}


