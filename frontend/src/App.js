import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Ensure this is imported if you have global styles
import NavBar from './components/navbar'; // Import the NavBar component
import Footer from './components/Footer'; // Import the Footer component
import Signup from './components/signup'; // Import the SignUp component
import Login from './components/login'; // Import the Login component
import ProductList from './components/ProductList'; 
import About from './components/About'
import Home from './components/Home'
import './index.css'; // Ensure this file exists
//import reportWebVitals from './reportWebVitals';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/" element={<Home />} /> 
    
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;