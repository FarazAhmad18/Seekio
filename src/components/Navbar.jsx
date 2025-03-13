import { useState } from "react";
import { CiBellOn, CiShoppingCart } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/logo.png'
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white border-b shadow-sm w-full fixed top-0 left-0 z-50 py-2">
        <div className="w-full px-2 lg:px-6 flex justify-between items-center h-17">
          {/* Logo */}
          <div className="flex items-center text-xl">
            <img src={logo} alt="Seekio Logo" className="h-10" />
            eekio
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10 text-gray-800 text-lg">
            <li className="hover:text-gray-500 cursor-pointer">Home</li>
            <li className="hover:text-gray-500 cursor-pointer">About</li>
            <li className="hover:text-gray-500 cursor-pointer">Explore</li>
            <li className="cursor-pointer">FAQ</li>
          </ul>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <CiBellOn className="text-gray-700 text-3xl cursor-pointer" />
            <CiShoppingCart className="text-gray-700 text-3xl cursor-pointer" />
            <div className="w-10 h-10 bg-indigo-900 text-white flex items-center justify-center rounded-full text-lg">
              N
            </div>
            {/* Mobile Menu Toggle */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden focus:outline-none">
              {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md py-6 px-8">
            <ul className="space-y-6 text-gray-800 text-lg text-center">
              <li className="hover:text-gray-500 cursor-pointer">Home</li>
              <li className="hover:text-gray-500 cursor-pointer">About</li>
              <li className="hover:text-gray-500 cursor-pointer">Explore</li>
              <li className="cursor-pointer">FAQ</li>
            </ul>
          </div>
        )}
      </nav>
      
      {/* Add margin to prevent content from being hidden */}
      {/* <div className=""></div> */}
    </>
  );
}