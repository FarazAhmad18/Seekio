import React from "react";
import { Button } from "./Button"; // Adjust path if needed

const CourseCard = ({ title, price, students, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 w-full max-w-xs mx-auto">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-44 object-cover rounded-t-lg"
      />

      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{students}+ students</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-green-600 font-bold">{price}</span>
          <Button className="bg-green-600 text-white hover:bg-green-700 text-sm px-3 py-1 rounded-md">
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
