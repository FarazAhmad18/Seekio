import React from "react";
import { HelpCircle, Mail, Phone, MessageSquare, Info } from "lucide-react";

const HelpPage = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-indigo-50 to-white px-4 md:px-16 py-12">
      {/* Header */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-3 flex items-center justify-center gap-2">
          <HelpCircle size={36} className="text-indigo-500" />
          Help & Support
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Need help? We're here for you! Explore FAQs or reach out to our support team directly.
        </p>
      </section>

      {/* Help Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <div className="bg-white rounded-3xl border border-indigo-200 p-6 shadow-md hover:shadow-xl transition-all">
          <Info className="text-indigo-600 mb-3" size={32} />
          <h3 className="text-xl font-bold text-gray-800 mb-2">General Info</h3>
          <p className="text-gray-600 text-sm">
            Learn how to get started, enroll in courses, and manage your account settings.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-pink-200 p-6 shadow-md hover:shadow-xl transition-all">
          <MessageSquare className="text-pink-600 mb-3" size={32} />
          <h3 className="text-xl font-bold text-gray-800 mb-2">FAQs</h3>
          <p className="text-gray-600 text-sm">
            Find quick answers to the most common questions from our learners.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-green-200 p-6 shadow-md hover:shadow-xl transition-all">
          <Phone className="text-green-600 mb-3" size={32} />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Contact Support</h3>
          <p className="text-gray-600 text-sm">
            Call our 24/7 support line or message our friendly team — we’re always happy to help!
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {[
            {
              question: "How do I enroll in a course?",
              answer: "Click on the 'Enroll Now' button on the course card or course detail page. Choose your plan and proceed to payment.",
            },
            {
              question: "Can I cancel my subscription?",
              answer: "Yes, you can cancel anytime from your account settings. Your access will remain valid till the end of the billing cycle.",
            },
            {
              question: "Do you offer certificates?",
              answer: "Yes! Upon completion of eligible courses, you’ll receive a digital certificate which you can share on LinkedIn or download.",
            },
            {
              question: "How do I contact customer support?",
              answer: "You can email us at support@seekio.com or call our hotline directly. We’re here 24/7 to assist you!",
            },
          ].map((item, index) => (
            <div key={index} className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-indigo-800 text-lg">{item.question}</h3>
              <p className="text-gray-700 text-sm mt-1">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="pt-20 bg-indigo-100 rounded-3xl py-10 px-6 text-center shadow-inner max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-indigo-700 mb-3">Still need help?</h3>
        <p className="text-gray-700 mb-4">Reach out to our support team and we'll get back to you quickly.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg transition-all">
            ✉️ Email Support
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg transition-all">
            📞 Call Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default HelpPage;
