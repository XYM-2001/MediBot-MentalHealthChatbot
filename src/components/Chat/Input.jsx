// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

// function Input({ onSend }) {
//   const [text, setText] = useState('');

//   const handleChange = (e) => {
//     setText(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (text.trim()) {
//       onSend(text);
//       setText('');
//     }
//   };

//   return (
//     <div className="input">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={text}
//           onChange={handleChange}
//           placeholder="Type a message..."
//         />
//         <button type="submit">
//           <FontAwesomeIcon icon={faPaperPlane} />
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Input;


import React, { useState } from 'react';

const Input = ({ onSend }) => {
  const [inputText, setInputText] = useState('');

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      onSend(inputText); // Call the onSend function passed as prop
      setInputText(''); // Clear input after sending
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="Type your message..."
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default Input;
