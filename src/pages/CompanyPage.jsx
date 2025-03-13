import React from "react";
import { Building, Star, Users, HeartHandshake } from "lucide-react";

const CompanyPage = () => {
  return (
    <div className="pt-20 w-full min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 md:px-16 py-12">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-orange-700 mb-3 flex items-center justify-center gap-2">
          <Building className="text-orange-600" size={36} />
          About Our Company
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          At Seekio, we’re on a mission to make learning simple, accessible, and impactful for everyone.
        </p>
      </section>

      {/* Our Mission and Vision */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div className="bg-white p-8 rounded-3xl shadow-md border-l-4 border-orange-500">
          <h2 className="text-2xl font-bold text-orange-800 mb-2">🎯 Our Mission</h2>
          <p className="text-gray-700">
            To empower learners worldwide with accessible, high-quality digital education that transforms lives and careers.
          </p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-md border-l-4 border-yellow-500">
          <h2 className="text-2xl font-bold text-yellow-700 mb-2">🌟 Our Vision</h2>
          <p className="text-gray-700">
            To become the most loved and innovative learning platform where every individual can unlock their full potential.
          </p>
        </div>
      </section>

      {/* Company Values */}
      <section className="mb-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-700 mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-3xl border-l-4 border-pink-500 shadow-md">
            <Star size={28} className="text-pink-600 mb-2" />
            <h3 className="text-xl font-semibold text-pink-700 mb-1">Innovation</h3>
            <p className="text-sm text-gray-700">
              We embrace creativity and continuously seek smarter solutions to real-world challenges.
            </p>
          </div>
          <div className="bg-white p-6 rounded-3xl border-l-4 border-green-500 shadow-md">
            <Users size={28} className="text-green-600 mb-2" />
            <h3 className="text-xl font-semibold text-green-700 mb-1">Collaboration</h3>
            <p className="text-sm text-gray-700">
              Our strength lies in teamwork, shared goals, and open dialogue across every department.
            </p>
          </div>
          <div className="bg-white p-6 rounded-3xl border-l-4 border-blue-500 shadow-md">
            <HeartHandshake size={28} className="text-blue-600 mb-2" />
            <h3 className="text-xl font-semibold text-blue-700 mb-1">Integrity</h3>
            <p className="text-sm text-gray-700">
              We’re committed to transparency, honesty, and doing the right thing—always.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center mt-10">
        <p className="text-lg text-gray-800 mb-4 font-medium">
          Ready to be part of a purpose-driven organization?
        </p>
        <a
          href="/careers"
          className="inline-block px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 text-sm transition duration-200"
        >
          Explore Careers
        </a>
      </div>

      {/* Footer Note */}
      <div className="text-center text-sm text-gray-600 mt-16">
        © {new Date().getFullYear()} Seekio — Building a brighter learning future together.
      </div>
    </div>
  );
};

export default CompanyPage;
