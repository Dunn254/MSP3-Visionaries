// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Ensure this is imported if you have global styles
import NavBar from './components/navbar'; // Import the NavBar component
import Footer from './components/footer'; // Import the Footer component
import Signup from './components/signup'; // Import the SignUp component
import Login from './components/login'; // Import the Login component
import Products from './components/product';// Import the Products component

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* You can add a default route or a home route if needed */}
            <Route path="/" element={<Login />} /> {/* Default route */}
            <Route path="/Products" element={<Products />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
