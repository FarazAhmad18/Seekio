import React, { useState, useRef } from "react";
import { Download, Eye } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const certificates = [
  {
    id: 1,
    courseTitle: "Mastering Frontend Development",
    issuedDate: "March 10, 2025",
    certificateId: "CERT-23FE-1024",
    certificateType: "Completion",
    progress: 100,
  },
  {
    id: 2,
    courseTitle: "AI & Machine Learning Essentials",
    issuedDate: "February 20, 2025",
    certificateId: "CERT-AI-8847",
    certificateType: "Excellence",
    progress: 100,
  },
  {
    id: 3,
    courseTitle: "UI/UX Design Foundations",
    issuedDate: "January 15, 2025",
    certificateId: "CERT-UX-2301",
    certificateType: "Completion",
    progress: 100,
  },
];

const CertificatePage = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const certificateRef = useRef();

  // PDF Download Handler
  const handleDownloadPDF = async () => {
    const element = certificateRef.current;
    const canvas = await html2canvas(element);
    const imageData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("landscape", "pt", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imageData, "PNG", 0, 40, pdfWidth, pdfHeight - 50);
    pdf.save(`${selectedCert.courseTitle}-Certificate.pdf`);
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4 md:px-16">
      <h1 className="text-4xl font-bold text-center text-indigo-800 mb-3">🎓 My Certificates</h1>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Celebrate your success with downloadable, verifiable certificates. Proudly showcase your achievements.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-white border border-indigo-100 shadow-xl hover:shadow-indigo-200 rounded-xl p-6 transition-all duration-300 relative"
          >
            <div className="absolute top-4 right-4 bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold">
              {cert.certificateType}
            </div>

            <h2 className="text-lg font-bold text-indigo-700 mb-1">{cert.courseTitle}</h2>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Issued on:</span> {cert.issuedDate}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-medium">Certificate ID:</span> {cert.certificateId}
            </p>

            <div className="mt-3 mb-4">
              <div className="text-xs font-medium text-gray-500 mb-1">Completion</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${cert.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => setSelectedCert(cert)}
                className="flex items-center gap-2 text-indigo-600 hover:underline text-sm font-medium"
              >
                <Eye className="w-4 h-4" />
                View Certificate
              </button>
              <button
                onClick={() => {
                  setSelectedCert(cert);
                  setTimeout(handleDownloadPDF, 300); // trigger PDF generation after modal renders
                }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-md flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl shadow-lg max-w-3xl w-full p-8 relative animate-fade-in">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl"
            >
              ×
            </button>

            <div ref={certificateRef} className="bg-white border border-indigo-200 p-8 rounded-md text-center">
              <h3 className="text-2xl font-bold text-indigo-700 mb-2">
                {selectedCert.courseTitle}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {selectedCert.certificateType} Certificate
              </p>

              <div className="bg-indigo-100 border-2 border-dashed border-indigo-400 p-6 rounded-xl text-center">
                <h4 className="text-xl font-bold text-gray-700 mb-2">🏅 Seekio Certificate</h4>
                <p className="text-sm text-gray-600">
                  This is to certify that <span className="font-semibold text-indigo-700">You</span> have successfully completed the course:
                  <br />
                  <span className="font-semibold text-indigo-800">{selectedCert.courseTitle}</span>
                  <br />
                  on <span className="text-indigo-700 font-medium">{selectedCert.issuedDate}</span>.
                </p>

                <p className="mt-4 text-sm text-gray-500">
                  Certificate ID: {selectedCert.certificateId}
                </p>
              </div>
            </div>

            {/* Optionally add another Download Button here */}
            <div className="mt-6 text-center">
              <button
                onClick={handleDownloadPDF}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md font-medium"
              >
                Download as PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificatePage;








// import React, { useRef } from "react";
// import { useReactToPrint } from "react-to-print";

// const CertificatePage = ({ userName = "John Doe" }) => {
//   const certificateRef = useRef();

//   const handleDownload = useReactToPrint({
//     content: () => certificateRef.current,
//     documentTitle: `${userName}_Seekio_Certificate`,
//   });

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 md:px-16">
//       <div className="max-w-3xl mx-auto text-center mb-8">
//         <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-2">Course Completion Certificate</h1>
//         <p className="text-gray-600 text-lg">A proud moment of achievement, brought to you by Seekio LMS</p>
//       </div>

//       <div
//         ref={certificateRef}
//         className="bg-white border-[6px] border-indigo-700 rounded-xl shadow-lg max-w-3xl mx-auto p-10 text-center relative"
//       >
//         {/* Seekio Badge */}
//         <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 bg-indigo-700 text-white px-6 py-2 rounded-full shadow-md text-xl font-bold tracking-wide">
//           SEEKIO
//         </div>

//         {/* Certificate Content */}
//         <h2 className="text-2xl font-semibold text-gray-700 mt-10">Certificate of Completion</h2>
//         <p className="text-gray-600 text-base mt-4 mb-2">This is to certify that</p>
//         <h3 className="text-3xl font-bold text-indigo-800 mb-2">{userName}</h3>
//         <p className="text-gray-600 mb-6">has successfully completed the course with outstanding performance and dedication.</p>

//         {/* Decorative Divider */}
//         <div className="w-32 h-1 bg-indigo-700 mx-auto mb-6 rounded-full"></div>

//         {/* Footer Section */}
//         <div className="flex justify-between text-left mt-10 text-sm md:text-base">
//           <div>
//             <p className="font-semibold">Issued By</p>
//             <p className="text-gray-600">Seekio LMS Team</p>
//           </div>
//           <div>
//             <p className="font-semibold">Date</p>
//             <p className="text-gray-600">{new Date().toLocaleDateString()}</p>
//           </div>
//           <div>
//             <p className="font-semibold">Certificate ID</p>
//             <p className="text-gray-600">SEEK-{Date.now().toString().slice(-6)}</p>
//           </div>
//         </div>
//       </div>

//       {/* Download Button */}
//       <div className="text-center mt-10">
//         <button
//           onClick={handleDownload}
//           className="bg-indigo-700 text-white px-6 py-3 rounded-md hover:bg-indigo-800 font-semibold transition"
//         >
//           Download Certificate
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CertificatePage;


