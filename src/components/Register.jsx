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
          <i className="fas fa-envelope"></i>
          <label htmlFor="email">Email: </label>
          <input type='text' placeholder='Enter email' />
        </div>
        
        <div className="form-group">
          <i className="fas fa-phone"></i>
          <label htmlFor="contact">Contact: </label>
          <input type='number' placeholder='Enter number' />
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
          <i className="fas fa-calendar-alt"></i>
          <label htmlFor="dob">Date of Birth: </label>
          <input type='date' />
        </div>
        
        <div className="form-group gender-group">
          <label>Gender: </label>
          <div className="gender-options">
            <label>
              <input type="radio" name="gender" value="Female" required /> Female
            </label>
            <label>
              <input type="radio" name="gender" value="Male" required /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="Custom" required /> Other
            </label>
            <div>
        </div>
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
