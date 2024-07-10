import React from 'react'

const landing = () => {
  return (
    <div>
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Ensures the container covers the entire viewport height
        paddingBottom: "100vh", // Ensures the container covers the entire viewport height
      }}
    
      <img
        src="/public/live-chatbot.gif"
        alt="Centered Image"
        style={{ maxWidth: "50%", height: "auto" }}
      />
    </div>
  )
}

export default landing
