import React from 'react';
import { Link } from 'react-router-dom';
import '/src/styles/UserHome.css'; // Ensure this path matches your project structure

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Your Mental Health Dashboard</h1>
        <p>Here you can track your mental well-being, access resources, and more.</p>
        <div className="button-container">
          <Link to="/user/profile" className="btn btn-primary">View Profile</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
