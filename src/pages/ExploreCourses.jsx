import React from "react";
import { FaSearch, FaStar } from "react-icons/fa";
// import courseImg from "../assets/exploreCourse.png";

const ExploreCourses = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Unlock Your Potential with Expert Courses and Tests</h1>
        <p className="text-gray-600 mt-2">From critical skills to technical topics, Seekio supports your professional development.</p>
        <div className="mt-4 flex justify-center">
          <input
            type="text"
            placeholder="Search for anything..."
            className="p-2 border rounded-l-lg w-1/2 focus:outline-none"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">
            <FaSearch />
          </button>
        </div>
      </div>
      
      {/* Categories Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-yellow-100 p-4 rounded-lg">Balance of Work &amp; Living</div>
        <div className="bg-green-100 p-4 rounded-lg">Market Research and Insights</div>
        <div className="bg-red-100 p-4 rounded-lg">UX/UI Design for Product</div>
      </div>
      
      {/* Popular Instructors */}
      <h2 className="text-2xl font-bold mb-4">Popular Instructors</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white shadow-md p-4 rounded-lg text-center">
          <p className="font-bold">Stephen Clark</p>
          <p className="text-gray-600">Marketing Expert</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg text-center">
          <p className="font-bold">Emma Sophie</p>
          <p className="text-gray-600">UI/UX Designer</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg text-center">
          <p className="font-bold">Sara Johnson</p>
          <p className="text-gray-600">Product Manager</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg text-center">
          <p className="font-bold">Jane Clear</p>
          <p className="text-gray-600">Data Scientist</p>
        </div>
      </div>

      {/* Popular Courses */}
      <h2 className="text-2xl font-bold mb-4">Popular Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-lg">
            {/* <img src={courseImg} alt="Course" className="w-full h-40 object-cover rounded-md" /> */}
            <h3 className="font-bold mt-2">Product Management Basics</h3>
            <div className="flex items-center mt-1">
              <FaStar className="text-yellow-500" />
              <span className="ml-1">4.7</span>
            </div>
            <p className="text-green-600 font-bold mt-2">PKR 3000</p>
            <button className="bg-blue-500 text-white w-full mt-2 py-2 rounded-lg">Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCourses;
