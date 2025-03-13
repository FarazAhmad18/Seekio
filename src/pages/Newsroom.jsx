import React from "react";
import { ArrowRight } from "lucide-react";

const newsData = [
  {
    id: 1,
    title: "Seekio LMS Launches New AI Cheating Detection System",
    date: "March 12, 2025",
    description:
      "Our new AI-based system makes online assessments more secure and intelligent. Learn how we're shaping the future of online learning.",
    author: "Seekio Team",
  },
  {
    id: 2,
    title: "Partnership with EduTech 360 Announced",
    date: "February 28, 2025",
    description:
      "We’re thrilled to announce a new collaboration with EduTech 360 to expand quality online education for everyone.",
    author: "Seekio Newsroom",
  },
  {
    id: 3,
    title: "New Features Rollout – March 2025",
    date: "March 5, 2025",
    description:
      "New dashboard analytics, user progress reports, and more! Check out what’s coming this month.",
    author: "Product Team",
  },
  {
    id: 4,
    title: "Instructor Onboarding Program Launched",
    date: "March 10, 2025",
    description:
      "Our new onboarding program helps instructors start teaching faster with guidance, templates, and marketing support.",
    author: "Instructor Support",
  },
  {
    id: 5,
    title: "Seekio Mobile App Coming Soon",
    date: "March 18, 2025",
    description:
      "Learning on-the-go just got better! Our upcoming mobile app will help learners access courses anytime, anywhere.",
    author: "Mobile Development Team",
  },
  {
    id: 6,
    title: "Student Success Stories — March Spotlight",
    date: "March 7, 2025",
    description:
      "We're proud to highlight success stories from our students who’ve advanced their careers through Seekio LMS.",
    author: "Community Team",
  },
];

const Newsroom = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50 py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-800 mb-3">Seekio Newsroom</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news, features, announcements, and stories from Seekio LMS.
          </p>
        </div>

        {/* News Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-sm text-gray-500">{item.date}</span>
                <h2 className="text-lg font-semibold text-indigo-700 mt-2 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs font-medium bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
                  {item.author}
                </span>
                <button className="text-sm text-indigo-700 hover:text-indigo-900 font-medium flex items-center gap-1 group">
                  Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-all" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newsroom;
