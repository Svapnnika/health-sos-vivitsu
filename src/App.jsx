import React from 'react';
import Header from './components/Header'; 
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Symptom from './components/Symptom';
import Register from './components/Register';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/symptom" element={<Symptom />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;