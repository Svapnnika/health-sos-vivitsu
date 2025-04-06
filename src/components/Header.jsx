import React from 'react';
import './Header.css';
import { LuBotMessageSquare } from "react-icons/lu";
import { BiUserCheck } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


function Header() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  };
  return (
    <div className="header">
      <div style={{ fontWeight:"bolder", fontSize:30}}>Health SOS</div>
      <div className="header-link">
        <div className='line'>
        <a href="/"><IoHomeOutline size={24}/></a>
        <a href="/symptom"><LuBotMessageSquare size={24} /></a>
        </div>
        <div className='line'>
        <a><BiUserCheck size={24}/></a> <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Header;