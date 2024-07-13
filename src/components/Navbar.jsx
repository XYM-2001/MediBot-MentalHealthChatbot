import React from "react";
import { FaHome, FaBook, FaRobot, FaPenNib, FaUser } from "react-icons/fa";
import "/src/styles/Navbar.css"; // Import CSS file

const Navbar = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-gray-900 border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-4xl grid-cols-5 mx-auto font-medium">
        <button
          type="button"
          className="nav-button"
        >
          <FaHome className="icon2" />
          <span className="text">Home</span>
        </button>
        <button
          type="button"
          className="nav-button"
        >
          <FaBook className="icon2" />
          <span className="text">Study</span>
        </button>
        <button
          type="button"
          className="nav-button"
        >
          <FaRobot className="icon2" />
          <span className="text">ChatBot</span>
        </button>
        <button
          type="button"
          className="nav-button"
        >
          <FaPenNib className="icon2" />
          <span className="text">Journal</span>
        </button>
        <button
          type="button"
          className="nav-button"
        >
          <FaUser className="icon2" />
          <span className="text">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
