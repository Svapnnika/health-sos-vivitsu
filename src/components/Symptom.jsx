import React, { useState, useEffect } from 'react';
import './Symptom.css'; 
export default function Symptom() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://example.com/your-script.js'; 
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div className="symptom-page">
      <h1>Symptom Checker</h1>
      {!isChatbotOpen ? (
        <div className="chatbot-prompt">
          <img 
            src="/src/assets/chatbot.gif" 
            alt="Chatbot Assistant" 
            onClick={toggleChatbot}
            className="chatbot-gif" 
            style={{ cursor: 'pointer' }}
          />
        </div>
      ) : (
        <div className='chatbot-content'>
          <button className='close-button' onClick={toggleChatbot}>Go Back!</button>
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/ejEps3Xmii6fTOJE1PKDy"
            width="700px"
            height="400px"
            frameBorder="0"
          ></iframe>
        </div>
      )}
    </div>
  );
}