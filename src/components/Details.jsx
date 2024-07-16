import React from "react";
import omg from '../assets/omg.png';

const Details = () => {
  const personalInfo = [
    { label: "First Name", value: "Aimee Marie" },
    { label: "Last Name", value: "Ishimwe" },
    { label: "Education", value: "Bsc in Computer Science" },
    { label: "Nationality", value: "Rwandan" },
    { label: "Experience", value: "7 years" },
    { label: "Address", value: "NR3 Gatsata" },
    { label: "Freelance", value: "Available" },
    { label: "Languages", value: "Kinyarwanda & English" },
    { label: "Phone", value: "+250781490784" },
    { label: "Email", value: "ishimweaime77@gmail.com" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-4 sm:p-6 md:p-10">
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-color-Emperor text-center">
        ABOUT <span className="text-color-Atlantis">ME</span>
      </h2>
      <p className="text-center uppercase text-xs sm:text-sm mb-4">
        I design and code beautiful things, and I love what I do
      </p>
      <hr className="w-full mb-8" />
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-12 lg:px-36">
        <div className="relative max-w-md w-full aspect-[3/4] mb-8 lg:mb-0">
          <div className="absolute top-[5%] left-[5%] border-8 w-[90%] h-[90%] border-color-Atlantis"></div>
          <div className="absolute top-0 left-0 w-[90%] h-[90%] overflow-hidden">
            <img
              src={omg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full py-2 lg:py-14 text-left justify-center">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 p-3">
            {personalInfo.map((item, index) => (
              <p key={index} className="text-sm sm:text-base text-color-Emperor">
                <strong>{item.label}:</strong> {item.value}
              </p>
            ))}
          </div>
          <div className="p-3 text-color-Atlantis">
            <div className="flex flex-row justify-start items-center space-x-4">
              <a href="#" className="flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-md transition-all duration-300 ease-in-out hover:bg-color-Atlantis group">
                <i className="bx bxl-linkedin text-2xl  group-hover:text-white transition-colors duration-300"></i>
              </a>
              <a href="#" className="flex items-center justify-center w-14 h-14  rounded-full bg-white shadow-md transition-all duration-300 ease-in-out hover:bg-color-Atlantis group">
                <i className="bx bxl-github text-2xl  group-hover:text-white transition-colors duration-300"></i>
              </a>
              <a href="#" className="flex items-center justify-center w-14 h-14  rounded-full bg-white shadow-md transition-all duration-300 ease-in-out hover:bg-color-Atlantis group">
                <i className="bx bxl-behance text-2xl  group-hover:text-white transition-colors duration-300"></i>
              </a>
            </div>
          </div>
          <div className="mt-4">
            <button className="bg-color-Atlantis text-white px-4 sm:px-6 py-2 rounded-full flex items-center text-sm sm:text-base">
              <i className="bx bxs-download mr-2"></i> DOWNLOAD MY CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;