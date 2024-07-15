import React from "react";
import { FaHome, FaBook, FaRobot, FaPenNib, FaUser } from "react-icons/fa";
import "/src/styles/Navbar.css"; // Import CSS file
import { Link } from "react-router-dom";
  
const Navbar = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-gray-900 border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-4xl grid-cols-5 mx-auto font-medium">
        <button
          type="button"
          className="nav-button"
        >
         <Link to="/user/home" className="nav-button">
          <FaHome className="icon2" />
          <span className="text">Home</span>
        </Link>
        </button>
        <button
          type="button"
          className="nav-button"
        >
           <Link to="/user/study" className="nav-button">
          <FaBook className="icon2" />
          <span className="text">Study</span>
        </Link>
        </button>
        <button
          type="button"
          className="nav-button"
        >
          <Link to="/chat" className="nav-button">
          <FaRobot className="icon2" />
          <span className="text">ChatBot</span>
        </Link>
        </button>
        <button
          type="button"
          className="nav-button"
        >
          <Link to="/user/journal" className="nav-button">
          <FaPenNib className="icon2" />
          <span className="text">Journal</span>
        </Link>
        </button>
        <button
          type="button"
          className="nav-button"
        >
          <Link to="/user/profile" className="nav-button">
          <FaUser className="icon2" />
          <span className="text">Profile</span>
        </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
