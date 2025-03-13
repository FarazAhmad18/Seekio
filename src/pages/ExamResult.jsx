import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ExamResult = () => {
  const progressData = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: [60, 40], // Example: 60% completed, 40% remaining
        backgroundColor: ["#10B981", "#E5E7EB"],
        hoverBackgroundColor: ["#059669", "#D1D5DB"],
      },
    ],
  };

  const progressOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const modules = [
    { code: "Module - 1", title: "Fundamentals of Product Management", time: "10 min", score: "6/10", percentage: "60%", status: "FAIL" },
    { code: "Module - 2", title: "Product Roadmap and Strategy", time: "05 min", score: "8/10", percentage: "80%", status: "PASS" },
    { code: "Module - 3", title: "Customer Insights", time: "10 min", score: "5/10", percentage: "50%", status: "FAIL" },
    { code: "Module - 4", title: "UX Design for Product Managers", time: "15 min", score: "7.5/10", percentage: "75%", status: "PASS" },
    { code: "Module - 5", title: "Data-Driven Decision Making", time: "3 min", score: "3/10", percentage: "30%", status: "FAIL" },
  ];

  return (
    <div className="pt-20 w-full bg-gray-50 min-h-screen p-4 md:p-8">
      <header className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Your Learning Journey</h1>
        <p className="text-sm md:text-base text-gray-500 mt-1">Access all your enrolled courses, track your progress, and prepare for upcoming tests.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Course Cards */}
        <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Product Management Basic - Course</h2>
          <p className="text-sm text-gray-500">Fundamentals of product management including strategy, UX, and execution.</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Market Research and Customer Insights</h2>
          <p className="text-sm text-gray-500">Customer insights for better product design and business decisions.</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">UX/UI Design for Product Managers</h2>
          <p className="text-sm text-gray-500">Learn the importance of user experience in product design and delivery.</p>
        </div>
      </div>

      {/* Course Progress */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Course Name: Product Management Basic - Course</h3>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-red-500 text-white px-4 py-1 rounded-full text-sm hover:bg-red-600">Repeat Course</button>
              <button className="bg-green-500 text-white px-4 py-1 rounded-full text-sm hover:bg-green-600">Request Certificate</button>
            </div>
            <p className="mt-2 text-sm text-gray-600">You have completed 5 modules so far</p>
          </div>

          <div className="relative w-36 h-36 mx-auto md:mx-0">
            <Doughnut data={progressData} options={progressOptions} />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-lg font-bold text-gray-800">60%</p>
              <p className="text-xs text-gray-500">Progress</p>
            </div>
          </div>
        </div>
        <div className="mt-4 flex gap-6">
          <p className="text-green-600 font-semibold">Best Score: 4/5</p>
          <p className="text-red-600 font-semibold">Worst Score: 3/10</p>
        </div>
      </div>

      {/* Module Table */}
      <div className="overflow-x-auto bg-white p-6 rounded-xl shadow-md">
        <table className="min-w-full text-sm text-gray-700">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left p-2">Module Code</th>
              <th className="text-left p-2">Module Title</th>
              <th className="text-center p-2">Time</th>
              <th className="text-center p-2">Score</th>
              <th className="text-center p-2">Percentage</th>
              <th className="text-center p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {modules.map((module, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{module.code}</td>
                <td className="p-2">{module.title}</td>
                <td className="text-center p-2">{module.time}</td>
                <td className="text-center p-2">{module.score}</td>
                <td className="text-center p-2">{module.percentage}</td>
                <td className={`text-center p-2 font-bold ${module.status === 'PASS' ? 'text-green-600' : 'text-red-600'}`}>{module.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Note */}
      <div className="mt-6 bg-red-100 text-red-700 p-4 rounded-md border border-red-300 text-sm">
        Note: The passing criteria for this course is a minimum score of 75%. Ensure consistent performance in all assessments to reach the benchmark.
      </div>
    </div>
  );
};

export default ExamResult;


