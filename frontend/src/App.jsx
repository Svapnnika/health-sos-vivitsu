import React from 'react';
import Header from './components/Header'; 
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Symptom from './components/Symptom';
import Register from './components/Register';
import Location from './components/Location';
import SendSOSButton from './components/SendSOSButton'; // Import the SendSOSButton component
import { AuthProvider } from './components/Auth';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const username = "JohnDoe";
  const disease = "Flu";
  const probability = "85%";

  return ( 
    <AuthProvider>  
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/symptom" element={<Symptom />} />
          <Route path="/register" element={<Register />} />
          <Route path="/location" element={<Location />} />
          <Route path="/sos" element={<SendSOSButton username={username} disease={disease} probability={probability} />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>  
  );
}

export default App;
