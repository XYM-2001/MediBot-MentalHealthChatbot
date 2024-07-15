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

// import React from "react";
// import "/src/styles/Chat.css"; // Import your custom CSS if needed

// function Chat() {
//   return (
//     <iframe
//       title="Dialogflow Messenger"
//       src="/src/components/Chat/dialogflow-messenger.html"
//       style={{
//         border: "none",
//         position: "fixed",
//         bottom: "0",
//         right: "0",
//         width: "100%",
//         height: "100%", // Adjust the height as needed
//         zIndex: "999"
//       }}
//     ></iframe>
//   );
// }

// export default Chat;
// 
import React from 'react';

const Chat = () => {
  return (
    <div>
      <iframe
        srcDoc={`
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Dialogflow Messenger Integration</title>
            <link rel="stylesheet" href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css">
            <style>
              body, html {
                height: 100%;
                width:100%;
                margin: 0;
                padding: 0;
              }
              df-messenger {
                z-index: 999;
                position: fixed;
                --df-messenger-font-color: #000;
                --df-messenger-font-family: Google Sans;
                --df-messenger-chat-background: #f3f6fc;
                --df-messenger-message-user-background: #d3e3fd;
                --df-messenger-message-bot-background: #fff;
                bottom: 0;
                left: 700px;
                width: 80vw; /* Full width of the viewport */
                height: 10vh; /* Full height of the viewport */
              }
            </style>
          </head>
          <body>
            <df-messenger
              project-id="mentalhealthbot-429020"
              agent-id="7f1802ef-6217-48f8-9044-27b860d1fa3d"
              language-code="en"
              max-query-length="-1">
              <df-messenger-chat-bubble chat-title="mentalhelper"></df-messenger-chat-bubble>
            </df-messenger>
            <script src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"></script>
          </body>
          </html>
        `}
        title="Dialogflow Messenger"
        height="500vh" /* Set height to 80% of viewport height */
        width="1200vw"
        style={{ border: 'none', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}
      />
    </div>
  );
};

export default Chat;
