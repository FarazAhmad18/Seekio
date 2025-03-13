import React from "react";
import { Card, CardContent } from "../components/Card";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

const Cart = () => {
    const cartItems = [
      {
        title: "Product Management Basics - Course",
        price: 3200,
        rating: 4.5,
        students: "1.5k",
        modules: 5,
        image: "https://via.placeholder.com/60",
      },
      {
        title: "Android Development with Kotlin",
        price: 4800,
        rating: 4.7,
        students: "2.1k",
        modules: 8,
        image: "https://via.placeholder.com/60",
      },
      {
        title: "Time Management Basics - Course",
        price: 1500,
        rating: 4.3,
        students: "800+",
        modules: 3,
        image: "https://via.placeholder.com/60",
      },
    ];
  
    const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    const discount = 2500;
    const total = subtotal - discount;
  
    return (
      <div className="pt-20 p-4 sm:p-6 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Shopping Cart</h2>
        <p className="mb-4 sm:mb-6 text-gray-600">{cartItems.length} courses in your cart</p>
  
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item, idx) => (
              <Card key={idx} className="flex flex-col sm:flex-row sm:items-center p-4 gap-4">
                <img src={item.image} alt={item.title} className="w-16 h-16 rounded-md mx-auto sm:mx-0" />
                <div className="flex-grow">
                  <h4 className="font-semibold text-base sm:text-lg">{item.title}</h4>
                  <div className="text-sm text-gray-500">
                    ⭐ {item.rating} | {item.students} students | {item.modules} modules
                  </div>
                </div>
                <div className="flex flex-col items-start sm:items-end">
                  <p className="font-semibold text-red-500">PKR {item.price}</p>
                  <Button variant="destructive" className="mt-2 text-xs sm:text-sm">Remove</Button>
                </div>
              </Card>
            ))}
          </div>
  
          <div className="bg-white border rounded-xl p-4 shadow-md h-fit">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Coupon Code</h3>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mb-4">
              <Input placeholder="Enter coupon" className="flex-grow" />
              <Button>Apply</Button>
            </div>
  
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>PKR {subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount:</span>
                <span>- PKR {discount}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span>PKR {total}</span>
              </div>
            </div>
  
            <Button className="mt-4">Check out</Button>
          </div>
        </div>
  
        <div className="mt-10 sm:mt-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">You might also like</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {["Organizational Resource Management", "Market Research and Insights", "UX/UI Design for Product Managers"].map((title, index) => (
              <Card key={index} className="p-4 text-center">
                <div className="h-32 bg-gray-100 rounded mb-3"></div>
                <CardContent>
                  <h4 className="font-semibold text-base sm:text-lg mb-1">{title}</h4>
                  <p className="text-red-500 font-medium mb-2">PKR {3500 + index * 350}</p>
                  <Button variant="outline">Enroll Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default Cart;
