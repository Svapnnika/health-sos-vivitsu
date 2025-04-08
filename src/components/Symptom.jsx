import React, { useState, useEffect } from 'react';
import './Symptom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const symptomsList = [
  { id: "s_21", label: "Abdominal pain" },
  { id: "s_10", label: "Anxiety" },
  { id: "s_1193", label: "Back pain" },
  { id: "s_98", label: "Chest pain" },
  { id: "s_188", label: "Cough" },
  { id: "s_109", label: "Diarrhea" },
  { id: "s_104", label: "Dizziness" },
  { id: "s_16", label: "Fatigue" },
  { id: "s_140", label: "Fever" },
  { id: "s_23", label: "Headache" },
  // Add more as needed
];

export default function Symptom() {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [currentSymptom, setCurrentSymptom] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  
  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  const handleSymptomAdd = () => {
    if (currentSymptom && !selectedSymptoms.includes(currentSymptom)) {
      setSelectedSymptoms([...selectedSymptoms, currentSymptom]);
      setCurrentSymptom("");
    }
  };

  const handleRemoveSymptom = (symptomId) => {
    setSelectedSymptoms(selectedSymptoms.filter(id => id !== symptomId));
  };

  const handleSubmit = async () => {
    const evidence = selectedSymptoms.map((id) => ({
      id: id,
      choice_id: "present"
    }));

    const payload = {
      sex: gender,
      age: { value: parseInt(age) },
      evidence: evidence
    };

    try {
      const response = await fetch("http://localhost:8080/api/diagnose", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      const condition = data.conditions?.[0];

      if (condition) {
        setDiagnosis(
          `You may have ${condition.name} with a probability of ${(condition.probability * 100).toFixed(2)}%.`
        );
      } else {
        setDiagnosis("No diagnosis found.");
      }
    } catch (error) {
      console.error("Error during diagnosis:", error);
      setDiagnosis("An error occurred while processing your request.");
    }
  };

  return (
    <div className="symptom-page">
      <h1>Symptom Checker</h1>
      
      <div className="symptom-form">
        <div className="form-group">
          <label>
            Gender:
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </div>
        
        <div className="form-group">
          <label>
            Age:
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          </label>
        </div>
        
        <div className="symptom-dropdown">
          <p>Select Symptoms:</p>
          <div className="dropdown-container">
            <select 
              value={currentSymptom} 
              onChange={(e) => setCurrentSymptom(e.target.value)}
              className="symptom-select"
            >
              <option value="">-- Select a symptom --</option>
              {symptomsList.map((symptom) => (
                <option key={symptom.id} value={symptom.id}>
                  {symptom.label}
                </option>
              ))}
            </select>
            <button 
              type="button" 
              onClick={handleSymptomAdd} 
              className="add-symptom-btn"
              disabled={!currentSymptom}
            >
              Add Symptom
            </button>
          </div>
          
          {selectedSymptoms.length > 0 && (
            <div className="selected-symptoms">
              <h3>Selected Symptoms:</h3>
              <ul className="symptoms-list">
                {selectedSymptoms.map((symptomId) => {
                  const symptom = symptomsList.find(s => s.id === symptomId);
                  return (
                    <li key={symptomId} className="symptom-item">
                      {symptom?.label}
                      <button 
                        type="button" 
                        onClick={() => handleRemoveSymptom(symptomId)}
                        className="remove-symptom-btn"
                      >
                        ×
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        
        <button className="submit-button" onClick={handleSubmit}>Check Symptoms</button>
        
        {diagnosis && (
          <div className="diagnosis-result">
            <h3>Diagnosis Result:</h3>
            <p>{diagnosis}</p>
          </div>
        )}
        
        <div className="sos-container">
          <button className="sos-button" onClick={() => window.location.href='tel:108'}>
            <FontAwesomeIcon icon={faExclamationTriangle} className="sos-icon" />
            <FontAwesomeIcon icon={faPhone} className="phone-icon" />
            EMERGENCY SOS
          </button>
          <p className="sos-info">Call emergency services immediately if you're experiencing severe symptoms</p>
        </div>
      </div>
      
      {/* Chatbot in bottom right corner */}
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
        <div className="chatbot-content">
          <button className="close-button" onClick={toggleChatbot}>Close</button>
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/ejEps3Xmii6fTOJE1PKDy"
            width="450px"
            height="600px"
            frameBorder="0"
          ></iframe>
        </div>
      )}
    </div>
  );
}