import React from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css'; 

const Home = () => {
  const location = useLocation();
  const name = location.state?.name || 'Guest'; 

  return (
    <div className="home-container">
      <h2>Welcome to the Home Page, {name}!</h2>
    </div>
  );
};

export default Home;