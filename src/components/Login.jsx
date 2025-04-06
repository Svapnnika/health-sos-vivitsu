import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <div className="login-page">
      <h1>Login Page</h1>
      <div className="image-and-form">
        <img src="src/assets/login.webp" alt="Login" className="login-image" />
        <form className='form'>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Submit</button>
          <p>
            <Link to="../register" style={{color:'rgb(219, 196, 196)', textDecoration: 'underline', fontSize:'small'}}>New User? Register Here!</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
