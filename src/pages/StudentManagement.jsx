import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
const StudentManagement = () => {
    const studentDetails=[
        {
            id:1,
            image:"A",
            name:"Ahsan",
            course:2,
            status:'Unenrolled',
            JoinedDate:'September,9 2024',
            action:'...'
        },
        {
            id:2,
            image:'B',
            name:"Ahsan",
            course:2,
            status:'Unenrolled',
            JoinedDate:'September,9 2024',
            action:'...'
          },
          {
            id:3,
            image:'C',
            name:"Ahsan",
            course:2,
            status:'Unenrolled',
            JoinedDate:'September,9 2024',
            action:'...'
          },
          {
            id:4,
            // image:'',
            name:"Ahsan",
            course:2,
            status:'Unenrolled',
            JoinedDate:'September,9 2024',
            action:'...'
          },
    ]
  return (
      <div className='flex'>
        <AdminSidebar/>
         {/* Main Content */}
         <div className='ml-[22%] w-[78%] p-6'>
        <table className=' space-x-3 border-2'>
            <thead>
                <tr className=' space-x-3'>
                    <th className='px-4 py-2'>Image</th>
                    <th className='px-4 py-2'>Name</th>
                    <th className='px-4 py-2'>Course</th>
                    <th className='px-4 py-2'>Date</th>
                    <th className='px-4 py-2'>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                  studentDetails.map((s)=>{
                    return (<tr>
                        <td className='px-4 py-2 border border-rounded'>{s.image }</td>
                        <td className='px-4 py-2'>{s.name}</td>
                        <td className='px-4 py-2'>{s.course}</td>
                        <td className='px-4 py-2'>{s.JoinedDate}</td>
                        <td className='px-4 py-2'>{s.status}</td>
                    </tr>)
                  })  
                }
            </tbody>
        </table>
          </div>
    </div>
  );
};

export default StudentManagement;

