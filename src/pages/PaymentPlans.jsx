import React from "react";
import { Button } from "../components/Button";
import { Star, Gem, Crown, Leaf } from "lucide-react"; // Optional: plan icons

const plans = [
  {
    name: "Free Plan",
    price: "PKR 0",
    features: [
      "Access to basic courses",
      "Community support",
      "Limited resources",
    ],
    bgColor: "bg-gradient-to-br from-gray-100 to-gray-200",
    textColor: "text-gray-800",
    icon: <Leaf className="w-6 h-6 text-green-600" />,
  },
  {
    name: "Bronze Plan",
    price: "PKR 1,500/month",
    features: [
      "Access to all basic courses",
      "Email support",
      "Course progress tracking",
    ],
    bgColor: "bg-gradient-to-br from-yellow-100 to-yellow-200",
    textColor: "text-yellow-800",
    icon: <Star className="w-6 h-6 text-yellow-600" />,
  },
  {
    name: "Gold Plan",
    price: "PKR 3,000/month",
    features: [
      "Access to all courses",
      "Priority support",
      "Downloadable resources",
      "Certificate of completion",
    ],
    badge: "Most Popular",
    bgColor: "bg-gradient-to-br from-orange-100 to-yellow-300",
    textColor: "text-yellow-900",
    icon: <Crown className="w-6 h-6 text-orange-600" />,
  },
  {
    name: "Diamond Plan",
    price: "PKR 5,000/month",
    features: [
      "All Gold features",
      "1-on-1 mentorship",
      "Live sessions with instructors",
      "Early access to new courses",
    ],
    bgColor: "bg-gradient-to-br from-indigo-100 to-purple-200",
    textColor: "text-purple-800",
    icon: <Gem className="w-6 h-6 text-indigo-600" />,
  },
];

const PaymentPlans = () => {
  return (
    <div className="pt-20 w-full min-h-screen bg-white px-4 md:px-16 py-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12">
        🔥 Choose Your Learning Plan
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-3xl shadow-2xl p-6 ${plan.bgColor} ${plan.textColor} hover:shadow-yellow-300 hover:scale-[1.03] transition-all duration-300 ease-in-out`}
          >
            {/* Badge */}
            {plan.badge && (
              <span className="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                ⭐ {plan.badge}
              </span>
            )}

            {/* Icon + Name */}
            <div className="flex items-center gap-2 mb-3">
              {plan.icon}
              <h3 className="text-xl font-bold">{plan.name}</h3>
            </div>

            {/* Price */}
            <p className="text-lg font-semibold mb-4">{plan.price}</p>

            {/* Features */}
            <ul className="space-y-2 text-sm font-medium">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✔</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Button className="mt-6 bg-emerald-600 text-white hover:bg-emerald-700 w-full">
              Choose {plan.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentPlans;
