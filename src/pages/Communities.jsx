import React from "react";
import { Users, MessageCircleMore, Flame, Sparkles, Star } from "lucide-react";

const communities = [
  {
    title: "🔥 Web Dev Enthusiasts",
    description: "Share tips, React projects, and modern frontend stacks.",
    members: 312,
    tags: ["React", "CSS", "HTML"],
    color: "bg-gradient-to-br from-orange-100 to-yellow-100",
    icon: <Flame className="w-6 h-6 text-orange-600" />,
  },
  {
    title: "🔮 Data Science Learners",
    description: "Machine learning, Python, and Kaggle competition discussions.",
    members: 245,
    tags: ["ML", "Python", "AI"],
    color: "bg-gradient-to-br from-purple-100 to-indigo-100",
    icon: <Sparkles className="w-6 h-6 text-purple-700" />,
  },
  {
    title: "📣 Digital Marketing Circle",
    description: "SEO, ads, email campaigns, and conversion strategies.",
    members: 180,
    tags: ["SEO", "Campaigns", "Strategy"],
    color: "bg-gradient-to-br from-sky-100 to-blue-100",
    icon: <MessageCircleMore className="w-6 h-6 text-blue-700" />,
  },
  {
    title: "💼 Career & Resume Tips",
    description: "Get interview guidance, portfolio reviews, and career help.",
    members: 156,
    tags: ["Resume", "Job Hunt", "LinkedIn"],
    color: "bg-gradient-to-br from-emerald-100 to-lime-100",
    icon: <Users className="w-6 h-6 text-emerald-700" />,
  },
  {
    title: "⭐ Personal Branding Hub",
    description: "Build your online presence and become a standout creator.",
    members: 132,
    tags: ["Branding", "YouTube", "Personal Growth"],
    color: "bg-gradient-to-br from-pink-100 to-red-100",
    icon: <Star className="w-6 h-6 text-pink-600" />,
  },
];

const Communities = () => {
  return (
    <div className="pt-20 w-full min-h-screen bg-gradient-to-b from-white to-sky-50 px-4 md:px-16 py-12">
      {/* Header */}
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-3">
        💬 Join Inspiring Communities
      </h2>
      <p className="text-center text-gray-600 mb-10 text-lg max-w-2xl mx-auto">
        Learn, network, and grow together with learners from all over the world.
      </p>

      {/* Community Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {communities.map((group, index) => (
          <div
            key={index}
            className={`${group.color} rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 border border-opacity-30 border-gray-200`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                {group.icon}
                <h3 className="text-lg font-bold text-gray-800">{group.title}</h3>
              </div>
              <span className="text-sm text-gray-600">{group.members} members</span>
            </div>
            <p className="text-gray-700 text-sm mb-4">{group.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {group.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-white border border-gray-300 rounded-full px-3 py-1 text-gray-600 font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Action Button */}
            <button className="bg-emerald-600 text-white text-sm py-2 px-4 rounded-full hover:bg-emerald-700 transition-all">
              Join Community
            </button>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="mt-20 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-2xl px-6 py-12 text-center shadow-xl">
        <h3 className="text-3xl font-bold mb-2">Ready to Grow with Others?</h3>
        <p className="text-lg mb-6">Start engaging in the communities that match your interests.</p>
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition">
          Explore All Communities
        </button>
      </div>
    </div>
  );
};

export default Communities;
