import React, { useState } from "react";
import courseThumbNail from "../assets/courseimg1.png";
import { CiCreditCard1 } from "react-icons/ci";

const CoursePayment = () => {
  const [formData, setFormData] = useState({
    email: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    cardholderName: "",
    country: "Pakistan",
    saveInfo: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Submitted:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg flex flex-col md:flex-row p-6">
      {/* Left - Course Details */}
      <div className="w-full md:w-1/2 border-r p-6">
        <h2 className="text-xl font-bold text-blue-700">
          Product Management Basic - Course
        </h2>
        <p className="text-lg font-bold text-green-600 mt-1">PKR 7000</p>
        <p className="text-gray-600 mt-2 text-sm">
          Learn with Sarah Johnson - Head of Product at Gojek Indonesia.
        </p>
        <img
          src={courseThumbNail}
          alt="Course Thumbnail"
          className="mt-4 w-full h-auto max-w-xs md:max-w-sm mx-auto rounded-lg shadow-md"
        />
      </div>

      {/* Right - Payment Form */}
      <div className="w-full md:w-1/2 p-6">
        <h2 className="text-lg font-bold mb-4">Pay with card</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
            required
          />

          {/* Card Details */}
          <div className="relative">
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="Card Number"
              className="w-full border p-3 pr-14 rounded-lg"
              required
            />
            <CiCreditCard1 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black w-10 h-10" />
          </div>

          <div className="flex gap-3">
            <input
              type="text"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
              placeholder="MM/YY"
              className="w-1/2 border p-3 rounded-lg"
              required
            />
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              placeholder="CVV"
              className="w-1/2 border p-3 rounded-lg"
              required
            />
          </div>

          {/* Cardholder Name */}
          <input
            type="text"
            name="cardholderName"
            value={formData.cardholderName}
            onChange={handleChange}
            placeholder="Cardholder Name"
            className="w-full border p-3 rounded-lg"
            required
          />

          {/* Country Selection */}
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option value="Pakistan">Pakistan</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="India">India</option>
          </select>

          {/* Save Info Checkbox */}
          <label className="flex items-center">
            <input
              type="checkbox"
              name="saveInfo"
              checked={formData.saveInfo}
              onChange={handleChange}
              className="mr-2"
            />
            Securely save my information for 1-click checkout
          </label>

          {/* Pay Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Pay
          </button>

          <p className="text-center text-gray-500 text-sm mt-2">
            Powered by <span className="font-bold">Stripe</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CoursePayment;
