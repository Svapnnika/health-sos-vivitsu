import React from 'react';
import './Login.css';

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
        </form>
      </div>
    </div>
  );
}
