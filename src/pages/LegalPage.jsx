import React from "react";
import { FileText, Lock, ShieldCheck } from "lucide-react";

const LegalPage = () => {
  return (
    <div className="pt-20 w-full min-h-screen bg-gradient-to-b from-gray-50 to-white px-4 md:px-16 py-12">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-3 flex items-center justify-center gap-2">
          <ShieldCheck size={36} className="text-blue-500" />
          Legal & Policy Information
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Understand your rights and our responsibilities. Read our terms, privacy, and user agreements.
        </p>
      </section>

      {/* Legal Sections */}
      <div className="space-y-10 max-w-4xl mx-auto">
        {/* Terms of Service */}
        <div className="bg-white rounded-3xl border-l-4 border-blue-500 p-6 shadow-md">
          <h2 className="text-2xl font-bold text-blue-800 mb-2 flex items-center gap-2">
            <FileText size={24} className="text-blue-600" /> Terms of Service
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            By using Seekio, you agree to comply with our platform rules and guidelines. All content on this platform
            is owned or licensed by Seekio and must not be copied or redistributed without permission.
            Users are responsible for their account activity and must not use the platform for illegal or unauthorized purposes.
          </p>
        </div>

        {/* Privacy Policy */}
        <div className="bg-white rounded-3xl border-l-4 border-pink-500 p-6 shadow-md">
          <h2 className="text-2xl font-bold text-pink-800 mb-2 flex items-center gap-2">
            <Lock size={24} className="text-pink-600" /> Privacy Policy
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            We value your privacy. Your data is collected only for providing better services and personalized experiences.
            We never sell your data to third parties. All sensitive information is encrypted and securely stored.
            You can request access to, modify, or delete your data anytime.
          </p>
        </div>

        {/* User Agreement */}
        <div className="bg-white rounded-3xl border-l-4 border-green-500 p-6 shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-2 flex items-center gap-2">
            <ShieldCheck size={24} className="text-green-600" /> User Agreement
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            By creating an account, you acknowledge that you are responsible for your content and interactions.
            You must not post or share any offensive, misleading, or illegal material.
            Seekio reserves the right to suspend or terminate accounts that violate community guidelines.
          </p>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center text-sm text-gray-600 mt-16">
        Last updated: March 13, 2025
      </div>
    </div>
  );
};

export default LegalPage;
