import React from "react";
import { Sparkles, Users, ShieldCheck, Smile } from "lucide-react";

const JoinCommunity = () => {
  return (
    <div className="pt-20 w-full min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 md:px-16 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
          🤝 Join Our Community
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Connect with learners, build relationships, share ideas, and grow together in your favorite communities.
        </p>
      </section>

      {/* Form Section */}
      <section className="bg-white shadow-lg border border-blue-100 rounded-3xl p-8 max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">🎯 Get Started</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Interest Areas</label>
            <input
              type="text"
              placeholder="e.g. React, Data Science, Marketing"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Community</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
              <option>Select Community</option>
              <option>Web Dev Enthusiasts</option>
              <option>Data Science Learners</option>
              <option>Digital Marketing Circle</option>
              <option>Career & Resume Tips</option>
              <option>Personal Branding Hub</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg transition-all"
          >
            🚀 Join Now
          </button>
        </form>
      </section>

      {/* Benefits Section */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
        <div className="bg-yellow-100 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all">
          <Sparkles className="mx-auto text-yellow-600 mb-2" size={32} />
          <h3 className="text-lg font-bold text-gray-800">Learn Together</h3>
          <p className="text-sm text-gray-600 mt-1">Collaborate on real-world ideas and grow faster with peer support.</p>
        </div>

        <div className="bg-pink-100 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all">
          <Users className="mx-auto text-pink-600 mb-2" size={32} />
          <h3 className="text-lg font-bold text-gray-800">Expand Your Network</h3>
          <p className="text-sm text-gray-600 mt-1">Connect with professionals and build lasting relationships.</p>
        </div>

        <div className="bg-indigo-100 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all">
          <ShieldCheck className="mx-auto text-indigo-600 mb-2" size={32} />
          <h3 className="text-lg font-bold text-gray-800">Safe & Supportive Space</h3>
          <p className="text-sm text-gray-600 mt-1">Engage in positive conversations and respectful collaborations.</p>
        </div>

        <div className="bg-green-100 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all">
          <Smile className="mx-auto text-green-600 mb-2" size={32} />
          <h3 className="text-lg font-bold text-gray-800">Have Fun & Thrive</h3>
          <p className="text-sm text-gray-600 mt-1">Participate in activities, events, and challenges to keep learning fun!</p>
        </div>
      </section>
    </div>
  );
};

export default JoinCommunity;
