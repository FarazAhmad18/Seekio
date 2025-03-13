import React from "react";

export const Button = ({ children, onClick, variant = "primary", className = "", ...props }) => {
  const baseStyles = "px-4 py-2 text-sm rounded-xl font-semibold transition w-full sm:w-auto";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    destructive: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};