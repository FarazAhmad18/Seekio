import React from "react";
import { Briefcase, Rocket, Users } from "lucide-react";

const CareersPage = () => {
  return (
    <div className="pt-20 w-full min-h-screen bg-gradient-to-b from-blue-50 via-white to-indigo-50 px-4 md:px-16 py-12">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-3 flex items-center justify-center gap-2">
          <Briefcase size={36} className="text-indigo-500" />
          Join the Seekio Team
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          We're shaping the future of learning. Join a team that values creativity, innovation, and growth.
        </p>
      </section>

      {/* Why Work With Us */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
        <div className="bg-white p-6 rounded-3xl shadow-md border-l-4 border-indigo-500">
          <Rocket size={28} className="text-indigo-600 mb-2" />
          <h3 className="text-xl font-bold text-indigo-800 mb-1">Fast Growth Culture</h3>
          <p className="text-sm text-gray-700">Grow with us while building impactful products in education technology.</p>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-md border-l-4 border-pink-500">
          <Users size={28} className="text-pink-600 mb-2" />
          <h3 className="text-xl font-bold text-pink-800 mb-1">Collaborative Environment</h3>
          <p className="text-sm text-gray-700">We thrive on teamwork, mentorship, and open communication across all levels.</p>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-md border-l-4 border-green-500">
          <Briefcase size={28} className="text-green-600 mb-2" />
          <h3 className="text-xl font-bold text-green-800 mb-1">Career Growth Opportunities</h3>
          <p className="text-sm text-gray-700">Upskill through courses, workshops, and real-time project exposure.</p>
        </div>
      </section>

      {/* Current Openings */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Current Openings</h2>
        <div className="space-y-6">
          {[
            {
              title: "Frontend Developer (React.js)",
              type: "Full-time",
              location: "Remote / Pakistan",
              salary: "PKR 100,000 - 150,000",
            },
            {
              title: "UI/UX Designer",
              type: "Full-time",
              location: "Remote / Lahore Office",
              salary: "PKR 80,000 - 120,000",
            },
            {
              title: "Marketing & Community Manager",
              type: "Part-time",
              location: "Remote",
              salary: "PKR 60,000 - 90,000",
            },
          ].map((job, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-2xl border border-gray-200 hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
              <div className="text-sm text-gray-600 flex flex-col md:flex-row gap-3 mt-1">
                <span><strong>Type:</strong> {job.type}</span>
                <span><strong>Location:</strong> {job.location}</span>
                <span><strong>Salary:</strong> {job.salary}</span>
              </div>
              <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 text-sm">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center mt-10">
        <p className="text-lg text-gray-800 mb-4 font-medium">Don’t see a role that fits?</p>
        <a
          href="/contact"
          className="inline-block px-5 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 text-sm"
        >
          Contact Us for Opportunities
        </a>
      </div>

      {/* Footer Note */}
      <div className="text-center text-sm text-gray-600 mt-16">
        © {new Date().getFullYear()} Seekio — Empowering Learners, Building Careers
      </div>
    </div>
  );
};

export default CareersPage;
