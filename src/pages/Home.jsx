import React from "react";
import { Button } from "../components/Button";
import CourseCard from "../components/CourseCard";
import HeroImg from '../assets/homeImg.jpg';
import promotionImg from '../assets/promotion.jpg';
import courseimg2 from '../assets/courseimg2.png';

const Home = () => {
  const courses = [
    {
      title: "Product Management Basic - Course",
      price: "PKR 3200",
      students: 30,
      image: courseimg2,
    },
    {
      title: "DM Data Science Professional Certificate",
      price: "PKR 6500",
      students: 52,
      image: courseimg2,
    },
    {
      title: "The Science of Well-Being",
      price: "PKR 2000",
      students: 23,
      image: courseimg2,
    },
    {
      title: "DM Data Science Professional Certificate",
      price: "PKR 6500",
      students: 52,
      image: courseimg2,
    },
  ];

  const categories = [
    { label: "Development", icon: "💻" },
    { label: "Marketing", icon: "📈" },
    { label: "Design", icon: "🎨" },
    { label: "Business", icon: "💼" },
    { label: "Health", icon: "🧠" },
    { label: "Technology", icon: "🔬" },
  ];

  const testimonials = [
    {
      name: "Areeba N.",
      review: "Seekio helped me land my first job in tech. The quality of courses is top-notch!",
    },
    {
      name: "Umar R.",
      review: "The hands-on projects made learning fun and real. Highly recommended!",
    },
  ];

  return (
    <div className="pt-20 w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 md:px-16 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            ALL THE SKILLS YOU NEED IN ONE PLACE
          </h1>
          <p className="text-gray-600 mt-4 text-base md:text-lg">
            From critical skills to technical topics, Seekio supports your professional development.
          </p>
          <div className="flex gap-4 mt-6">
            <Button className="bg-emerald-600 text-white hover:bg-emerald-700">Plans</Button>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">Enroll Now</Button>
          </div>
        </div>
        <div className="w-full md:w-[50%] flex justify-center">
          <img
            src={HeroImg}
            alt="Hero Illustration"
            className="w-80 h-64 md:w-[500px] md:h-[350px] object-cover border-4 border-gray-200 shadow-xl rounded-2xl"
          />
        </div>
      </section>

      {/* Course Categories */}
      <section className="px-4 md:px-16 py-10 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">Browse by Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 justify-center text-center">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-200">
              <span className="text-3xl mb-2">{cat.icon}</span>
              <p className="text-sm font-medium text-gray-700">{cat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Search and Popular Courses Section */}
      <section className="px-4 md:px-16 py-8">
        <div className="text-center mb-6">
          <input
            type="text"
            placeholder="Search for anything..."
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">Popular Courses</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {['All Programmes', 'Life & Career', 'Program Design', 'Program Content', 'Program Design'].map((filter, i) => (
            <button key={i} className="bg-gray-100 px-4 py-1 rounded-full text-sm hover:bg-gray-200">
              {filter}
            </button>
          ))}
        </div>

        {/* Course Cards */}
        <div className="md:grid md:grid-cols-4 gap-6 hidden md:block">
  {courses.map((course, index) => (
    <CourseCard
      key={index}
      title={course.title}
      price={course.price}
      students={course.students}
      image={course.image}
    />
  ))}
</div>
        {/* Mobile Slider */}
<div className="block md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4">
  <div className="flex gap-4">
    {courses.map((course, index) => (
      <div key={index} className="min-w-[250px] flex-shrink-0">
        <CourseCard
          title={course.title}
          price={course.price}
          students={course.students}
          image={course.image}
        />
      </div>
    ))}
  </div>
</div>
      </section>

      {/* Platform Stats */}
      <section className="bg-gray-100 py-12 px-4 md:px-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Seekio In Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-3xl font-bold text-indigo-600">+15K</p>
            <p className="text-gray-700">Learners</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-indigo-600">120+</p>
            <p className="text-gray-700">Courses</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-indigo-600">40+</p>
            <p className="text-gray-700">Mentors</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-indigo-600">98%</p>
            <p className="text-gray-700">Satisfaction Rate</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-4 md:px-16 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">What Our Learners Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow-md">
              <p className="text-gray-700 italic">“{item.review}”</p>
              <p className="mt-4 font-semibold text-gray-900">— {item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Promotion Section */}
      <section className="bg-teal-100 px-4 md:px-16 py-10 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="max-w-xl">
            <p className="text-teal-900 font-semibold text-lg mb-2">
              77% of learners report career benefits,
            </p>
            <p className="text-teal-800 text-base">
              like landing a new job, earning a promotion, gaining applicable skills, and more.
            </p>
            <Button className="mt-4 bg-indigo-600 text-white hover:bg-indigo-700">Start 7-Day Free Trial</Button>
          </div>
          <div className="w-full md:w-[60%] flex justify-center">
            <img
              src={promotionImg}
              alt="Promotion"
              className="w-72 md:w-96 rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="py-10 px-4 md:px-16 bg-indigo-700 text-white text-center mt-10">
        <h3 className="text-2xl font-semibold mb-4">Still thinking?</h3>
        <p className="mb-4 text-base">Explore a world of knowledge and career growth with Seekio. Start today!</p>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-md transition duration-300">
  Explore Courses
</Button>
      </section>
    </div>
  );
};

export default Home;
