import React, { useState } from 'react';
import './Login.css';
import { Link,useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { username, password };
    login(userData);
    navigate('/'); 
  };
  return (
    <div className="login-page">
      <h1>Login Page</h1>
      <div className="image-and-form">
        <img src="src/assets/login.webp" alt="Login" className="login-image" />
        <form className='form' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username"
            value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" 
            value={password} onChange={(e) => setPassword(e.target.value)} 
            required />
          </div>
          <button type="submit">Submit</button>
          <p>
            <Link to="../register" style={{color:'rgb(219, 196, 196)', textDecoration: 'underline', fontSize:'small'}}>
            New User? Register Here!</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
