import React, { useState } from 'react';
import '/src/styles/Profile.css'; // Ensure this path matches your project structure

const UserProfile = () => {
  const [userPhoto, setUserPhoto] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUserPhoto(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>User Profile</h1>
      </div>

      <div className="profile-content">
        <div className="user-photo-section">
          <img src={userPhoto || 'water drop.jpg'} alt="User" className="user-photo" />
          <label htmlFor="file-upload" className="custom-file-upload">
            <input id="file-upload" type="file" accept="image/*" onChange={handleFileUpload} />
            Upload Photo
          </label>
        </div>

        <div className="user-details-section">
          <h2>User Details</h2>
          <div className="user-details">
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Email:</strong> john.doe@example.com</p>
            <p><strong>Location:</strong> City, Country</p>
            {/* Add more details as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
