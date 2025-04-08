import React from 'react';
import './Header.css';
import { LuBotMessageSquare } from "react-icons/lu";
import { BiUserCheck } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { MdOutlineLocalHospital } from "react-icons/md";
import { useAuth } from './Auth';
function Header() {
  const navigate = useNavigate();
  const { isLoggedIn, user, logout } = useAuth();
  const handleLogin = () => {
    navigate('/login');
  };
  const handleLogout = () => {
    logout(); 
    navigate('/');
  };
  return (
    <div className="header">
      <div className="logo">
        <a href="/">
          <div className="logo-container">
            <img src="./src/assets/hsptl logo.png"  className="logo-image" />
          </div>
        </a>
      </div>
      <div className="header-links">
        <div className='nav-link'>
          <a href="/"><IoHomeOutline size={24}/>Home</a>
        </div>
        <div className='nav-link'>
          <a href="/symptom"><LuBotMessageSquare size={24} />Bot</a>
        </div>
        <div className='nav-link'>
          <a href="/location"><MdOutlineLocalHospital size={24}/>Location</a>
        </div>
        <div className='user-section'>
          <a><BiUserCheck size={24}/></a> 
          {isLoggedIn ? (
            <div className='user-info'>
              <span>{user.username}</span>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <button onClick={handleLogin}>Login</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;