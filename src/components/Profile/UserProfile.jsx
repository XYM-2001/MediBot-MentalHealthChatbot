// UserProfile.jsx

import React, { useState } from "react";
import "/src/styles/UserProfile.css";
function UserProfile({ onAvatarSelect }) {
  const [avatar, setAvatar] = useState(null); // State to store selected/uploaded avatar

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result); // Store avatar as base64 URL
        onAvatarSelect(reader.result); // Pass avatar URL to parent component
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="user-profile">
      <label htmlFor="avatar-input" className="avatar-label">
        {avatar ? (
          <img src={avatar} alt="Selected Avatar" className="avatar-preview" />
        ) : (
          <div className="avatar-placeholder">
            <span>Select an Avatar</span>
          </div>
        )}
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={handleAvatarChange}
        style={{ display: "none" }}
        id="avatar-input"
      />
    </div>
  );
}

export default UserProfile;
