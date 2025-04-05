import React, { useState, useEffect } from 'react';
import './Symptom.css'; 
import { IoLocationSharp } from "react-icons/io5";
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
      <p>Chat with the bot to know more about your symptoms...</p>
      <p><IoLocationSharp size={20}/>Location</p>
      <button className="chatbot-button" onClick={toggleChatbot}>
        Iam Here!
      </button>
      {isChatbotOpen && (
        <div className="chatbot-modal">
          <div className="chatbot-content">
            <button className="close-button" onClick={toggleChatbot}>Go back!</button>
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/ejEps3Xmii6fTOJE1PKDy"
              width="100%"
              height="400px"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
