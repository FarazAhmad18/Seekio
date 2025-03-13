import React from "react";
import { FaStar } from "react-icons/fa";
import Slider from "../components/Slider";
import courseImage from "../assets/course-desc.png"; // Add your course image here

const CourseDesc = () => {
  return (
    <div className="pt-20 max-w-6xl mx-auto p-4">
      {/* Course Header */}
      <div className="bg-blue-100 p-6 rounded-xl flex flex-col lg:flex-row items-center gap-6">
       
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Product Management Basic - Course</h1>
          <p className="text-gray-600 mt-2">
            Product Management Masterclass, you’ll learn with Sara Johnson - Head of Product Customer Platform, Giglo Indonesia.
          </p>
          <div className="mt-4 flex gap-4">
            <span className="text-green-600 font-bold text-xl">PKR 3000</span>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Enroll Now</button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">Add To Cart</button>
          </div>
        </div>
        <img
          src={courseImage}
          alt="Course"
          className="w-64 h-64 rounded-[50px] object-cover"/>
      </div>

      {/* Course Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <p className="font-bold">Instructor:</p>
          <p>Sara Johnson</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <p className="font-bold">Skill Level:</p>
          <p>Beginner</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <p className="font-bold">Time to Complete:</p>
          <p>10 Hours</p>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold">Learner Reviews</h2>
        <div className="flex items-center mt-2">
          <span className="text-2xl font-bold">4.7</span>
          <div className="flex text-yellow-500 ml-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < 4 ? "text-yellow-500" : "text-gray-400"} />
            ))}
          </div>
        </div>

        {/* Individual Reviews */}
        <div className="mt-4 space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-bold">Anonymous User</p>
            <p className="text-gray-600">This course made me understand all concepts easily.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-bold">Anonymous User</p>
            <p className="text-gray-600">A great investment. I learned a lot from it.</p>
          </div>
        </div>
      </div>

      {/* Related Courses */}
      <div className="mt-8">
        <h2 className="text-xl font-bold">Related Courses</h2>
        <Slider />
      </div>
    </div>
  );
};

export default CourseDesc;
