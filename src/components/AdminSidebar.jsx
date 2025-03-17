import React from 'react'
import { FaUserGraduate, FaChalkboardTeacher, FaBook, FaCertificate, FaMoneyBill, FaSignOutAlt } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
const AdminSidebar = () => {
  return (
          <div className='fixed top-0 left-0 w-[22%] h-screen bg-[#1e1b31] overflow-y-auto flex flex-col justify-between'>
            <div className='pt-8 text-center space-y-7 px-2'>
              {/* Profile Section */}
              <div className='space-y-6 border-b-2 pb-4'>
                <span className='border rounded-full bg-blue-400 px-3 py-1 text-3xl text-white font-semibold'>A</span>
                <p className='text-white text-xl'>admin@gmail.com</p>
              </div>
    
              {/* Navigation Menu */}
              <ul className='text-white text-lg space-y-2'>
                <li className='hover:bg-adminHover py-2 flex items-center gap-2 px-4 cursor-pointer'><BsBank /> Dashboard</li>
                <li className='hover:bg-adminHover py-2 flex items-center gap-2 px-4 cursor-pointer'><FaUserGraduate /> Student</li>
                <li className='hover:bg-adminHover py-2 flex items-center gap-2 px-4 cursor-pointer'><FaBook /> Enrollments</li>
                <li className='hover:bg-adminHover py-2 flex items-center gap-2 px-4 cursor-pointer'><FaChalkboardTeacher /> Teacher</li>
                <li className='hover:bg-adminHover py-2 flex items-center gap-2 px-4 cursor-pointer'><FaBook /> Courses</li>
                <li className='hover:bg-adminHover py-2 flex items-center gap-2 px-4 cursor-pointer'><FaCertificate /> Certificate</li>
                <li className='hover:bg-adminHover py-2 flex items-center gap-2 px-4 cursor-pointer'><FaMoneyBill /> Revenues</li>
              </ul>
            </div>
    
            {/* Logout Section */}
            <div className='text-white text-lg hover:bg-adminHover py-2 px-4 flex items-center gap-2 cursor-pointer'>
              <FaSignOutAlt /> Logout
            </div>
          </div>
         
  )
}

export default AdminSidebar
