import React from 'react';
import Navbar from './components/Navbar';
import HoverImage from './components/HoverImage';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import './App.css';
import NavBar from "./components/navbar"
import Footer from "./components/footer"
import Signup from "./components/signup"


import image1 from './images/HoverGlasses1.jpg'; 
import image2 from './images/HoverGlasses2.jpg';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HoverImage
          image1={image1}
          image2={image2}
          altText="Hover to change image"
        />
        <ProductList />
      </main>
      <Footer />
    </div>
  );
};
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Footer />
        <Signup />
      </header>
    </div>
  );

}

export default App;
