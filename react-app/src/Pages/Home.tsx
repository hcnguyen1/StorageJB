import React from 'react';
import { useNavigate } from 'react-router-dom';

// Home page

const Home: React.FC = () => {
    const navigate = useNavigate();
  
    const handleLogin = () => {
      navigate('/lobby');
    };
  
    return (
      <div className="Home">
        <h1>StorageJB</h1>
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </div>
    );
  };
  
  export default Home;