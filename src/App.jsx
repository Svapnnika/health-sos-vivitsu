import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Symptom from './components/Symptom'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/symptom" element = {<Symptom/>} />
      </Routes>
    </Router>
  );
}

export default App;
