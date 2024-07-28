import React from 'react';
import MainContent from './MainContent';
import MainSection from './MainSection';
import ProductList from './ProductList';

const Home = () => {
  return (
    <div className="home">
      <MainContent />
      <MainSection />
      <ProductList />
    </div>
  );
};

export default Home;
