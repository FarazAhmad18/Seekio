import React from "react";
import { FaEnvelope, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import Slider from "../components/Slider"; // Importing the slider component

const Insructor = () => {
  return (
    <div className="flex flex-col lg:flex-row p-6 max-w-6xl mx-auto">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 bg-gray-100 p-4 rounded-xl shadow-md text-center">
        <img
          src=""
          alt="" 
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-semibold">Sara Johnson</h2>
        <p className="text-gray-600">sara.johnson@email.com</p>
        <span className="block text-blue-500 font-medium mt-2">Product Manager</span>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">Contact</button>
        
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Skills</h3>
          <p className="text-gray-600">Marketing, Product Management, Business Analytics</p>
        </div>
        
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Languages</h3>
          <p className="text-gray-600">English - Native</p>
          <p className="text-gray-600">German - Fluent</p>
          <p className="text-gray-600">Italian - Fluent</p>
        </div>
        
        <div className="mt-4 flex justify-center space-x-3 text-xl">
          <FaLinkedin className="text-blue-700 cursor-pointer" />
          <FaTwitter className="text-blue-400 cursor-pointer" />
          <FaFacebook className="text-blue-600 cursor-pointer" />
          <FaInstagram className="text-pink-500 cursor-pointer" />
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="w-full lg:w-3/4 p-6">
        <h1 className="text-2xl font-bold">About me</h1>
        <p className="text-gray-700 mt-2">
          I'm a results-driven Product Manager with a degree from Oxford University.
          I specialize in leading cross-functional teams to deliver innovative products
          that meet user needs and drive business growth.
        </p>

        {/* Experiences */}
        <h2 className="text-xl font-bold mt-6">Experiences:</h2>
        <ul className="text-gray-700">
          <li>Instructor on Seekio <span className="text-gray-500">(June, 2024 - Present)</span></li>
          <li>Product Manager at Microsoft <span className="text-gray-500">(June, 2023 - 2024)</span></li>
          <li>Software Quality Engineer at Motive <span className="text-gray-500">(Jan, 2020 - 2023)</span></li>
        </ul>

        {/* Education */}
        <h2 className="text-xl font-bold mt-6">Education:</h2>
        <ul className="text-gray-700">
          <li>Bachelors of Data Science from Oxford University <span className="text-gray-500">(June, 2016 - 2019)</span></li>
          <li>Masters in Product Management from Harvard University <span className="text-gray-500">(June, 2020 - 2022)</span></li>
        </ul>

        {/* My Courses */}
        <h2 className="text-xl font-bold mt-6">My Courses:</h2>
        <Slider /> {/* Including the slider component */}
      </main>
    </div>
  );
};

export default Insructor;
