import React from "react";

function UserMessage({ text }) {
  return (
    <div className="user-message-container">
      <div className="user-message">{text}</div>
    </div>
  );
}

export default UserMessage;
