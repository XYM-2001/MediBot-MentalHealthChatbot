import React, { useState, useEffect } from "react";

function BotMessage({ fetchMessage }) {
  const [message, setMessage] = useState("...");

  useEffect(() => {
    async function getMessage() {
      const response = await fetchMessage();
      setMessage(response);
    }
    getMessage();
  }, [fetchMessage]);

  return (
    <div className="bot-message-container">
      <div className="bot-message">{message}</div>
    </div>
  );
}

export default BotMessage;
