// UserMessage.jsx

import React from "react";

function UserMessage({ text, avatar }) {
  return (
    <div className="message-container user-message-container">
      {avatar && <img src={avatar} alt="Avatar" className="avatar-small" />}
      <div className="user-message">{text}</div>
    </div>
  );
}

export default UserMessage;
