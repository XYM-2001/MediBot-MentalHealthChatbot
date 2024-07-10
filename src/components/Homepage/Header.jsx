import React from 'react';
// import '/src/styles/styles.css';
import "/src/styles/Homepage.css";

const Header = () => {

    const handleLoginClick = () => {
        // Simulate navigation to the Signup component
        window.location.href = "/login"; // Redirects to the Signup page
      };

  return (
  
    <div className="video-container">
      {/* <!-- The HTML5 video element that will create the background video on the header -- */}
      {/* <video
        playsinline="playsinline"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source src="public/forest.mp4" type="video/mp4" />
      </video> */}
      <img className='image-bg' src='public/chat2.jpg' alt='chatbot' />
      <div className="text-overlay">
        <h1 className="overlay-text-field">
          <span>Your</span> <span>Mental</span> <span>Health</span>{" "}
          <span>Companion</span>
        </h1>
        <p className="text-white text-xl">
        Supporting you with mental health resources and guidance 24/7
        </p>
        <button className="signup-button" onClick={handleLoginClick}>Join Us</button>
      </div>
    </div>

  );
};

export default Header;
