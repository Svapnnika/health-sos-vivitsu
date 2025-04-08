import React from 'react'
import './Home.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const handleSymptom = () => {
    navigate('/symptom');
  }
  return (
    <div className="home-page-wrapper">
      <div className="home-page">
        <div className="image-container">
          <img src="src/assets/img1.jpg" alt="Health" className="health-image" />
          <h2 className="overlay-heading">HealthSOS</h2>
          <p className="overlay-text">Your smart health companion for quick symptom checks, remedies, and nearby hospital suggestions.</p>
          <button className="login-button" onClick={() => navigate('/login')}>Login</button>
        </div>
      </div>
    </div>
  )
}