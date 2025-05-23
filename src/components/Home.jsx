import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="title-gloss">
        BookList<span className="blinking-dot">.</span>
      </h1>
      <button 
        className="btn btn-glow btn-xl mt-4"
        onClick={() => navigate('/search')}
      >
        Search
      </button>
    </div>
  );
}

export default Home;