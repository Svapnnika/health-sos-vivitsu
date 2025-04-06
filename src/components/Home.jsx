import React from 'react'
import './Home.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    const handleSymptom = () => {
        navigate('/symptom');
    }
  return (
    <div>
      <div className="home-page">
      <div className="left-side">
        <button className="login-button" onClick={handleSymptom}>Symptom Checker</button>
      </div>
      <div className="right-side">
        <img src="src/assets/img.webp" alt="Health" className="health-image" />
      </div>
    </div>
    </div>
  )
}
