import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const courses = [
  {
    id: 1,
    title: "Organizational Resource Management",
    price: "PKR 3000",
    image: "/course1.jpg",
  },
  {
    id: 2,
    title: "Market Research and Customer Insights",
    price: "PKR 3500",
    image: "/course2.jpg",
  },
  {
    id: 3,
    title: "Advanced Data Analytics",
    price: "PKR 4000",
    image: "/course3.jpg",
  },
];

const Slider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="mt-4"
    >
      {courses.map((course) => (
        <SwiperSlide key={course.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
          <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-md mb-2" />
          <h3 className="text-lg font-semibold">{course.title}</h3>
          <p className="text-green-600 font-bold">{course.price}</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-2">Enroll Now</button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
