import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute top-0 w-full flex justify-between items-center p-4 z-50">
      <button
        className="bg-gray-800 text-white px-4 py-3 rounded-full focus:outline-none"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <i className="bx bx-x text-3xl"></i>
        ) : (
          <i className="bx bx-menu text-3xl"></i>
        )}
      </button>
      {isOpen && (
        <div className="absolute top-16 left-4 bg-gray-900 p-4 rounded-lg shadow-lg">
          <a
            href="#home"
            className="block text-white py-2 hover:bg-color-Atlantis items-center"
          >
            <i className="bx bx-home mr-2"></i>
            <span className="text-yellow-500">HOME</span>
          </a>
          <a
            href="#about"
            className="block text-white py-5  hover:bg-color-Atlantis items-center"
          >
            <i className="bx bx-user mr-2"></i>
            <span>ABOUT</span>
          </a>
          <a
            href="#portfolio"
            className="block text-white py-5  hover:text-color-Atlantis items-center"
          >
            <i className="bx bx-briefcase mr-2"></i>
            <span>PORTFOLIO</span>
          </a>
          <a
            href="#contact"
            className="block text-white py-5  hover:text-color-Atlantis items-center"
          >
            <i className="bx bx-envelope mr-2"></i>
            <span>CONTACT</span>
          </a>
          <a href="#blog" className="block text-white py-2 items-center">
            <i className="bx bx-chat mr-2"></i>
            <span>BLOG</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
