import React from 'react';
import './register.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; 

export default function Register() {
  return (
    <div className='registerpage'>
      <h1>Registration Page</h1>
      <form>
        <div className="form-group">
          <i className="fas fa-user"></i>
          <label htmlFor="username">Username: </label>
          <input type='text' placeholder='Enter username' />
        </div>
        
        <div className="form-group">
          <i className="fas fa-lock"></i>
          <label htmlFor="password">Create Password: </label>
          <input type='password' placeholder='Create password' />
        </div>
        
        <div className="form-group">
          <i className="fas fa-lock"></i>
          <label htmlFor="confirmPassword">Confirm Password: </label>
          <input type='password' placeholder='Confirm password' />
        </div>
        
        <div className="form-group">
          <i className="fas fa-phone"></i>
          <label htmlFor="contact">Contact: </label>
          <input type='number' placeholder='Enter number' />
        </div>

        <div className="form-group">
          <i className="fas fa-user"></i>
          <label htmlFor="Person 1">Person 1: </label>
          <input type='text' placeholder='Enter name' />
        </div>

        <div className="form-group">
          <i className="fas fa-phone"></i>
          <label htmlFor="contact1">Contact 1: </label>
          <input type='number' placeholder='Enter Emergency number 1' />
        </div>

        <div className="form-group">
          <i className="fas fa-user"></i>
          <label htmlFor="Person 2">Person 2: </label>
          <input type='text' placeholder='Enter name' />
        </div>
        
        <div className="form-group">
          <i className="fas fa-phone"></i>
          <label htmlFor="contact2">Contact 2: </label>
          <input type='number' placeholder='Enter Emergency number 2' />
        </div>

        <button type="button" onClick={() => window.location.href='/login'}>Register</button>
      </form>
    </div>
  );
}
