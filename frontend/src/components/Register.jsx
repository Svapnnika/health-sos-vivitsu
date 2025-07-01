import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; 

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    contact: '',
    emergencyContact1Name: '',
    emergencyContact1Phone: '',
    emergencyContact2Name: '',
    emergencyContact2Phone: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.username || !formData.password || !formData.contact) {
      setError('Username, password and contact are required');
      return false;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    
    if (formData.contact.length < 10) {
      setError('Please enter a valid contact number');
      return false;
    }
    
    // At least one emergency contact is required
    if (!formData.emergencyContact1Name || !formData.emergencyContact1Phone) {
      setError('At least one emergency contact is required');
      return false;
    }
    
    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    setError('');
    
    // Create user data object to send to backend
    const userData = {
      username: formData.username,
      password: formData.password,
      contact: formData.contact,
      emergencyContact1Name: formData.emergencyContact1Name,
      emergencyContact1Phone: formData.emergencyContact1Phone,
      emergencyContact2Name: formData.emergencyContact2Name,
      emergencyContact2Phone: formData.emergencyContact2Phone
    };
    
    try {
      const response = await fetch("http://localhost:8080/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });
      
      if (!response.ok) {
        throw new Error(`Registration failed with status: ${response.status}`);
      }
      
      const result = await response.json();
      console.log("User registered:", result);
      
      setSuccess(true);
      setLoading(false);
      
      // Redirect to login page after successful registration
      setTimeout(() => {
        navigate('/login');
      }, 2000);
      
    } catch (error) {
      console.error("Registration failed:", error);
      setError('Registration failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className='registerpage'>
      <h1>Registration Page</h1>
      
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">Registration successful! Redirecting to login...</div>}
      
      {/* <div className="register-button-container">
        <button 
          type="button" 
          className="register-submit-btn"
          onClick={() => document.getElementById('registerForm').scrollIntoView({ behavior: 'smooth' })}
        >
          Register Now
        </button>
      </div> */}
      
      <form id="registerForm" onSubmit={handleRegister}>
        
        <div className="form-group">
          <i className="fas fa-user"></i>
          <label htmlFor="username">Username: </label>
          <input 
            type='text' 
            name="username"
            id="username"
            placeholder='Enter username' 
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <i className="fas fa-lock"></i>
          <label htmlFor="password">Create Password: </label>
          <input 
            type='password' 
            name="password"
            id="password"
            placeholder='Create password' 
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <i className="fas fa-lock"></i>
          <label htmlFor="confirmPassword">Confirm Password: </label>
          <input 
            type='password' 
            name="confirmPassword"
            id="confirmPassword"
            placeholder='Confirm password' 
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <i className="fas fa-phone"></i>
          <label htmlFor="contact">Contact: </label>
          <input 
            type='number' 
            name="contact"
            id="contact"
            placeholder='Enter number' 
            value={formData.contact}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <i className="fas fa-user"></i>
          <label htmlFor="emergencyContact1Name">Person 1: </label>
          <input 
            type='text' 
            name="emergencyContact1Name"
            id="emergencyContact1Name"
            placeholder='Enter name' 
            value={formData.emergencyContact1Name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <i className="fas fa-phone"></i>
          <label htmlFor="emergencyContact1Phone">Contact 1: </label>
          <input 
            type='number' 
            name="emergencyContact1Phone"
            id="emergencyContact1Phone"
            placeholder='Enter Emergency number 1' 
            value={formData.emergencyContact1Phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <i className="fas fa-user"></i>
          <label htmlFor="emergencyContact2Name">Person 2: </label>
          <input 
            type='text' 
            name="emergencyContact2Name"
            id="emergencyContact2Name"
            placeholder='Enter name' 
            value={formData.emergencyContact2Name}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <i className="fas fa-phone"></i>
          <label htmlFor="emergencyContact2Phone">Contact 2: </label>
          <input 
            type='number' 
            name="emergencyContact2Phone"
            id="emergencyContact2Phone"
            placeholder='Enter Emergency number 2' 
            value={formData.emergencyContact2Phone}
            onChange={handleChange}
          />
        </div>

        <div className="register-button-container">
          <button 
            type="submit" 
            className={`register-submit-btn ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="loading-spinner"></span>
                <span>Registering...</span>
              </>
            ) : 'Register'}
          </button>
        </div>
      </form>
    </div>
  );
}
