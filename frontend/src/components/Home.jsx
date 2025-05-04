import React from 'react';
import './Home.css';
import { useNavigate} from 'react-router-dom';
import { useAuth } from './Auth';

export default function Home() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const handleSymptom = () => {
    navigate('/symptom');
  };
  return (
    <div className="home-page-wrapper">
      <div className="home-page">
        <div className="image-container">
          <img src="src/assets/img1.jpg" alt="Health" className="health-image" />
        </div>
      </div> 
    </div>
  );
}
