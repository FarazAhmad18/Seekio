// src/pages/CourseDetail.jsx
import React from "react";
import { Card, CardContent } from "../components/Card";
import { Button } from "../components/Button";
import courseImage from "../assets/course-desc.png";

const CourseDetail = () => {
  const course = {
    title: "Product Management Basic - Course",
    instructor: "Sarah Johnson",
    instructorTitle: "Head of Product Customer Platform, Gojek Indonesia",
    rating: 4.7,
    modules: 6,
    time: "3 weeks at 3 hours a week",
    image: "https://via.placeholder.com/150",
  };

  return (
    <div className="pt-20 max-w-7xl mx-auto p-4 sm:p-6">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mb-10">
        {/* Course Info */}
        <div className="md:col-span-2 md:mt-20">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-3">
            {course.title}
          </h1>
          <p className="text-gray-700 sm:text-base text-sm mb-4">
            Product Management Masterclass, you will learn with{" "}
            <span className="font-semibold">{course.instructor}</span> –{" "}
            {course.instructorTitle}
          </p>
          <div className="flex flex-wrap gap-3 text-sm sm:text-base">
            <div className="bg-gray-100 px-4 py-2 rounded-xl">
              Total Modules: {course.modules}
            </div>
            <div className="bg-gray-100 px-4 py-2 rounded-xl">
              Rating: ⭐ {course.rating}
            </div>
            <div className="bg-gray-100 px-4 py-2 rounded-xl">
              Time: {course.time}
            </div>
          </div>
        </div>

        {/* Course Image */}
        <div className="w-full flex justify-center">
          <img
            src={courseImage}
            alt="Course"
            className="w-full max-w-sm md:max-w-xs h-auto object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar (Now Left) */}
        <div className="order-1 md:order-1 space-y-4 sm:space-y-6">
          <Card>
            <CardContent>
              <h3 className="font-semibold mb-3">Course Material</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                {Array.from({ length: 5 }, (_, i) => (
                  <li
                    key={i}
                    className="text-blue-600 hover:underline cursor-pointer"
                  >
                    Module {i + 1}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="font-semibold mb-3">Course Assignments</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Assignments will be shared weekly.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="font-semibold mb-3">Course Exams</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                MCQs and Project-based exams.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="font-semibold mb-3">Course Grades</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Grades will be shared after evaluations.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3 order-2 md:order-2 space-y-6">
          <Card>
            <CardContent>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
                <h3 className="text-xl font-bold text-blue-800">Week: 1</h3>
                <Button>Give Exam</Button>
              </div>
              <p className="text-gray-700 text-sm sm:text-base mb-4">
                The Fundamentals of Product Management course is designed to
                introduce individuals to core concepts and practices involved in
                managing the lifecycle of a product from ideation to launch.
              </p>

              {/* Smaller Image */}
              <img
                src={courseImage}
                alt="Lesson Preview"
                className="w-full max-w-md object-cover rounded-xl mx-auto mb-4"
              />

              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                <li>
                  <strong>1. Product Strategy and Vision:</strong> Understanding
                  how to define a product vision, set strategic goals, and align
                  them with customer solutions.
                </li>
                <li>
                  <strong>2. Market Research and Customer Insights:</strong>{" "}
                  Techniques for gathering and analyzing customer feedback,
                  product-market fit, and competitor analysis.
                </li>
                <li>
                  <strong>3. Agile Product Frameworks:</strong> Introduction to
                  agile development methodologies and frameworks for team
                  collaboration.
                </li>
                <li>
                  <strong>4. Metrics and Performance Measurement:</strong>{" "}
                  Identifying key performance indicators (KPIs) that help track
                  a product's success, customer engagement, and satisfaction.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
