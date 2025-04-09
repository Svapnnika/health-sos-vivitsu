import React from 'react';
import './SendSOSButton.css';
const SendSOSButton = ({ username, disease, probability }) => {
  const handleSendSOS = async () => {
    try {
      const queryParams = new URLSearchParams({
        username,
        disease,
        probability
      });

      const response = await fetch(`http://localhost:8080/api/sos/send?${queryParams}`, {
        method: 'POST'
      });

      if (response.ok) {
        alert("🚨 SOS sent to emergency contacts!");
      } else {
        alert("❌ Failed to send SOS. Please try again.");
      }
    } catch (error) {
      console.error("Error sending SOS:", error);
      alert("❌ Error occurred while sending SOS.");
    }
  };

  return (
    <button onClick={handleSendSOS} className="sos-button">
      Send SOS
    </button>
  );
};

export default SendSOSButton;
