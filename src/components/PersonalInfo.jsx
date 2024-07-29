import React from 'react';

const PersonalInfo = () => {
  const personalInfo = [
    { label: "First Name", value: "Aimee Marie" },
    { label: "Last Name", value: "Ishimwe" },
    { label: "Education", value: "Bsc Computer Science" },
    { label: "Nationality", value: "Rwandan" },
    { label: "Address", value: "NR3 Gatsata" },
    { label: "Phone", value: "+250781490784" },
  ];
  
  const socialIcons = [
    { icon: "bxl-linkedin", href: "www.linkedin.com/in/aimeemarieishimwe-30612a146" },
    { icon: "bxl-github", href: "#" },
    { icon: "bxl-behance", href: "#" },
  ];
  
  return (
    <div className="flex flex-col gap-6">
      <div className="mb-4">
        <h3 className="text-2xl sm:text-3xl font-bold text-color-Emperor mb-3 text-center md:text-left">
          Unmatched Service Quality for Over 2 Years
        </h3>
        <p className="text-sm sm:text-base text-color-Emperor leading-relaxed text-center md:text-left">
          I am passionate about crafting intuitive platform that seamlessly blend cutting-edge technology with user-centric design. I always look forward to transforming ideas into sleek, functional interfaces that not only meet but exceed client expectations.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {personalInfo.map((item, index) => (
          <p key={index} className="text-sm sm:text-base text-color-Emperor">
            <strong>{item.label}:</strong> {item.value}
          </p>
        ))}
      </div>
      <div className="text-color-Atlantis">
        <div className="flex flex-row justify-start items-center space-x-4">
          {socialIcons.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-transparent border-2 border-color-Atlantis text-color-Atlantis transition-all duration-300 ease-in-out hover:bg-color-Atlantis group"
            >
              <i className={`bx ${item.icon} text-lg sm:text-xl group-hover:text-white transition-colors duration-300`}></i>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-2">
        <button className="bg-color-Atlantis text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center text-sm sm:text-base transition duration-300 ease-in-out transform hover:bg-color-Emperor hover:scale-105 hover:shadow-lg">
          <i className="bx bxs-download mr-2"></i> DOWNLOAD MY CV
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;