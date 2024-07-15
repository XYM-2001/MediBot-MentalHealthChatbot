import React from 'react';
import '/src/styles/styles.css';


const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2024 Your Chatbot. All rights reserved.</p>
        <nav>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
