const API = {
    GetChatbotResponse: async (message) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (message === "hi") resolve("Welcome to chatbot!");
          else resolve("echo : " + message);
        }, 2000);
      });
    },
  };
  
  export default API;
  