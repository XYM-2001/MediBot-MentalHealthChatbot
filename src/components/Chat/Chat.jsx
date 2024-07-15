// import React, { useState, useEffect } from "react";
// import BotMessage from "./BotMessage";
// import UserMessage from "./UserMessage";
// import Messages from "./Messages";
// import Input from "./Input";
// import API from "./ChatbotAPI";
// import UserProfile from "../UserProfile/UserProfile";
// import "/src/styles/Chat.css";

// function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [userAvatar, setUserAvatar] = useState(null);

//   useEffect(() => {
//     async function loadWelcomeMessage() {
//       setMessages([
//         <BotMessage
//           key="0"
//           fetchMessage={async () => await API.GetChatbotResponse("hi")}
//         />
//       ]);
//     }
//     loadWelcomeMessage();
//   }, []);

//   const send = async (text) => {
//     const newMessages = messages.concat(
//       <UserMessage key={messages.length + 1} text={text} avatar={userAvatar} />,
//       <BotMessage
//         key={messages.length + 2}
//         fetchMessage={async () => await API.GetChatbotResponse(text)}
//       />
//     );
//     setMessages(newMessages);
//   };

//   return (
//     <div className="chatbot">
//     <Messages messages={messages} />
//     <div className="input-with-avatar">
//       <UserProfile onAvatarSelect={setUserAvatar} />
//       <Input onSend={send} />
//     </div>
//   </div>
//   );
// }

// export default Chat;

// Chat.jsx

// import React, { useState, useEffect } from "react";
// import BotMessage from "./BotMessage";
// import UserMessage from "./UserMessage";
// import Messages from "./Messages";
// import Input from "./Input";
// import API from "./ChatbotAPI";
// import "/src/styles/Chat.css";
// function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [userAvatar, setUserAvatar] = useState(null); // State to store user avatar URL

//   useEffect(() => {
//     async function loadWelcomeMessage() {
//       setMessages([
//         <BotMessage
//           key="0"
//           fetchMessage={async () => await API.GetChatbotResponse("hi")}
//         />
//       ]);
//     }
//     loadWelcomeMessage();
//   }, []);

//   const send = async (text) => {
//     const newMessages = messages.concat(
//       <UserMessage key={messages.length + 1} text={text} avatar={userAvatar} />,
//       <BotMessage
//         key={messages.length + 2}
//         fetchMessage={async () => await API.GetChatbotResponse(text)}
//       />
//     );
//     setMessages(newMessages);
//   };

//   const handleAvatarSelect = (avatarUrl) => {
//     setUserAvatar(avatarUrl); // Set avatar URL in Chat component state
//   };

//   return (
//     <div className="chatbot">
//       <Messages messages={messages} />
//       <Input onSend={send} />
//     </div>
//   );
// }

// export default Chat;

import React from "react";
import "/src/styles/Chat.css"; // Import your custom CSS if needed

function Chat() {
  return (
    <iframe
      title="Dialogflow Messenger"
      src="/src/components/Chat/dialogflow-messenger.html"
      style={{
        border: "none",
        position: "fixed",
        bottom: "0",
        right: "0",
        width: "100%",
        height: "100%", // Adjust the height as needed
        zIndex: "999"
      }}
    ></iframe>
  );
}

export default Chat;



